# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.3 project using the Pages Router architecture, bootstrapped with `create-next-app`. The project uses React 19.1.0 with TypeScript and includes Turbopack for enhanced build performance.

## Development Commands

### Development Server
```bash
pnpm dev
```
Starts the development server with Turbopack at http://localhost:3000. The main page is at `pages/index.tsx` and auto-updates on file changes.

### Build & Production
```bash
pnpm build    # Build with Turbopack
pnpm start    # Start production server
```

### Code Quality
```bash
pnpm lint     # Run ESLint (uses eslint-config-next)
```

## Architecture & Structure

### Pages Router Structure
- `pages/index.tsx` - Home page entry point
- `pages/_app.tsx` - Application root component that wraps all pages
- `pages/_document.tsx` - Document wrapper for HTML structure
- `pages/api/` - API routes (e.g., `pages/api/hello.ts` accessible at `/api/hello`)

### Key Configuration
- **TypeScript**: Configured with path aliases (`@/*` maps to `./*`)
- **Next.js**: Uses React Strict Mode and Turbopack for builds
- **Styling**: CSS Modules (`@/styles/Home.module.css`) with Geist font family
- **Import Alias**: `@/` prefix for root-level imports (styles, components, etc.)

### Font Configuration
The project uses Next.js's `next/font` with Geist and Geist Mono fonts automatically optimized and loaded via Google Fonts.

## Development Notes

- The project follows Next.js Pages Router conventions (not App Router)
- API routes in `pages/api/` are automatically mapped to `/api/*` endpoints
- TypeScript is configured with strict mode enabled
- CSS Modules are used for component styling