# Deploying Your Site to GitHub Pages

A step-by-step guide. You only need to do the **initial setup once** — after that, updating your site is just 3 commands.

---

## Initial Setup (One Time)

### 1. Install Git

**Mac** (you likely already have it):
```bash
git --version
```
If not installed, it'll prompt you to install Xcode Command Line Tools. Say yes.

**Windows:**
Download from https://git-scm.com/download/win and install with default settings.

### 2. Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: **`linusseah.github.io`** (this exact name makes it your GitHub Pages site)
3. Keep it **Public**
4. Do NOT check "Add a README" — leave it empty
5. Click **Create repository**

### 3. Connect Your Local Site to GitHub

Open your terminal (Mac: Terminal app, Windows: Git Bash) and run:

```bash
# Navigate to the site folder
cd /path/to/your/site

# Initialize git
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial site launch"

# Connect to GitHub (replace with your actual repo URL)
git remote add origin https://github.com/sumoseah/linusseah.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

GitHub will ask for your credentials. Use a **Personal Access Token** instead of your password:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "site-deploy"
4. Check the **repo** scope
5. Generate and copy the token
6. Use it as your password when Git asks

### 4. Enable GitHub Pages

1. Go to your repo on GitHub: `https://github.com/sumoseah/linusseah.github.io`
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source," select **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Click **Save**

Your site will be live at **https://linusseah.github.io** within a minute or two.

---

## Updating Your Site (Every Time)

After making changes (editing a post, adding a new page, etc.):

```bash
cd /path/to/your/site

git add .
git commit -m "Add new blog post about X"
git push
```

That's it. Three commands. GitHub Pages will redeploy automatically within ~60 seconds.

---

## Common Workflows

### Adding a New Blog Post

1. Create a new folder: `blog/my-new-post/`
2. Add an `index.html` inside it (copy an existing post as a template)
3. Add a card entry in `blog/index.html`
4. Optionally add it to the "Recent Writing" section in `index.html`
5. Run the 3 commands above to deploy

### Working with Claude

When you want Claude to write a new page or edit an existing one:
1. Share the relevant HTML file(s) with Claude
2. Claude writes/edits the HTML
3. Save the output to your site folder
4. Run the 3 deploy commands

---

## Folder Structure Reference

```
linusseah.github.io/
├── index.html              ← Home page
├── about.html              ← About / resume
├── projects.html           ← Portfolio
├── css/
│   └── style.css           ← Shared styles (edit once, applies everywhere)
├── blog/
│   ├── index.html          ← Blog listing
│   ├── what-agent-means/
│   │   └── index.html      ← Post 1
│   └── technical-playbook/
│       └── index.html      ← Post 2
└── images/
    ├── *.png               ← Screenshots
    └── *.svg               ← Diagrams
```

---

## Tips

- **Preview locally before deploying:** Just double-click any `.html` file to open it in your browser. All links use relative paths so they work locally too.
- **Custom domain (optional):** If you buy a domain (e.g., linusseah.com), you can point it to GitHub Pages for free. Settings → Pages → Custom domain.
- **HTTPS is automatic:** GitHub Pages gives you free SSL.
