# Gomu Website

Marketing site + privacy policy for [Gomu](https://apps.apple.com/app/id6811935681), a Japanese-learning app on the App Store.

Static HTML/CSS, no build step — deploys on Vercel with zero configuration.

## Structure

- `index.html` — landing page
- `privacy.html` — privacy policy
- `public/` — logo, screenshots, App Store badge
- `css/style.css` — shared styles

## Local preview

```bash
python3 -m http.server 8000
```

## Deploy

Import this repo in Vercel — no build command or output directory needed, it serves the static files as-is.
