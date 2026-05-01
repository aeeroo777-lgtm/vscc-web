import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserRole } from '@prisma/client';
import { fail } from './api';

const JWT_EXPIRY = '7d';

type AuthTokenPayload = {
  userId: string;
  email: string;
  role: UserRole;
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }
  return secret;
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: AuthTokenPayload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: JWT_EXPIRY });
}

export function verifyToken(token: string) {
  return jwt.verify(token, getJwtSecret()) as AuthTokenPayload;
}

export function getBearerToken(headerValue: string | null) {
  if (!headerValue) {
    return null;
  }
  const [type, token] = headerValue.split(' ');
  if (type !== 'Bearer' || !token) {
    return null;
  }
  return token;
}

export function ensureRole(role: UserRole, allowed: UserRole[]) {
  if (!allowed.includes(role)) {
    return fail('Forbidden', 403);
  }
  return null;
}
