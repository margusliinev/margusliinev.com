# Copilot Instructions for margusliinev.com

This is a modern personal website built with Next.js 15, TypeScript, and Tailwind CSS v4. The architecture emphasizes type safety, clean data management, and responsive design patterns.

## Architecture Overview

### Tech Stack & Key Dependencies

- **Next.js 15** with App Router, typed routes, and Turbopack enabled for dev/build
- **React 19** with server components and client components pattern
- **TypeScript** with strict type checking (`tsc --noEmit` in check script)
- **Tailwind CSS v4** using CSS variables and custom theme configuration
- **Standalone output mode** configured for containerized deployment

### Project Structure Conventions

```
src/
├── app/           # Next.js 15 App Router pages
├── components/    # Reusable UI components with subfolders
├── data/          # Centralized data models with TypeScript interfaces
├── helpers/       # Utility functions (SEO, date formatting, etc.)
├── lib/           # Shared library code
└── types/         # Global TypeScript type definitions
```

## Development Workflow

### Essential Commands

- `npm run dev` - Development server with Turbopack
- `npm run build` - Production build with Turbopack
- `npm run check` - Full validation (Prettier, ESLint, TypeScript)
- `npm run format` - Auto-format with Prettier + Tailwind plugin
- `npm run lint` - Lint with ESLint

### Code Quality Tools

- ESLint with Next.js config and custom rules
- Prettier with `prettier-plugin-tailwindcss` for class ordering
- TypeScript strict mode with `noEmit` checking

## Styling Conventions

### Tailwind CSS v4 Custom Theme

Uses CSS variables for the design system in `globals.css`:

```css
@theme {
    --color-foreground: #ffffff;
    --color-background: #18181b;
    --color-primary: #0284c7;
    --breakpoint-xs: 30rem;
}
```

### Responsive Design Patterns

- Mobile-first approach with custom `xs` breakpoint (30rem)
- Desktop navigation hidden on mobile: `xs:flex hidden`
- Mobile menu overlay with backdrop blur and scroll lock

### Visual Effects

- `.noise` utility class creates SVG texture overlay
- Gradient borders for active navigation states
- Backdrop blur effects with Tailwind's `backdrop-blur-sm`

## SEO & Metadata

### Centralized SEO Configuration

Use `src/helpers/seo.ts` for consistent metadata:

```typescript
export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
    // Returns structured metadata with OpenGraph and Twitter cards
}
```

### Image Optimization

Next.js config includes:

- AVIF and WebP format support
- 60-second minimum cache TTL
- SVG support with security restrictions

## File Conventions

### Naming Patterns

- React components: PascalCase (e.g., `MobileMenuButton.tsx`)
- Data files: camelCase with descriptive names (e.g., `workExperience`)
- Type interfaces: PascalCase matching the data they describe

### Import/Export Strategy

- Barrel exports from `src/data/index.ts` and `src/components/ui/index.ts`
- Named exports preferred over default exports for data
- Default exports for page and layout components

## Key Implementation Details

### Navigation System

- Centralized navigation data in `src/data/navigation.ts`
- Active state detection using `usePathname()`
- Shared navigation between desktop and mobile with different styling

### Date Handling

Work experience uses `YYYY-MM` format strings with `null` for current positions.

### Type Safety

- Strict TypeScript configuration
- Interface-driven data structures
- Proper generic typing for polymorphic components

When adding new features, maintain these patterns and always run `npm run check` before committing changes.
