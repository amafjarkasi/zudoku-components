# Agent Guide for Zudoku Documentation Site

This guide helps AI agents work effectively with this Zoku-based API documentation site.

## Project Overview

This is a **Zoku du** documentation site for the Premium API Platform, providing interactive documentation for E-Commerce, Analytics, and Authentication services. The site is a static content-driven application with no backend server - all content is rendered at build time.

**Key characteristics:**
- Content is authored in MDX files and OpenAPI specifications
- Theme and navigation configured in a single TypeScript config file
- No custom React components beyond Zoku du's built-in components
- Build output is a static site deployed to any web host

## Essential Commands

```bash
# Development
npm run dev              # Start dev server (default: http://localhost:3000)

# Build & Preview
npm run build            # Build production site to dist/
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
```

**Important:** Always run `npm run dev` during development to see changes immediately. The dev server provides hot-reload for both MDX content and config changes.

## Project Architecture

### File Structure

```
zudoku/
├── pages/                    # All MDX content
│   ├── introduction.mdx     # Homepage
│   ├── auth/                # Authentication docs
│   ├── ecommerce/           # E-Commerce docs
│   ├── analytics/           # Analytics docs
│   ├── sdks/                # SDK documentation
│   ├── integrations/        # Integration guides
│   ├── advanced/            # Technical concepts
│   ├── best-practices/      # Security, performance, reliability
│   └── migration/           # Migration guides
├── apis/                     # OpenAPI 3.0 specifications
│   ├── auth.yaml           # Authentication API
│   ├── ecommerce.yaml      # E-Commerce API
│   ├── analytics.yaml      # Analytics API
│   └── openapi.yaml        # Example spec (Petstore - can be removed)
├── public/                   # Static assets
│   ├── logo-light.svg
│   ├── logo-dark.svg
│   ├── banner.svg
│   └── banner-dark.svg
├── zudoku.config.tsx        # Central configuration
├── package.json
├── tsconfig.json
└── .eslintrc.json
```

### Configuration Architecture

All site behavior is controlled by `zudoku.config.tsx`:

1. **Theme Definition** - Color palettes for light/dark modes, fonts, and custom CSS overrides
2. **Navigation Structure** - Hierarchical sidebar menu with categories and links
3. **API Mappings** - Maps OpenAPI files to URL routes (e.g., `/api/ecommerce` → `apis/ecommerce.yaml`)
4. **Metadata** - Site title, description
5. **Redirects** - URL redirects (e.g., `/` → `/introduction`)
6. **Syntax Highlighting** - Language support (defaultLanguages + "http")

**Gotcha:** The custom CSS in `theme.customCss` contains hardcoded hex values that should match the color palette defined in `theme.light` and `theme.dark`. If you change colors in the palette, update the custom CSS gradients accordingly.

### Content Flow

1. **MDX Files** → Rendered as documentation pages
2. **OpenAPI Files** → Rendered as interactive API reference pages
3. **Navigation Config** → Generates sidebar structure
4. **Build Process** → Static HTML/CSS/JS bundles in `dist/`

## Content Patterns

### MDX File Format

All MDX files use frontmatter for metadata:

```markdown
---
title: Page Title (as shown in navigation and browser tab)
---

# Content Heading

Content here...
```

**Naming convention:** Use kebab-case for filenames (`getting-started.mdx`, `api-keys.mdx`).

### Built-in Components

#### Callout Component

Used extensively for important information, warnings, and tips:

```mdx
<Callout type="info">
  **Info:** Informational content
</Callout>

<Callout type="caution">
  **Caution:** Warning about potential issues
</Callout>

<Callout type="warning">
  **Warning:** Important warning
</Callout>

<Callout type="danger">
  **Danger:** Critical security or data loss warning
</Callout>

<Callout type="tip">
  **Tip:** Helpful suggestion or best practice
</Callout>
```

**Gotcha:** Always include a bold label (e.g., `**Info:**`, `**Caution:**`) as the first content inside the Callout for consistency.

#### Tables

Standard markdown table syntax is used throughout:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value A  | Value B  | Value C  |
| Value D  | Value E  | Value F  |
```

#### Code Blocks

Standard markdown code fences with language specifiers:

```markdown
```typescript
// TypeScript code
interface User {
  id: string;
  name: string;
}
```

