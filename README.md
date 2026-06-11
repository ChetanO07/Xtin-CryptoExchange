# Xtin Trade — Local repo prepared for deployment

This repository is a Vite + React site. Below are quick steps to push to GitHub and deploy on Render (or Vercel).

1) Create a GitHub repo and push

```bash
git init
git add .
git commit -m "Prepare repo for deployment"
# create a repo on GitHub and then:
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

2) Deploy on Render

- In Render dashboard, choose "New + -> Web Service" → connect your GitHub account → select the repo.
- Render will detect `render.yaml` if present. If not, set:
  - Build Command: `npm install && npm run build`
  - Publish Directory: `dist`

3) Alternatively deploy on Vercel

- Install Vercel CLI or connect GitHub: `vercel` or use the dashboard. Vercel auto-detects and runs `npm run build`.

If you want, I can push this repository to a Git remote for you — provide a repo URL or grant me push access.
