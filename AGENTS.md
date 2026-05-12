# Agent Guide for Zudoku Documentation Site

## Project Overview

A **Zudoku** static documentation site for the fictional "Zephyr" API platform. No backend server, no custom React code — all content is authored in MDX files and OpenAPI specs, wired together by a single config file (`zudoku.config.tsx`).

The site documents three API domains — E-Commerce, Analytics, and Authentication — plus SDKs, integration guides, tutorials, and a gallery of reusable CSS component patterns.

## Essential Commands

```bash
npm run dev        # Dev server with hot-reload for MDX (http://localhost:3000)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint (TypeScript files only — MDX is NOT linted)
```

## Architecture

### Single Config File

`zudoku.config.tsx` controls **everything**: theme palette, custom CSS, navigation sidebar, API route mappings, redirects, metadata, and syntax highlighting. It imports `./public/components.css` for component-specific styles.

### Content Pipeline

| Source | Route | Rendered as |
|--------|-------|-------------|
| `pages/*.mdx` | `/<path>` | Documentation page |
| `apis/*.yaml` | `/api/<path>` | Interactive API reference (OpenAPI) |

- Navigation path `/auth/getting-started` → file `pages/auth/getting-started.mdx`
- API mapping `path: "/api/ecommerce"` → file `apis/ecommerce.yaml`
- Root `/` redirects to `/introduction` via `redirects` config

### Directory Layout

```
pages/                  # MDX content (one page per file)
  auth/                 #   Authentication docs
  ecommerce/            #   E-Commerce docs (products, orders, inventory, shipping)
  analytics/            #   Analytics docs (events, funnels, segments)
  sdks/                 #   SDK docs (react, python, cli)
  integrations/         #   Integration guides (webhooks, analytics, payment, ecommerce)
  advanced/             #   Architecture, errors, rate-limiting, webhooks
  best-practices/       #   Security, performance, reliability
  tutorials/            #   Step-by-step tutorials
  guides/               #   Environments, error-handling, rate-limits
  examples/             #   Full integration examples
  components/           #   Reusable CSS component gallery (22 component pages)
  migration/            #   Migration from other platforms
apis/                   # OpenAPI 3.0 specs
  ecommerce.yaml        #   Syntara E-Commerce API
  analytics.yaml        #   Syntara Analytics API
  auth.yaml             #   Auth API
  openapi.yaml          #   ⚠️ Swagger Petstore example — not real documentation
public/                 # Static assets served at root
  components.css        #   Component-specific CSS overrides (imported by config)
  logo-*.svg, banner*.svg, favicon.svg
  screenshots/          #   Component gallery screenshots
```

## Key Patterns

### MDX Frontmatter

Every MDX file requires a `title` in frontmatter. Pages without it will not render properly. A `description` field is also used on some pages.

```yaml
---
title: Page Title
description: Optional short description
---
```

### H1 Display Behavior

The custom CSS hides all `article h1` elements (`display: none !important`) because Zudoku renders the frontmatter title in the page header. **Do not rely on the first H1 being visible** — the header area shows the title from frontmatter. Use `##` (H2) and below for visible content headings.

### Built-in Components

Zudoku provides built-in MDX components:

- **Callout**: `<Callout type="info|caution|warning|danger|tip">` — always start content with a bold label (e.g., `**Info:**`)
- **Mermaid**: `<Mermaid chart={`flowchart TD ...`} />` — renders diagrams inline

### CSS Component Gallery

The `pages/components/` directory contains 22 showcase pages demonstrating reusable CSS patterns. These components are styled via `public/components.css` (loaded through the config import) and hardcoded CSS in `theme.customCss`.

Component classes include: `.feature-card`, `.zudoku-card`, `.endpoint-badge`, `.rate-limit-viz`, `.tutorial-progress`, `.code-tabs`, `.persistent-tabs`, `.copy-button`, `.zephyr-logo`, `.mermaid`, and more.

### Custom CSS Architecture

Styling comes from **two** sources that must stay in sync:

1. **Theme palette** (`theme.light` / `theme.dark`) — generates CSS custom properties like `--primary`
2. **Hardcoded CSS** in `theme.customCss` — uses raw hex values for gradients, method badges, etc.

When changing brand colors, update **both** the palette entries and the hardcoded hex values in `customCss`. For example, the primary violet `#7c3aed` appears in: palette `primary`, H1 gradients, card hover shadows, tutorial step pulse animation, and method badge colors.

### OpenAPI Specs

Each API domain has its own YAML file in `apis/`. They use OpenAPI 3.0 (`openapi.yaml` uses 3.0.2). Specs reference a different brand name ("Syntara") than the docs site ("Zephyr") — this is intentional (the specs represent a backend service name).

The `apis/openapi.yaml` is a **Swagger Petstore placeholder** mapped to `/api`. It is not real documentation.

## Gotchas

1. **Config changes need restart**: Edits to `zudoku.config.tsx` require restarting the dev server. MDX content hot-reloads automatically.

2. **Navigation paths are not validated**: A typo or missing file in the navigation config produces a silent 404 — no build-time error. Always test navigation after editing the config.

3. **Case-sensitive paths**: `/Auth/Getting-Started` ≠ `/auth/getting-started`. Navigation entries must exactly match file paths.

4. **API route prefix**: The `apis` config `path` field is the full URL path (e.g., `"/api/ecommerce"`), not just `"/ecommerce"`. The `/api` prefix is explicit, not automatic.

5. **Two CSS files**: `theme.customCss` in the config contains the bulk of styling (950+ lines), while `public/components.css` is imported separately for component-specific overrides. Both use `!important` heavily to override Zudoku/shadcn defaults.

6. **Static asset paths**: In MDX, reference public assets with absolute paths (`/logo-light.svg`), not relative paths.

7. **No custom React components**: Zudoku provides the rendering layer. Use built-in components (Callout, Mermaid) and HTML/CSS in MDX. The `pages/` directory should only contain `.mdx` files.

8. **ESLint only covers TypeScript**: The `.eslintrc.json` extends `eslint:recommended` with `@typescript-eslint` — it does not lint MDX or YAML files.

9. **Mermaid dependency**: The `mermaid` package is listed as a runtime dependency for rendering diagrams via `<Mermaid>` components in MDX.

10. **`example.mdx` is a scaffold**: The file `pages/example.mdx` is a placeholder with minimal content. It is not referenced in navigation.

## Common Tasks

### Add a new documentation page
1. Create `pages/<category>/<name>.mdx` with frontmatter `title`
2. Add the path string (e.g., `"/<category>/<name>"`) to the `navigation` array in `zudoku.config.tsx`
3. Restart dev server if config changed

### Add a new API spec
1. Create `apis/<name>.yaml` (OpenAPI 3.0 format)
2. Add `{ type: "file", input: "./apis/<name>.yaml", path: "/api/<name>" }` to the `apis` array
3. Add a navigation link `{ type: "link", label: "API Name", to: "/api/<name>" }`

### Update theme colors
1. Edit `theme.light` and `theme.dark` palette objects
2. Search `theme.customCss` for all hardcoded hex values matching the old color
3. Update them — they do not sync automatically

## Tech Stack

- **Zudoku** `0.77.0` — Static site generator for API docs
- **React** 19 — Used internally by Zudoku (not directly in this project)
- **TypeScript** 6 — For config file
- **Mermaid** 11 — Diagram rendering in MDX
- **ESLint** 8 with `@typescript-eslint`

## Resources

- Zudoku docs: https://zudoku.dev/docs
- OpenAPI 3.0 spec: https://swagger.io/specification/
- Lucide icons (for nav): https://lucide.dev/
