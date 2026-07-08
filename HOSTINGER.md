# Deploying to Hostinger (static hosting)

This project is built with TanStack Start, but it's configured to **prerender to plain static HTML** when you build outside Lovable. That means you can host it on any static server, including Hostinger shared hosting.

## Build on your laptop (WSL / macOS / Linux)

You need Node.js 20+ installed.

```bash
git pull
npm install
npm run build
```

When the build finishes you'll see a **`dist/`** folder in the project root containing:

- `index.html`
- `assets/` (JS, CSS, images)
- your PDFs and other static files

If `dist/index.html` is not there, the build didn't finish — scroll up in the terminal and look for red error lines.

## Upload to Hostinger

1. Open Hostinger's **File Manager** and go into `public_html/`.
2. Delete anything already inside `public_html/` (or back it up first).
3. Upload **the contents of `dist/`** (not the `dist` folder itself) into `public_html/`.
   - Tip: on your laptop, zip the contents of `dist/`, upload the zip, then unzip it in Hostinger.
4. Visit your domain — the site should load immediately.

## Notes

- No server, no database, no environment variables needed. It's fully static.
- The Spanish/English toggle still works — it runs in the browser after the page loads.
- The PDFs (portfolio, brand manual, etc.) are included in the build output and are downloadable directly.
- To update the site later: change the code (in Lovable or locally), commit, `git pull` on your laptop, re-run `npm run build`, re-upload `dist/`.
