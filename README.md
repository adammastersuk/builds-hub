# Builds Hub

Builds Hub is a lightweight Next.js shell that indexes and routes to independent micro-build projects deployed on Vercel.

Production target domain:

- `builds.adammasters.co.uk`

## What this project does

- Serves a simple homepage index of available builds.
- Keeps user-facing URLs on the hub domain.
- Proxies build routes using Next.js rewrites to external Vercel deployments.

Examples:

- `/snake` → `https://snake-build.vercel.app`
- `/reaction-speed-test` → `https://reaction-test.vercel.app`

## Tech stack

- Next.js (App Router)
- TypeScript
- Minimal custom CSS

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Rewrites

Rewrites are configured in `next.config.js`.

Current routes:

- `/snake/:path*` → `https://snake-build.vercel.app/:path*`
- `/reaction-speed-test/:path*` → `https://reaction-test.vercel.app/:path*`

## Adding a new build

1. Deploy the new build app to Vercel.
2. Add a rewrite in `next.config.js`:

```js
{
  source: '/memory-game/:path*',
  destination: 'https://memory-game.vercel.app/:path*'
}
```

And optionally for root path parity:

```js
{
  source: '/memory-game',
  destination: 'https://memory-game.vercel.app'
}
```

3. Add a card entry in `app/page.tsx`:

```ts
{
  title: 'Memory Game',
  description: 'Flip cards and match pairs',
  href: '/memory-game'
}
```

Future examples:

- `/memory-game`
- `/color-match`

## Deployment notes (Vercel)

1. Import this repo into Vercel.
2. Keep framework preset as **Next.js**.
3. Configure the custom domain `builds.adammasters.co.uk` on the Vercel project.
4. Ensure DNS records point to Vercel as required.
5. Deploy.

Once deployed, rewrite paths remain on the hub domain while content is served from each micro-build deployment.
