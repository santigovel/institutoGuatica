---
name: always-pr
description: Use when finishing any code change or task in this repository. After completing the work, create a pull request instead of leaving changes uncommitted. Triggers on task completion, "hacer PR", "abrir PR", "pull request", "subir cambios", "terminar".
---

# Always Open a Pull Request

Al terminar cualquier cambio en este repositorio, no dejes el trabajo sin PR. Sigue este flujo al finalizar una tarea:

1. **Verifica** tu trabajo con `npm run lint && npm run build`.
2. **Crea una rama** descriptiva si no estás ya en una rama de feature: `git checkout -b <tipo>/<descripcion-corta>`.
3. **Revisa** `git status` y `git diff` para asegurarte de que solo se incluyen archivos intencionados.
4. **Haz commit** con un mensaje conciso siguiendo el estilo de los commits recientes (`git log --oneline -10`).
5. **Sube** la rama con `git push -u origin <rama>`.
6. **Crea el PR** con `gh pr create`, incluyendo:
   - Título y descripción en español (el contenido del sitio es en español).
   - Resumen de cambios y notas de verificación (`npm run lint && npm run build`).
7. Devuelve la URL del PR en tu respuesta final.

Reglas:

- Nunca hagas commit de secretos o credenciales.
- El PR se hace contra `main` (la rama de despliegue, ver `deploy.yml`).
- Si el trabajo aún no está completo, no abras el PR; indica el estado pendiente.
