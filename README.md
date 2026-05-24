# Threadform

Custom shirt-selling e-commerce website built with Next.js 14 App Router, Tailwind CSS v3, Prisma, Supabase PostgreSQL, NextAuth v5, Cloudinary, Stripe Checkout, Zustand, and Zod.

## Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and fill in all credentials.
3. Run `npx prisma migrate dev`.
4. Seed the database with `npm run seed`.
5. Start the app with `npm run dev`.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add all environment variables from `.env.example` in the Vercel project settings.
4. Set the production database connection string to your Supabase PostgreSQL URL.
5. Configure the Stripe webhook endpoint as `https://your-domain.com/api/stripe/webhook`.
6. Redeploy after adding Google, Stripe, Supabase, and Cloudinary credentials.

## Notes

- Prisma connects to the Supabase PostgreSQL database through `DATABASE_URL`.
- Cloudinary stores only transformed image URLs in the database.
- Stripe webhook writes paid orders after checkout completion.
- Admin access depends on `User.role === ADMIN`.
