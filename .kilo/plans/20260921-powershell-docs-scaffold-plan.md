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
- Rename `"name"` from `"bash-docs"` to `"powershell-docs"`
- Keep scripts: `docs:dev`, `docs:build`, `docs:preview`, `deploy` (yarn build + gh-pages)
- Keep `"vitepress": "^1.6.4"` and `"vue": "^3.5.42"` dependencies
- Keep `"gh-pages": "^6.3.0"` devDependency

### 0.2 Install dependencies
- Run `npm install` (or `yarn install`) in workspace root to install vitepress, vue, gh-pages

### 0.3 Create `.vitepress/config.mjs`
- Bilingual config with `locales.en` and `locales.es`
- `en`: label "English", lang "en", title "PowerShell Fundamentals", description
- `es`: label "Español", lang "es", title "PS Fundamentos", description
- Each locale gets `themeConfig` with:
  - `logo: '/Powershell.svg'` (placeholder until logo created)
  - `nav`: Contents (links to content pages per language), Solved exercises, Additional resources (Microsoft docs), Back to PS Home
  - `sidebar`: structured by route prefix (`/en/` and `/es/`)
- Top-level `themeConfig.logo: '/Powershell.svg'`
- `base: '/powershell-docs/'` (or actual repo name — TBD, must match GitHub repo name)
- **OPEN**: Confirm exact `base` path matches the GitHub repo name

### 0.4 Create `.vitepress/theme/`
- `index.js`: extends DefaultTheme, uses CustomLayout, imports custom.css
- `CustomLayout.vue`: extends DefaultTheme.Layout, adds custom nav bar title with logo images (adapted from bash-docs for PowerShell branding — dark/light logo variants)
- `custom.css`: CSS for hero image dark/light variants and nav bar customizations

### 0.5 Create `public/` directory
- Placeholder `Powershell.svg` in `public/` — **BLOCKER**: source TBD
- Optionally create `icon_dark.svg` and `icon_light.svg` if custom nav layout is used

### 0.6 Create home page `index.md`
- Bilingual frontmatter (use VitePress locale-aware frontmatter or separate per language handled by redirect)
- Hero content: "PowerShell" title, "Fundamentos teóricos" / "Theoretical fundamentals", "Administración de sistemas con PowerShell" / "System administration with PowerShell"
- Two images: `![PowerShell Basics](/Powershell.svg){.hero-dark}` and `![PowerShell Basics](/Powershell.svg){.hero-light}`

## Phase 1: Navigation & Sidebar

### 1.1 Configure nav links (per locale)
- **EN nav**: Contents → `/en/content/000-intro`, `/en/content/010-syntax`; Solved exercises → `/en/solved-exercises/`; Additional resources → Microsoft docs link; Back to PS Home → link to powershell-main-bdd74d.gitlab.io
- **ES nav**: Contenidos → `/es/content/000-intro`, `/es/content/010-syntax`; Ejercicios resueltos → `/es/solved-exercises/`; Recursos adicionales → Microsoft docs; Volver a PS Home

### 1.2 Configure sidebar (per locale)
- Both `/en/` and `/es/` sidebars matching nav structure
- Groups: Contents, Solved exercises, Additional resources, Back to PS Home

### 1.3 Test dev server
- Run `npm run docs:dev` and verify site loads at localhost:5173
- Verify bilingual navigation renders correctly

## Phase 2: Content Pages

### 2.1 Create directory structure
- `es/content/` — Spanish content markdown files
- `en/content/` — English content markdown files
- `es/solved-exercises/` — Spanish exercises
- `en/solved-exercises/` — English exercises

### 2.2 Create intro pages
- `es/content/000-intro.md` — "Introducción a PowerShell" (from target site content)
- `en/content/000-intro.md` — "Introduction to PowerShell" (translation)

### 2.3 Create syntax pages
- `es/content/010-syntax.md` — "Estructuras del Lenguaje en PowerShell" (from target site content)
- `en/content/010-syntax.md` — "PowerShell Language Structures" (translation)

### 2.4 Content notes
- Use VitePress Markdown with fenced code blocks (` ```powershell ` for PowerShell code)
- Include anchor links (`[#section](#section-id)`) for "En esta página" / "On this page" sidebar
- Content will be added/expanded in future iterations (gradual)

## Phase 3: Solved Exercises

### 3.1 Create exercise pages
- `es/solved-exercises/index.md` — Spanish exercises from target site
- `en/solved-exercises/index.md` — English exercises from target site

### 3.2 Cross-page navigation
- Ensure "Next/Previous" pager links work between content pages and exercises

## Phase 4: Deployment

### 4.1 Configure GitHub Pages deployment
- Verify `base` in `.vitepress/config.mjs` matches GitHub repo name
- `deploy` script: `yarn docs:build && gh-pages -d .vitepress/dist`
- Enable GitHub Pages on the repository (branch: gh-pages or GitHub Actions)

### 4.2 Verify deployment
- Run `npm run deploy`
- Confirm site is live at `https://<username>.github.io/powershell-docs/`

## Open Questions / Blockers

1. **Logo asset**: `Powershell.svg` is required in `public/`. Source/creator TBD — user needs to provide or this must be designed.
2. **Base path**: `base` in config must match the exact GitHub repository name. Confirm repo name (likely `powershell-docs`).
3. **GitHub username/org**: Needed to determine the Pages URL and deploy target.
4. **Content translation**: EN versions of content pages need to be written or translated from ES versions.

## Validation

- `npm run docs:dev` starts dev server without errors
- Bilingual nav and sidebar render correctly for both `/en/` and `/es/` paths
- All internal links resolve correctly
- `npm run docs:build` completes without errors
- `npm run deploy` successfully publishes to GitHub Pages
