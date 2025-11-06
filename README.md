# Rushyanth Nerellakunta - Personal Website

This is a Next.js portfolio site.

## Local Development

```bash
npm install
npm run dev
```

## Deploying to Render (recommended)

Option A — Blueprint (one-click):

1. Ensure `render.yaml` is committed.
2. In Render, click New → Blueprint and connect the repo. Deploy.

Option B — Web Service:

1. Create a new Web Service.
2. Build Command: `npm install && npm run build`
3. Start Command: `npm run start`
4. Node version: `20`
5. Add any required env vars (if using Firebase SDK or others).

## Deploying to Vercel (alternative)

1. Import the repo into Vercel.
2. Framework preset: Next.js
3. Build Command: `next build` (default is fine)
4. Output: `.next`
5. Env vars as needed.

## Notes

- Project previously targeted Firebase Hosting; Render and Vercel are simpler for Next.js SSR.
- If Firebase is unused, remove `src/lib/firebase.ts` and related config.

