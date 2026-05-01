import { NextRequest } from 'next/server';
import { fail, ok } from '@/lib/api';
import { prisma } from '@/lib/prisma';
import { hashPassword, signToken } from '@/lib/auth';
import { registerSchema } from '@/lib/validators';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = registerSchema.parse(body);

    const existing = await prisma.user.findUnique({
      where: { email: payload.email.toLowerCase() },
      select: { id: true },
    });
    if (existing) {
      return fail('User already exists', 409);
    }

    const passwordHash = await hashPassword(payload.password);
    const user = await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email.toLowerCase(),
        passwordHash,
        role: payload.role ?? 'COUNSELOR',
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return ok({ user, token }, 201);
  } catch (error) {
    return fail('Invalid request payload', 400, error);
  }
}
