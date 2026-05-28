# ShreeJee Travels

Static frontend-only travel and visa consultancy website built with Next.js and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The project uses `output: 'export'`, so the production build generates a static `out/` folder and is ready for Vercel free hosting.

## Contact Form

Create a Formspree form and set the recipient email in Formspree to:

```bash
shreejeetraveljalandhar@gmail.com
```

Then add this environment variable in Vercel:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

The contact form is static-friendly and submits directly to the configured Formspree endpoint. It shows a success message after a successful submission and a friendly error message if submission fails.

No database, admin panel, authentication, payment gateway or online booking is included.
