# ManuelTech GH

Premium website for ManuelTech GH, a full-stack web development and digital business growth company.

## Local development

Requirements: Node.js 20 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`.

Required before public form submissions can be delivered:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`

Optional public values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- social profile URLs

If the Resend variables are missing, the forms validate and then return a clear configuration error. They do not pretend a message was delivered.

## Before launch

1. Set the production domain in `NEXT_PUBLIC_SITE_URL`.
2. Publish confirmed email, phone, and WhatsApp details only when they are real.
3. Configure Resend (or replace the email integration) and send a test inquiry.
4. Review `/privacy` and `/terms` with qualified counsel.
5. Replace the company-details placeholder on `/about` with verified facts.
6. Add authentic testimonials only with permission.

## Deployment

The project is compatible with Vercel:

```bash
npm run build
```

Connect the Git repository to Vercel, add the environment variables in the project settings, and deploy. Any Node host that can run `next start` after `next build` also works.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
