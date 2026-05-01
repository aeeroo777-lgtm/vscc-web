import { NextRequest } from 'next/server';
import { fail, ok } from '@/lib/api';
import { prisma } from '@/lib/prisma';
import { createLeadSchema } from '@/lib/validators';
import { ensureRole, getBearerToken, verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = createLeadSchema.parse(body);

    const lead = await prisma.lead.create({
      data: payload,
    });

    return ok(lead, 201);
  } catch (error) {
    return fail('Invalid request payload', 400, error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = getBearerToken(request.headers.get('authorization'));
    if (!token) {
      return fail('Missing authorization token', 401);
    }

    const auth = verifyToken(token);
    const authError = ensureRole(auth.role, ['ADMIN', 'COUNSELOR']);
    if (authError) {
      return authError;
    }

    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return ok(leads);
  } catch (error) {
    return fail('Unauthorized or invalid token', 401, error);
  }
}
