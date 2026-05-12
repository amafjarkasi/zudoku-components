# Zephyr Developer Portal

A comprehensive **Zudoku** documentation site featuring reusable UI components for API documentation platforms. This project demonstrates modern documentation design patterns and serves as a reference implementation for building developer portals with Zudoku.

## Overview

This is the **Zephyr Developer Portal** — a documentation platform for a premium API service covering E-Commerce, Analytics, and Authentication. Built with [Zudoku](https://zudoku.dev), React, and TypeScript.

## Tech Stack

- **Framework**: [Zudoku v0.77.0](https://zudoku.dev) - API Documentation Framework
- **UI**: React 19+ with TypeScript
- **Styling**: CSS Variables + Custom CSS (Theme-aware)
- **Content**: MDX files for documentation
- **API Specs**: OpenAPI 3.0 (YAML) with example responses
- **Diagrams**: Mermaid.js
- **Syntax Highlighting**: Shiki with custom themes
- **Build**: Static site generation

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
zudoku/
├── pages/                    # MDX documentation content
│   ├── introduction.mdx     # Homepage
│   ├── auth/                # Authentication docs
│   ├── ecommerce/           # E-Commerce API docs
│   ├── analytics/          # Analytics API docs
│   ├── advanced/            # Technical concepts
│   ├── sdks/               # SDK documentation
│   ├── integrations/        # Integration guides
│   ├── best-practices/     # Security, performance
│   ├── migration/           # Migration guides
│   ├── tutorials/           # Step-by-step tutorials
│   ├── guides/             # Configuration guides
│   ├── examples/           # Example implementations
│   └── components/          # UI Component Showcase
├── apis/                    # OpenAPI 3.0 specifications
│   ├── ecommerce.yaml       # E-Commerce API
│   ├── analytics.yaml       # Analytics API
│   └── auth.yaml            # Authentication API
├── public/                  # Static assets
│   ├── logo-*.svg          # Logo variants (Zephyr branding)
│   ├── favicon.svg         # Diamond favicon
│   └── components.css      # Component styles
├── zudoku.config.tsx       # Central configuration
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .gitignore
└── README.md
```

## Screenshots

> Note: Screenshots have been removed as the referenced external repository is no longer available. Please run the project locally with `npm run dev` to see the documentation site.

### Running Locally
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Component Library

This project includes **30+ reusable UI components** for API documentation sites. Browse them under `pages/components/`:

### Interactive Components
| Component | Description |
|-----------|-------------|
| `feature-cards` | Visual grid of feature categories with icons |
| `feature-checklist` | Visual checklist with supported/coming badges |
| `video-tutorials` | Video card grid with thumbnails |
| `page-feedback` | "Was this page helpful?" thumbs up/down |
| `integration-showcase` | Logo grid of supported integrations |
| `sdk-comparison` | SDK matrix with installation commands |

### Navigation Components
| Component | Description |
|-----------|-------------|
| `table-of-contents` | In-page anchor navigation with active states |
| `breadcrumb` | Hierarchical path display |
| `prev-next-nav` | Previous/next page navigation links |
| `version-selector` | API version dropdown selector |
| `sidebar-navigation` | Collapsible sidebar menu sections |

### Content Components
| Component | Description |
|-----------|-------------|
| `community-links` | Discord/GitHub/Twitter banner |
| `support-section` | Support tier cards (Community/Pro/Enterprise) |
| `changelog` | Timeline of updates with badges |
| `status-page` | API health dashboard with uptime metrics |
| `auth-flows` | OAuth2/JWT flow diagrams |
| `rate-limit-indicator` | Visual progress bar for rate limits |

### UI Elements
| Component | Description |
|-----------|-------------|
| `api-parameter-table` | Parameter reference tables |
| `search-component` | Search UI patterns |
| `alert-banner` | Dismissible notification banners |
| `announcement-bar` | Site-wide announcement banners |
| `badges-tags` | Labels, method badges, and tags |
| `callout-box` | Styled info/warning/danger boxes |
| `card-grid` | Responsive card layouts |
| `progress-indicators` | Progress bars, spinners, skeletons |
| `timeline` | Chronological sequences |
| `image-lightbox` | Expandable image gallery |

## Features

### Theme System
- **Light Mode**: Clean violet accent with `#7c3aed` primary → `#3b82f6` blue gradient
- **Dark Mode**: Adjusted palette with `#a78bfa` primary → `#60a5fa` blue gradient
- **Typography**: Inter (sans-serif), Fira Code (monospace)
- **CSS Variables**: All colors and spacing via custom properties

### Custom CSS Components
The `zudoku.config.tsx` and `public/components.css` include custom CSS for:
- Logo styling (`.zephyr-logo` classes with gradient diamond icon)
- Copy button for code blocks (CSS-only, no JavaScript)
- Multi-language code tabs with localStorage persistence
- API endpoint method badges (GET/POST/PUT/DELETE/PATCH)
- Rate limit visualization with progress bars
- Tutorial progress tracker with step indicators
- Mermaid diagram styling
- Alert banners, callout boxes, page banners

### Code Block Styling
- Premium code blocks with left border accent
- Internal code padding: `1.25rem 1.5rem 1.25rem 1rem` (top/right/bottom/left)
- Line height: `1.05` for optimal density
- Syntax highlighting with saturation boost (`saturate(1.4) contrast(1.05)`)

### API Documentation
- OpenAPI 3.0 specs with complete example responses
- Syntax-highlighted JSON code blocks for each endpoint
- Interactive API reference pages at `/api/ecommerce`, `/api/analytics`, `/api/auth`

### Brand Identity
- **Zephyr** brand with stylized diamond/gem icon
- Violet → Indigo → Blue gradient color scheme
- Custom SVG logos for light/dark modes

## Configuration

The `zudoku.config.tsx` file controls:

```typescript
// Theme colors
theme.light.primary   // #7c3aed (violet)
theme.light.secondary // #6366f1 (indigo)
theme.light.accent    // #3b82f6 (blue)

// Site branding
site.logo: {
  src: { light: "/logo-text-light.svg", dark: "/logo-text-dark.svg" },
  width: "280px"
}

// Navigation structure
navigation: [...]    // Sidebar menu items

// API mappings
apis: [...]          // OpenAPI file → URL route

// Site metadata
metadata: {
  title: "Zephyr Developer Portal",
  description: "..."
}
```

## Content Patterns

### MDX Frontmatter
```yaml
---
title: Page Title
description: Optional description
---
```

### Callout Usage
```mdx
<Callout type="info">
**Info:** Informational content
</Callout>

<Callout type="tip">
**Tip:** Helpful suggestion
</Callout>

<Callout type="warning">
**Warning:** Important warning
</Callout>

<Callout type="danger">
**Danger:** Critical security warning
</Callout>
```

### Code Blocks
````mdx
```typescript
// TypeScript code
const client = new ZephyrClient({ apiKey: '...' });
```
````

## Development

### Adding New Components

1. Create MDX file in `pages/components/`
2. Add to navigation in `zudoku.config.tsx`
3. Test with `npm run dev`

### Adding Content Pages

1. Create MDX file in appropriate `pages/` subdirectory
2. Add frontmatter with `title`
3. Add navigation path in `zudoku.config.tsx`

### API Documentation

1. Add OpenAPI YAML to `apis/` directory
2. Include `example` fields in response schemas for syntax-highlighted code blocks
3. Map to URL route in `zudoku.config.tsx` `apis` array

## Deployment

The build output in `/dist/` is a complete static site:

```bash
npm run build    # Build to dist/
npm run preview  # Preview build locally
```

Deploy to any static host:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Any web server

## Resources

- [Zudoku Documentation](https://zudoku.dev/docs)
- [OpenAPI 3.0 Specification](https://swagger.io/specification/)
- [MDX Documentation](https://mdxjs.com/)
- [Mermaid Diagrams](https://mermaid.js.org/)

## License

MIT