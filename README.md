# margusliinev.com

Personal website for Margus Liinev.

## Pages

- **Home**: Intro, featured skills, and recent work (`/`).
- **Articles**: Writing and notes (`/articles`).
- **Projects**: Projects I worked on (`/projects`).
- **Contact**: How to reach me (`/contact`).
- **Uses**: Tools, hardware, and software I use (`/uses`).

System routes:

- **Robots** (`/robots.txt`).
- **Sitemap** (`/sitemap.xml`).
- **Web App Manifest** (`/manifest.json`).

## Tech Stack

- **Typescript**
- **React**
- **Next.js**
- **Tailwind**
- **Docker**

## Local Development

```bash
npm install
npm run dev
npm run build
npm run start
```

Useful scripts:

- `npm run check` – Prettier check, ESLint, and TypeScript typecheck
- `npm run format` – Prettier write
- `npm run lint` – Eslint fix

## Deployment

- **Railway**: Builds the app with `next build` (standalone output) and creates a docker image using Dockerfile.
- **Cloudflare**: Fronted by Cloudflare CDN/Proxy for global caching, TLS, and performance.

## License

MIT