```bash
# Shell commands
curl -X GET https://api.example.com/v1/products
```

```json
// JSON examples
{
  "id": "prod_123",
  "name": "Product Name"
}
```

**Important:** The "http" language is explicitly added to syntax highlighting for HTTP examples.

#### MDX Directives

The `:::` syntax creates styled callout blocks (alternative to `<Callout>` component):

```mdx
:::tip

This is a tip block using MDX directive syntax.

:::
```

### Content Organization Patterns

**Domain-based structure:** Content is organized by service domain (auth, ecommerce, analytics, etc.).

**Logical flow:** Pages typically follow this structure:
1. Introduction/overview
2. Core concepts
3. Quick start/getting started
4. Detailed usage with examples
5. Best practices/gotchas
6. Advanced topics

**Cross-references:** Use relative links between pages:

```mdx
See [Authentication Guide](/auth/getting-started) for details.
```

## Navigation Configuration

Navigation is defined in `zudoku.config.tsx` under the `navigation` array:

```typescript
navigation: [
  {
    type: "category",
    label: "Category Name",
    icon: "sparkles", // Lucide icon name
    items: [
      "/page-path",              // Simple page link
      {
        type: "category",
        label: "Subcategory",
        items: ["/nested/page"]  // Nested structure
      },
      {
        type: "link",           // External link or custom path
        label: "API Reference",
        to: "/api/ecommerce"
      }
    ]
  }
]
```

**Critical gotcha:** Navigation paths MUST match actual file paths:
- `/auth/getting-started` → `pages/auth/getting-started.mdx`
- `/api/ecommerce` → mapped in `apis` config to `apis/ecommerce.yaml`

If a path doesn't exist, the dev server will show a 404 without explicit error messages.

### Supported Icons

Zoku du uses Lucide icons. Common icons used in this project:
- `sparkles` - Getting Started
- `book` - Documentation/Concepts
- `shopping-cart` - E-Commerce
- `bar-chart` - Analytics
- `code` - SDKs & Tools
- `plug` - Integrations
- `arrow-right` - Migration
- `shield` - Best Practices/Security

## API Documentation (OpenAPI)

### OpenAPI File Structure

Each API service has its own OpenAPI 3.0 spec file:

```yaml
openapi: 3.0.0
info:
  title: Service Name
  description: API description
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
paths:
  /endpoint:
    get:
      summary: Endpoint description
      operationId: operationName
      responses:
        '200':
          description: Success
components:
  schemas:
    SchemaName:
      type: object
      properties: ...
```

### API Mapping

OpenAPI files are mapped to routes in `zudoku.config.tsx`:

```typescript
apis: [
  {
    type: "file",
    input: "./apis/ecommerce.yaml",
    path: "/api/ecommerce"  # URL route
  }
]
```

**Gotcha:** The `openapi.yaml` file in `apis/` is a Swagger Petstore example (not real documentation). It can be removed or replaced with actual API specs.

## Theme and Styling

### Color System

The theme uses CSS custom properties defined in both the palette and custom CSS:

```typescript
// Palette (auto-generated CSS variables)
theme: {
  light: {
    primary: "#7c3aed",           // Main brand color
    background: "#fafbfc",
    foreground: "#18181b",
    // ... other colors
  },
  dark: { /* darker variants */ }
}
```

**Custom CSS overrides** in `theme.customCss`:
- Header styling with backdrop blur
- H1 gradients (light: purple, dark: lighter purple)
- Card hover effects with transform and shadow
- API endpoint method badges (GET: green, POST: blue, etc.)
- Sidebar item transitions and active states

**Important:** When updating colors, you must update BOTH the palette AND the custom CSS gradients/badges. The custom CSS uses hardcoded hex values that don't automatically sync with palette changes.

### Typography

Fonts configured in `theme.fonts`:
- Sans-serif: Inter (primary font)
- Mono: Fira Code (for code blocks)

**Font loading:** Fonts are expected to be loaded from CDN or system fonts. The custom CSS sets `--font-sans` as a fallback to system fonts.

## Common Tasks

### Adding a New Documentation Page

1. Create `.mdx` file in appropriate `pages/` subdirectory
2. Add frontmatter with `title`
3. Add path to navigation in `zudoku.config.tsx`
4. Test by running `npm run dev`

