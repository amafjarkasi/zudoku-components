# Zephyr Developer Portal

![Zephyr Logo](logo.svg)

A comprehensive **Zudoku**-powered documentation site for the Syntara API platform — covering E-Commerce, Analytics, and Authentication services. This project serves as both a complete developer portal and a reference implementation for building interactive API documentation with Zudoku.

## What This Project Is

The **Zephyr Developer Portal** is a production-ready documentation site that demonstrates how to build engaging developer documentation. It combines interactive API references, structured navigation, and reusable component patterns to create a documentation experience that developers actually want to use.

Key capabilities:
- **Interactive API Explorer** — OpenAPI 3.0 specs rendered with live example responses, syntax-highlighted JSON, and method badges
- **30+ UI Components** — Copy-paste ready patterns for feature grids, callout boxes, progress indicators, timelines, and more
- **Multi-theme Support** — Automatic light/dark mode with violet-to-blue gradient accent colors
- **MDX Content** — Full Markdown support with custom components for code tabs, alerts, and embedded diagrams

This isn't just documentation — it's the actual developer portal for Syntara's premium API platform, used by developers integrating e-commerce, analytics, and authentication into their applications.

## Tech Stack

- **Framework**: [Zudoku v0.77.0](https://zudoku.dev) — Built on Vite with React 19, optimized for API documentation
- **UI**: React 19+ with TypeScript — Component-based architecture with full type safety
- **Styling**: CSS Variables + Custom CSS — Theme-aware design with CSS custom properties
- **Content**: MDX files — Markdown with JSX components for interactive documentation
- **API Specs**: OpenAPI 3.0 (YAML) — Complete specs with example responses for every endpoint
- **Diagrams**: Mermaid.js — Flowcharts, sequence diagrams, and architecture visuals
- **Syntax Highlighting**: Shiki — Multi-language with custom violet/blue accent themes
- **Build**: Static site generation — Deploy anywhere, loads fast, no server required

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
zudoku/
├── pages/                    # MDX documentation content
│   ├── introduction.mdx     # Homepage
│   ├── auth/                # Authentication guides
│   ├── ecommerce/           # E-Commerce API reference
│   ├── analytics/           # Analytics API reference
│   ├── advanced/            # Architecture & rate limiting
│   ├── sdks/                # SDK setup (React, Python, CLI)
│   ├── integrations/        # Webhook & payment integrations
│   ├── best-practices/     # Security & performance guides
│   ├── migration/           # Migration guides from other platforms
│   ├── tutorials/           # Step-by-step integration tutorials
│   ├── guides/             # Environment & error handling
│   ├── examples/           # Full implementation examples
│   └── components/          # UI Component Showcase (30+ components)
├── apis/                    # OpenAPI 3.0 specifications
│   ├── ecommerce.yaml       # Products, Orders, Cart, Inventory
│   ├── analytics.yaml       # Events, Metrics, Funnels, Segments, Dashboards
│   └── auth.yaml            # OAuth2, API Keys, SSO Providers
├── public/
│   ├── screenshots/        # Component showcase screenshots
│   ├── logo-*.svg          # Zephyr branding (light/dark variants)
│   ├── favicon.svg         # Diamond favicon
│   └── components.css      # Component-specific styles
├── zudoku.config.tsx       # Theme, navigation, API mappings, metadata
├── package.json
└── README.md
```

## Screenshots

Run `npm run dev` and open http://localhost:3000 to see the full documentation site.

## Component Library

This project includes **30+ reusable UI components** for API documentation sites. Each component is documented and live in `pages/components/`.

### Interactive Components
| Component | Description |
|-----------|-------------|
| `feature-cards` | Grid layout with icons, descriptions, and links |
| `feature-checklist` | Checklist with supported/coming badges |
| `video-tutorials` | Video card grid with play buttons and duration |
| `page-feedback` | "Was this page helpful?" thumbs up/down |
| `integration-showcase` | Logo grid for supported integrations |
| `sdk-comparison` | SDK matrix with installation commands |
| `badge-row` | Inline badges for features/tags |

### Navigation Components
| Component | Description |
|-----------|-------------|
| `table-of-contents` | In-page anchor nav with active state highlighting |
| `breadcrumb` | Hierarchical path display (Home > Category > Page) |
| `prev-next-nav` | Previous/next page navigation with titles |
| `version-selector` | API version dropdown with NEW/BETA/DEPRECATED tags |
| `sidebar-navigation` | Collapsible sidebar sections |
| `breadcrumb-nav` | Breadcrumb with styled separators |

### Content Components
| Component | Description |
|-----------|-------------|
| `community-links` | Discord, GitHub, Twitter link banner |
| `support-section` | Community/Pro/Enterprise pricing cards |
| `changelog` | Timeline with version badges and dates |
| `status-page` | API health dashboard with uptime metrics |
| `auth-flows` | OAuth2/JWT flow step diagrams |
| `rate-limit-indicator` | Visual progress bar with countdown |
| `step-progress` | Multi-step progress tracker |
| `metrics-grid` | Metric cards with large numbers |

### UI Elements
| Component | Description |
|-----------|-------------|
| `api-parameter-table` | Parameter reference with type, required, description |
| `api-parameter-table` | Full HTTP endpoint documentation |
| `search-component` | Search box with keyboard shortcut hints |
| `alert-banner` | Dismissible info/warning/success/error banners |
| `announcement-bar` | Site-wide announcement with gradient background |
| `callout-box` | Styled info/tip/warning/danger boxes |
| `card-grid` | Responsive card layouts |
| `progress-indicators` | Progress bars, spinners, skeleton loaders |
| `timeline` | Chronological event sequences |
| `image-lightbox` | Expandable image gallery |
| `method-badge` | GET/POST/PUT/PATCH/DELETE method badges |

## Features

### Theme System

The Zephyr design system uses a violet-to-blue gradient accent:

**Light Mode:**
- Primary: `#7c3aed` (violet)
- Secondary: `#6366f1` (indigo)
- Accent: `#3b82f6` (blue)

**Dark Mode:**
- Primary: `#a78bfa` (lighter violet)
- Secondary: `#818cf8` (lighter indigo)
- Accent: `#60a5fa` (lighter blue)

Typography uses **Inter** for UI text and **Fira Code** for code blocks. All colors are exposed as CSS custom properties for consistent theming.

### Code Block Styling

Premium code blocks with enhanced visual hierarchy:

```css
pre code {
  padding: 1.25rem 1.5rem 1.25rem 1rem;  /* top right bottom left */
  line-height: 1.05;
  background: transparent;
}
```

Features:
- Left border accent (primary color)
- Syntax highlighting with boosted saturation and contrast
- CSS-only copy button (appears on hover)
- Language label display

### API Documentation

Every endpoint includes:
- OpenAPI 3.0 spec with complete schema definitions
- Example request bodies with realistic data
- Example response bodies with syntax highlighting
- HTTP method badges (GET = green, POST = blue, etc.)

Example endpoints documented:
- **E-Commerce**: Products CRUD, Orders, Cart, Inventory
- **Analytics**: Event tracking, Metrics, Funnels, Segments, Dashboards
- **Authentication**: OAuth2 tokens, API keys, SSO providers

### Component CSS Patterns

Custom styles in `public/components.css` with `!important` overrides for:
- Alert banners with icon, title, description, and action buttons
- Feature cards with hover effects and gradient borders
- Callout boxes with type-specific colors
- Video tutorial grids with thumbnail placeholders
- Progress indicators with animated skeletons
- Breadcrumb navigation with styled separators
- Prev/next navigation with hover effects
- Table of contents with active state highlighting

### Copy Button for Code Blocks

CSS-only implementation using checkbox hack:
- Hidden on idle, appears on `pre:hover`
- Shows clipboard icon on hover
- Shows checkmark when clicked
- No JavaScript required

### Multi-Language Code Tabs

Tabbed interface for showing same code in multiple languages:
- Pure CSS implementation
- LocalStorage persistence for preferred language
- Fade animation on tab switch

## Configuration

The `zudoku.config.tsx` file is the single source of truth:

```typescript
// Theme configuration
theme: {
  light: { primary: "#7c3aed", ... },
  dark: { primary: "#a78bfa", ... },
  fonts: { sans: "Inter", mono: "Fira Code" }
}

// Site branding
site: {
  logo: {
    src: { light: "/logo-text-light.svg", dark: "/logo-text-dark.svg" },
    alt: "Zephyr",
    width: "280px"
  }
}

// Navigation tree
navigation: [
  { type: "category", label: "Getting Started", items: [...] },
  { type: "link", to: "/api/ecommerce", label: "API Reference" }
]

// API spec mappings
apis: [
  { type: "file", input: "./apis/ecommerce.yaml", path: "/api/ecommerce" }
]

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
description: Optional SEO description
---
```

### Callout Boxes

```mdx
<Callout type="info">
**Info:** Your information message here.
</Callout>

<Callout type="tip">
**Tip:** A helpful suggestion.
</Callout>

<Callout type="warning">
**Warning:** Something to be careful about.
</Callout>

<Callout type="danger">
**Danger:** Critical action required.
</Callout>
```

### Code Blocks with Language

````mdx
```typescript
const client = new ZephyrClient({
  apiKey: process.env.ZEPHYR_API_KEY
});
```

```python
from zephyr import Client
client = Client(api_key="your-api-key")
```

```bash
curl -X GET https://api.zephyr.dev/v1/products \
  -H "Authorization: Bearer $ZEPHYR_API_KEY"
```
````

### API Endpoint Display

Method badges are styled inline:
- `GET` — Green badge
- `POST` — Blue badge
- `PUT` — Yellow badge
- `PATCH` — Purple badge
- `DELETE` — Red badge

## Development

### Adding a New Component

1. Create `pages/components/my-component.mdx`
2. Add frontmatter with `title`
3. Write content with MDX and custom classes
4. Add to navigation in `zudoku.config.tsx` under Components category
5. Test with `npm run dev`

### Adding a Content Page

1. Create `pages/category/page-name.mdx`
2. Add frontmatter `title` (required)
3. Write content in MDX
4. Add path to navigation in `zudoku.config.tsx`
5. Test with `npm run dev`

### Adding API Documentation

1. Create or update OpenAPI YAML in `apis/`
2. Ensure each response has an `example` object for syntax highlighting
3. Add mapping in `zudoku.config.tsx` under `apis` array
4. Add navigation link if needed

## Deployment

Build produces a complete static site in `/dist/`:

```bash
npm run build    # Outputs to dist/
npm run preview   # Preview at localhost:3000
```

Deploy to any static host:
- **Vercel** — `vercel --prod`
- **Netlify** — Drag dist/ folder
- **Cloudflare Pages** — Connect GitHub repo
- **GitHub Pages** — Push to gh-pages branch
- **Any web server** — Serve the dist/ folder

## Resources

- [Zudoku Documentation](https://zudoku.dev/docs) — Official docs and guides
- [OpenAPI 3.0 Specification](https://swagger.io/specification/) — API spec standard
- [MDX Documentation](https://mdxjs.com/) — Markdown with JSX
- [Mermaid Diagrams](https://mermaid.js.org/) — Diagrams as code

## License

MIT