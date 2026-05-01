# VSCC WEBSITE

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- JWT auth (`/api/auth/*`)

## Backend Endpoints

- `GET /api/health` - service health
- `POST /api/auth/register` - create admin/counselor user
- `POST /api/auth/login` - sign in and receive JWT
- `POST /api/leads` - public lead form submission
- `GET /api/leads` - protected lead list (Bearer token)
- `GET /api/docs` - API metadata

## Local Setup

1. Install dependencies
   - `npm install`
2. Create env file
   - copy `.env.example` to `.env`
3. Update secrets and database
   - set `DATABASE_URL`
   - set `JWT_SECRET`
4. Generate Prisma client
   - `npx prisma generate`
5. Run migrations
   - `npx prisma migrate dev --name init`
6. Start app
   - `npm run dev`

## Notes

- `.env` is intentionally ignored in git.
- Contact section now posts directly to `/api/leads`.