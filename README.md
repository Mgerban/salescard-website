# SalesCard Website

This is the full static SalesCard homepage package designed for Render.

## Pages

- `/` — homepage
- `/privacy.html` — Privacy Policy
- `/data-protection.html` — Data Protection / user rights
- `/delete-account.html` — Account deletion instructions
- `/terms.html` — Terms of Use

## App Store / Play Store URLs

Use these after deployment:

- Marketing URL: `https://sales-card.com`
- Privacy Policy URL: `https://sales-card.com/privacy.html`
- Data Protection URL: `https://sales-card.com/data-protection.html`
- Delete Account URL: `https://sales-card.com/delete-account.html`
- Terms URL: `https://sales-card.com/terms.html`

## Render settings

Create a new Render **Static Site**:

- Build Command: leave empty or use `echo "Static site"`
- Publish Directory: `.`
- Root Directory: leave empty if these files are in the repo root

## Legal placeholder to update before app submission

Replace this in `privacy.html` and `data-protection.html`:

`[Insert legal name and business address before launch]`

## Local preview

From this folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## GitHub + Render deployment

```bash
cd salescard_final_homepage

git init
git add .
git commit -m "Create SalesCard public website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/salescard-website.git
git push -u origin main
```

Then connect the GitHub repo in Render as a Static Site.
