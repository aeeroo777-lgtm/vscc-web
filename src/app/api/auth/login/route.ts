import { NextRequest } from 'next/server';
import { fail, ok } from '@/lib/api';
import { prisma } from '@/lib/prisma';
import { comparePassword, signToken } from '@/lib/auth';
import { loginSchema } from '@/lib/validators';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = loginSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email: payload.email.toLowerCase() },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        passwordHash: true,
      },
    });
    if (!user) {
      return fail('Invalid credentials', 401);
    }

    const isValid = await comparePassword(payload.password, user.passwordHash);
    if (!isValid) {
      return fail('Invalid credentials', 401);
    }

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return ok({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    return fail('Invalid request payload', 400, error);
  }
}
