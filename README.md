# Just Digital Solutions (Vite + React)

Repo: https://github.com/justdigitalmedia/my-react-app

## Scripts
- `npm run dev` – local dev
- `npm run build` – production build (outputs to `/build`)
- `npm run preview` – preview build locally

## Deploy (GitHub Actions)
Add repo secrets:
- VPS_HOST, VPS_USER, VPS_SSH_PRIVATE_KEY

Trigger by pushing to `main`, using Actions → Run workflow, or commenting `/deploy` on a PR/issue.
