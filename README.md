# Heartfelt Dates

A personal gift website: Envelope → Reveal → Date Plan.

## Develop

```bash
npm install
npm run dev
```

## Test / build

```bash
npm test
npm run typecheck
npm run build
```

## Publish content

Edit `src/content/published.json` (Apology, shared date, Activities), then redeploy. Activity images are remote URLs.

## Deploy

Push to `main` — GitHub Actions builds and deploys to GitHub Pages (`base`: `/ForHer/`). Enable Pages with the **GitHub Actions** source in the repo settings.
