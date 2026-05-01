import { ok } from '@/lib/api';

export async function GET() {
  return ok({
    openapi: '3.0.3',
    info: {
      title: 'VSCC Backend API',
      version: '1.0.0',
      description: 'Auth and leads backend for VSCC website',
    },
    servers: [
      {
        url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4028',
      },
    ],
    paths: {
      '/api/health': {
        get: {
          summary: 'Health check',
        },
      },
      '/api/auth/register': {
        post: {
          summary: 'Register user',
        },
      },
      '/api/auth/login': {
        post: {
          summary: 'Login user',
        },
      },
      '/api/leads': {
        post: {
          summary: 'Create lead (public)',
        },
        get: {
          summary: 'List leads (protected)',
          security: [{ bearerAuth: [] }],
        },
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  });
}
