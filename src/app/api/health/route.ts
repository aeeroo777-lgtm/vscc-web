import { ok } from '@/lib/api';

export async function GET() {
  return ok({
    service: 'vscc-backend',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
}
