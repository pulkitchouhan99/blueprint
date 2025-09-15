# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack on http://localhost:3000
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 15.5.2 application using the App Router architecture with the following key characteristics:

### Tech Stack
- **React 19.1.0** - Latest React with Server Components
- **Next.js 15.5.2** - With App Router and Turbopack enabled
- **TypeScript** - Strict mode enabled with ES2017 target
- **Tailwind CSS v4** - Using the new @import directive with extensive custom theme
- **ESLint 9.x** - Flat config with Next.js core-web-vitals

### Project Structure
```
src/
└── app/              # App Router directory
    ├── layout.tsx    # Root layout with Geist fonts
    ├── page.tsx      # Home page component
    ├── globals.css   # Global styles and Tailwind imports
    ├── constants/    # Constants including font weights
    └── fonts/        # Custom InterTight font files (.ttf)
public/               # Static assets (SVGs, images)
```

### Key Configuration
- **TypeScript**: Path alias `@/*` maps to `./src/*`, module resolution: bundler
- **Turbopack**: Enabled for both development and production builds
- **Tailwind**: Extensive custom theme with:
  - Custom color palette (red, green, yellow, blue, grey, beige variants)
  - Rich typography scale with line heights and letter spacing
  - Responsive breakpoints (mobile: 375px, tablet: 768px, desktop: 1024px, superlarge: 1440px)
  - Custom animations (menu, search, fade effects)
  - Grid templates and scrollbar utilities

### Custom Assets
- **Fonts**: InterTight font family (Regular, Medium, SemiBold, Bold, ExtraBold)
- **Font Constants**: Available in `@/app/constants/fonts.ts`
- **Icons**: SVG assets in public directory (file, globe, next, vercel, window)

### Development Notes
- Fresh create-next-app project with custom Tailwind configuration
- No testing framework configured yet
- No API routes or server actions implemented
- All components use App Router conventions (no getServerSideProps/getStaticProps)
- Use `@/` imports for cleaner import paths from src directory
- Custom fonts included but not yet integrated into Tailwind theme config