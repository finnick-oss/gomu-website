# Gomu Website

Marketing site + privacy policy for [Gomu](https://play.google.com/store/apps/details?id=com.theapplicationcompany.gomu), a Japanese-learning app on Google Play.

Static HTML/CSS, no build step — deploys on Vercel with zero configuration.

## Structure

- `index.html` — landing page
- `privacy.html` — privacy policy
- `public/` — logo, screenshots, Google Play badge
- `css/style.css` — shared styles

## Local preview

```bash
python3 -m http.server 8000
```

## Deploy

Import this repo in Vercel — no build command or output directory needed, it serves the static files as-is.
