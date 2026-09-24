# Plan: VitePress Site for PowerShell Docs

## Context

Create a VitePress documentation site mimicking https://powershell-basics-5232a1.gitlab.io/ (PS Fundamentos), using https://github.com/CEED-2026/bash-docs as the structural reference. The target site is a Spanish-language PowerShell fundamentals guide with content pages and solved exercises. The build should be bilingual (ES/EN) and deploy to GitHub Pages. Content will be added gradually: scaffold first, then content pages in subsequent iterations.

## Current State

- Workspace: `/home/alvaro/Software/powershell-docs`
- Existing files: `package.json` (currently named "bash-docs"), `.gitignore`, `.kilo/`
- No `.vitepress/` directory, no `node_modules/`, no content yet
- Reference structure from bash-docs: `.vitepress/config.mjs`, `.vitepress/theme/`, `index.md`, `es/`, `en/`, `public/`

## Decisions

- **Deployment**: GitHub Pages (user chose this over GitLab Pages)
- **Languages**: Bilingual ES/EN (user chose this over Spanish-only)
- **Content approach**: Gradual (scaffold first, add pages in later iterations)
- **Theme**: Extend VitePress DefaultTheme with custom layout (following bash-docs pattern)
- **Logo**: `Powershell.svg` needed in `public/` — source TBD (must exist before build)

## Phase 0: Project Scaffold

### 0.1 Update package.json
- ✅ Renamed `"name"` from `"bash-docs"` to `"powershell-docs"`
- Keep scripts: `docs:dev`, `docs:build`, `docs:preview`, `deploy` (yarn build + gh-pages)
- Keep `"vitepress": "^1.6.4"` and `"vue": "^3.5.42"` dependencies
- Keep `"gh-pages": "^6.3.0"` devDependency

### 0.2 Install dependencies
- ✅ Dependencies installed

### 0.3 Create `.vitepress/config.mjs`
- ✅ Bilingual config with `locales.en` and `locales.es`
- `base: '/powershell-docs/'`

### 0.4 Create `.vitepress/theme/`
- ✅ `index.js`: extends DefaultTheme, uses CustomLayout, imports custom.css
- ✅ `CustomLayout.vue`: extends DefaultTheme.Layout, adds custom nav bar title with logo images
- ✅ `custom.css`: CSS for hero image variants (both visible simultaneously) and nav bar customizations

### 0.5 Create `public/` directory
- ✅ `Powershell.svg`, `icon_dark.svg`, `icon_light.svg` in `public/`

### 0.6 Create home page `index.md`
- ✅ Spanish content with hero: "PowerShell", "Fundamentos teóricos", "Administración de sistemas con PowerShell"
- ✅ Two images displayed simultaneously (matching original site)
- ✅ `en/index.md` and `es/index.md` created with same hero structure per language

## Phase 1: Navigation & Sidebar

### 1.1 Configure nav links (per locale)
- ✅ EN and ES nav configured in `.vitepress/config.mjs`

### 1.2 Configure sidebar (per locale)
- ✅ Both `/en/` and `/es/` sidebars configured in `.vitepress/config.mjs`

### 1.3 Test dev server
- ✅ Production build passes without errors

## Phase 2: Content Pages

### 2.1 Create directory structure
- ✅ `es/content/`, `en/content/`, `es/solved-exercises/`, `en/solved-exercises/`

### 2.2 Create intro pages
- ✅ `es/content/000-intro.md` — "Introducción a PowerShell"
- ✅ `en/content/000-intro.md` — "Introduction to PowerShell"

### 2.3 Create syntax pages
- ✅ `es/content/010-syntax.md` — "Estructuras del Lenguaje en PowerShell"
- ✅ `en/content/010-syntax.md` — "PowerShell Language Structures"

### 2.4 Content notes
- ✅ VitePress Markdown with fenced code blocks
- ✅ Anchor links included from original content

## Phase 3: Solved Exercises

### 3.1 Create exercise pages
- ✅ `es/solved-exercises/index.md` — 7 exercises with solutions
- ✅ `en/solved-exercises/index.md` — English translations

### 3.2 Cross-page navigation
- ✅ Built-in VitePress pager links will work between pages

## Phase 4: Deployment

### 4.1 Configure GitHub Pages deployment
- ✅ `base: '/powershell-docs/'` in `.vitepress/config.mjs`
- ✅ `deploy` script in `package.json`

### 4.2 Verify deployment
- ⬜ Pending (requires GitHub repo setup)

## Open Questions / Blockers

1. **Logo asset**: ✅ `Powershell.svg` exists in `public/`
2. **Base path**: ✅ Confirmed `base: '/powershell-docs/'`
3. **GitHub username/org**: ⬜ Needed for deployment
4. **Content translation**: ✅ EN versions created from ES originals

## Validation

- ✅ `npm run docs:dev` starts dev server without errors (build verified)
- Bilingual nav and sidebar render correctly for both `/en/` and `/es/` paths
- All internal links resolve correctly
- ✅ `npm run docs:build` completes without errors
- ⬜ `npm run deploy` successfully publishes to GitHub Pages
