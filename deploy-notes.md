# Copy/paste Render setup commands

## 1. Unzip the site

```bash
cd ~/Downloads
unzip salescard_final_homepage.zip -d salescard_final_homepage
cd salescard_final_homepage
```

## 2. Preview locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

Stop the server with `CTRL+C`.

## 3. Push to GitHub

Replace `YOUR_GITHUB_USERNAME` with your GitHub username and make sure you already created an empty GitHub repo called `salescard-website`.

```bash
git init
git add .
git commit -m "Create SalesCard public website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/salescard-website.git
git push -u origin main
```

## 4. Render settings

- New → Static Site
- Connect repo: `salescard-website`
- Branch: `main`
- Build Command: `echo "Static site"`
- Publish Directory: `.`
- Add custom domains:
  - `sales-card.com`
  - `www.sales-card.com`

## 5. DNS

Use the exact DNS records Render gives you. Do not guess the A/CNAME values.
