---
name: always-deploy
description: Use when finishing any deployable change in this repository or when the user asks to deploy, publicar, desplegar, subir a producción, "gh-pages" or "GitHub Pages". After work is complete, publish the site to GitHub Pages.
---

# Always Deploy to GitHub Pages

Al terminar cualquier cambio publicable en este repositorio, publica el sitio en GitHub Pages. Flujo al finalizar una tarea:

1. **Verifica** con `npm run lint && npm run build`.
2. **Despliega** con `npm run deploy` (compila con `tsc -b && vite build` y publica `dist/` en la rama `gh-pages` de `origin` vía `gh-pages`).
3. Confirma que el deploy terminó sin errores y reporta la URL de producción: `https://santigovel.github.io/institutoGuatica/`.

Reglas:

- No despliegues si el build o el lint fallan; indica el error y detente.
- El CI (`deploy.yml`) también publica automáticamente en cada push a `main`; el deploy manual es para cambios que aún no se han hecho push o para forzar una publicación inmediata.
- No uses `npm run deploy` si ya existe un PR pendiente de merge; avisa al usuario que el deploy se hará al mergear en `main`.
- Recuerda que la URL de producción usa el subpath `/institutoGuatica/` (ver `base` en `vite.config.ts`).
