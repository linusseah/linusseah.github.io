# Quick Handoff Checklist — Claude (cowork) → Claude Code

Use this checklist before handing off a blog post for publishing.

---

## Pre-Handoff Checklist

### File Structure
- [ ] HTML file named `index.html`
- [ ] Links to `/css/style.css` (not inline styles except SVGs)
- [ ] All images saved as separate files (PNG/JPG)
- [ ] Descriptive image filenames (`screenshot-dashboard.png`, not `image1.png`)

### HTML Head
- [ ] Title format: `[Article Title] — Linus Seah`
- [ ] Meta description (1-2 sentences)
- [ ] Google Fonts link for Lora
- [ ] Stylesheet link to `/css/style.css`

### Navigation
- [ ] Standard nav with profile pic
- [ ] Links: About, Projects, Articles (active)
- [ ] Uses exact structure from guide

### Post Header
- [ ] Series label (if applicable): `Applied AI Thinking for Operators · Part X of Y`
- [ ] H1 title
- [ ] Subtitle (optional)
- [ ] Post meta: Author link, date, read time, demo/code links

### Content Body
- [ ] Wrapped in `<article class="prose">`
- [ ] H2 headings: italic serif, border-top
- [ ] H3 headings: italic serif, lighter
- [ ] Links use var(--accent) color
- [ ] Code uses `<code>` for inline, `<pre><code>` for blocks
- [ ] Images in `<div class="figure">` with caption
- [ ] Tables use proper `<thead>` and `<tbody>`

### Special Blocks
- [ ] Callouts use `.callout` class
- [ ] Insights use `.insight-box` with `.label`
- [ ] Warnings use `.warning-box` with `.label`
- [ ] Next post teaser uses `.next-post` (if series)

### Footer
- [ ] "About the author" paragraph
- [ ] **Text links:** Email + GitHub (above icons)
- [ ] **Icons:** Email, LinkedIn, GitHub SVGs
- [ ] References section
- [ ] Standard footer nav (GitHub · LinkedIn · Email)

### CSS Variables Used (not hardcoded colors)
- [ ] `var(--text)` for main text
- [ ] `var(--text-light)` for secondary text
- [ ] `var(--accent)` for links
- [ ] `var(--bg-alt)` for backgrounds
- [ ] `var(--border)` for borders

---

## Information to Provide Claude Code

When requesting publication, include:

1. **Article slug:** `article-name-in-kebab-case` (for folder name)
2. **Title:** Full article title
3. **Date:** Month YYYY (e.g., "March 2026")
4. **Read time:** "X min read"
5. **Series info:** (Optional) "Part X of Y" and series name
6. **Description:** 1-2 sentence summary for blog index
7. **Tags:** 3-5 tags (e.g., "AI Agents", "Next.js", "Solutions Architecture")
8. **Related links:** Should this link to other posts? Feature on homepage?

---

## Claude Code Will Handle

✅ Create `/blog/[article-slug]/` folder
✅ Move `index.html` and images into folder
✅ Update `/blog/index.html` to add article card
✅ Update homepage if featured
✅ Commit and push to GitHub

---

## Quick Syntax Reference

### Callout
```html
<div class="callout">
  <strong>Key point:</strong> Insight text here.
</div>
```

### Insight Box
```html
<div class="insight-box">
  <div class="label">Design Principle</div>
  <p style="margin:0;">Principle text here.</p>
</div>
```

### Warning Box
```html
<div class="warning-box">
  <div class="label">Trade-off</div>
  <p style="margin:0;">Warning text here.</p>
</div>
```

### Figure with Image
```html
<div class="figure">
  <img src="image-name.png" alt="Description" />
  <div class="caption">Caption text.</div>
</div>
```

### Tags
```html
<p>
  <span class="tag">Tag Name</span>
  <span class="tag">Another Tag</span>
</p>
```

---

## Common Gotchas

❌ **Don't forget:**
- Both text links AND icons in footer (text above, icons below)
- CSS variables instead of hardcoded colors
- Descriptive alt text for images
- Series label in post-header if part of series
- Target="_blank" for external links

✅ **Remember:**
- Navigation "Articles" link has `class="active"`
- Post subtitle is `<p class="post-subtitle">` (not a heading)
- Code inline uses `<code>`, blocks use `<pre><code>`
- Image filenames stay simple (no paths, same folder as index.html)

---

## Ready to Publish?

Once you've checked everything above, hand off to Claude Code with:

> "Ready to publish blog post. Article slug: `[slug]`. Metadata: [provide list above]. Files attached: index.html + [list of images]."

Claude Code will handle the rest! 🚀