Example:
```bash
# Create file
touch pages/auth/api-keys.mdx

# Add content
---
title: API Keys
---

# Managing API Keys
...
```

### Adding API Documentation

1. Create or update `.yaml` file in `apis/` directory
2. Add mapping to `apis` array in `zudoku.config.tsx`
3. Add navigation link to API reference

### Updating Navigation

1. Edit `navigation` array in `zudoku.config.tsx`
2. Ensure all paths match actual files or API routes
3. Test navigation in dev server

### Changing Theme Colors

1. Update colors in `theme.light` and `theme.dark` palettes
2. Find and replace hardcoded hex values in `theme.customCss`
3. Restart dev server to see changes

## Testing and Quality

### Running the Linter

```bash
npm run lint
```

The linter checks for TypeScript/ESLint issues in config files.

### Testing Content

1. Start dev server: `npm run dev`
2. Navigate to pages in browser
3. Check for broken links and navigation
4. Verify API docs render correctly from OpenAPI specs
5. Test dark/light mode toggle
6. Test mobile responsiveness

### Common Issues

**Navigation shows 404:**
- Check path in navigation config matches file path exactly
- Verify file exists in correct location
- Ensure file has `.mdx` extension

**API docs not rendering:**
- Verify OpenAPI file is valid YAML
- Check `apis` mapping in config has correct `input` and `path`
- Ensure OpenAPI version is `3.0.0` or `3.0.2`

**Custom CSS not applying:**
- Check for syntax errors in custom CSS string
- Verify CSS selectors target correct elements (use browser DevTools)
- Restart dev server after config changes

**Build fails:**
- Check TypeScript errors in config file
- Verify all imports in config are valid
- Ensure all referenced files exist

## Gotchas and Non-Obvious Patterns

1. **Navigation Path Mismatch:** Navigation paths in config are not validated at build time. A typo or wrong path will show a 404 without error messages. Always test navigation in dev server after changes.

2. **OpenAPI Example File:** The `apis/openapi.yaml` is a Swagger Petstore example, not actual documentation. Don't reference it as if it were real API docs.

3. **Custom CSS Hardcoding:** The custom CSS in the config contains hardcoded hex values for gradients and badges that don't automatically update when you change the color palette. You must manually update both.

4. **Frontmatter Required:** MDX files without frontmatter `title` will not render properly or won't appear in navigation.

5. **Case Sensitivity:** File paths in navigation are case-sensitive on most systems. Ensure exact case matching between config paths and actual files.

6. **Hot Reload Config:** Changes to `zudoku.config.tsx` require a dev server restart to take effect, even though the dev server has hot reload for content changes.

7. **API Route Prefixing:** API routes defined in `apis` config are prefixed with `/api` by default when referenced in navigation (e.g., if `path: "/ecommerce"`, the URL is `/api/ecommerce`).

8. **No Custom Components:** Don't create custom React components in the `pages/` directory. Zoku du has built-in components that should be used instead (Callout, Tabs, etc.).

9. **Static Asset Paths:** When referencing images or assets from MDX, use absolute paths from the `public/` directory (e.g., `/logo-light.svg`, not `../public/logo-light.svg`).

10. **ESLint Configuration:** The ESLint config only covers TypeScript files. MDX files are not linted by default.

## Development Workflow

1. **Make changes:** Edit MDX files, OpenAPI specs, or config
2. **Test locally:** Run `npm run dev` and verify changes
3. **Check navigation:** Ensure all links work and no 404s
4. **Lint:** Run `npm run lint` to check for code issues
5. **Build test:** Run `npm run build` to verify production build succeeds

## Deployment Considerations

- The build output in `dist/` is a complete static site
- No server-side rendering or API routes are required
- Can be deployed to any static host (Vercel, Netlify, GitHub Pages, S3, etc.)
- No environment variables needed for the site itself (API endpoints are documented in OpenAPI specs, not used by the site)
- The `.gitignore` excludes `dist/`, `node_modules/`, and `.env*` files

## Resource References

- **Zoku du Documentation:** https://zudoku.dev/docs
- **OpenAPI 3.0 Specification:** https://swagger.io/specification/
- **MDX Documentation:** https://mdxjs.com/
- **Lucide Icons:** https://lucide.dev/ (for icon names in navigation)
