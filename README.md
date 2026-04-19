# satetsu888.com

Personal portfolio site. Live at [satetsu888.com](https://satetsu888.com).

## Stack

- React 19 + TypeScript
- Vite 6
- Vanilla CSS + CSS Modules (CSS Variables for theming)
- react-icons (Simple Icons subset) for tech tags
- Cloudflare Workers (Static Assets) — deployed via Workers Builds on `master` push

## Develop

```bash
npm ci
npm run dev       # http://localhost:5173
npm run build     # -> dist/
npm run preview   # http://localhost:4173
```

Node version is pinned in `.node-version` (24.15.0). Works with nodenv / fnm / asdf.

## Structure

```
src/
├── main.tsx / App.tsx
├── sections/     Hero, About, Links, Projects
├── components/   ExternalLink, TechTag, ProjectItem, CompactProjectItem
├── data/         profile, projects, tech, types
└── styles/       globals.css + *.module.css
public/           me.jpg, favicon.svg
wrangler.jsonc    Cloudflare Workers Static Assets config
```

Projects with `year >= 2016` render in the main list; older entries fold into a compact `archive` block.

## Deploy

Pushing to `master` triggers Cloudflare Workers Builds to run `npm ci && npm run build` and publish `dist/` as the Worker's static assets. Custom domain is attached on the Cloudflare dashboard.

## License

MIT
