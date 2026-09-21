# PowerShell Fundamentos

Manual y guía de PowerShell.

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run docs:dev
```

El sitio estará disponible en `http://localhost:5173/powershell-docs/en/`

## Build de producción

```bash
npm run docs:build
```

## Preview del build

```bash
npm run docs:preview
```

## Deploy a GitHub Pages

El sitio está configurado para desplegarse en `https://CEED-2026.github.io/powershell-docs/`.

```bash
npm run deploy
```

Este comando:

1. Ejecuta `docs:build` para generar el sitio estático en `.vitepress/dist`
2. Usa `gh-pages` para publicar el contenido en la rama `gh-pages` del repositorio

### Configuración requerida

- `base: '/powershell-docs/'` en `.vitepress/config.mjs`
- Repositorio en GitHub: `https://github.com/CEED-2026/powershell-docs`
- GitHub Pages habilitado en el repositorio, sirviendo desde la rama `gh-pages`
