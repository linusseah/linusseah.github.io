# Linus Seah — Blog Post Writing & Publishing Guide

> **Purpose:** This guide ensures blog posts written in Claude (cowork) are ready for direct upload to linusseah.com via Claude Code with minimal reformatting.

---

## Quick Handoff Checklist

When handing off a blog post from Claude (cowork) to Claude Code for publishing, ensure:

- [ ] HTML file uses the exact structure template below
- [ ] Links to `/css/style.css` (not inline styles)
- [ ] All images are saved as separate files with clear names
- [ ] Meta tags include title and description
- [ ] Post metadata filled in (date, read time, series info)
- [ ] Footer includes both text links AND social icons
- [ ] All internal links use correct paths (`/blog/article-name/`)
- [ ] File is saved as `index.html` (will go in `/blog/article-name/` folder)

---

## HTML Template Structure

Every blog post must follow this exact structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Article Title] — Linus Seah</title>
  <meta name="description" content="[1-2 sentence description]">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>

  <nav>
    <div class="container">
      <a href="/" class="nav-name"><img src="/images/pp.jpg" alt="Linus Seah" class="nav-photo">Linus Seah</a>
      <ul class="nav-links">
        <li><a href="/about/">About</a></li>
        <li><a href="/projects/">Projects</a></li>
        <li><a href="/blog/" class="active">Articles</a></li>
      </ul>
    </div>
  </nav>

  <main class="container">

    <div class="post-header">
      <div class="series">[Optional: Series Name · Part X of Y]</div>
      <h1>[Article Title]</h1>
      <p class="post-subtitle">[Optional: Subtitle or hook sentence]</p>
      <div class="post-meta">
        By <a href="https://www.linkedin.com/in/linusseah/" target="_blank">Linus Seah</a> · [Month YYYY] · [X] min read<br>
        [Optional: Links to demo/code/related posts]
      </div>
    </div>

    <article class="prose">

      <!-- CONTENT GOES HERE -->

    </article>

    <div class="post-footer">
      <p><strong>About the author:</strong> I'm Linus, a Singaporean Product Manager currently based in San Francisco. I write about building practical AI systems from the perspective of someone who's learning by doing. [Optional: series description]</p>
      <p>
        Email: <a href="mailto:seah.linus@gmail.com">seah.linus@gmail.com</a><br>
        GitHub: <a href="https://github.com/linusseah" target="_blank">linusseah</a>
      </p>
      <div style="margin-top: 16px; display: flex; gap: 20px; align-items: center;">
        <a href="mailto:seah.linus@gmail.com" title="Email" style="color: var(--text-light); text-decoration: none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M2 7l10 7 10-7"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/linusseah/" target="_blank" title="LinkedIn" style="color: var(--text-light); text-decoration: none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="3"/>
            <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>
          </svg>
        </a>
        <a href="https://github.com/linusseah" target="_blank" title="GitHub" style="color: var(--text-light); text-decoration: none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
      </div>
      <p style="font-size:12px; color: var(--text-muted); margin-top:24px;">
        <em>References:</em><br>
        · [Link to reference 1]<br>
        · [Link to reference 2]<br>
        [etc.]
      </p>
    </div>

  </main>

  <footer>
    <div class="container">
      <p><a href="https://github.com/linusseah" target="_blank">GitHub</a> · <a href="https://www.linkedin.com/in/linusseah/" target="_blank">LinkedIn</a> · <a href="mailto:seah.linus@gmail.com">Email</a></p>
    </div>
  </footer>

</body>
</html>
```

---

## Style Guide

### Typography & Color Palette

**DO NOT use inline CSS color codes.** Use CSS variables instead:

```css
/* Earthy neutral palette */
--text:        #2c2c2c    /* Main body text */
--text-light:  #6b6b60    /* Secondary text */
--text-muted:  #9a9588    /* Tertiary/muted text */
--accent:      #8b7355    /* Links, highlights */
--accent-hover:#6d5a43    /* Link hover state */
--bg:          #faf9f6    /* Main background */
--bg-alt:      #f2f0eb    /* Alternate background */
--border:      #e0ddd5    /* Border color */
--tag-bg:      #ece9e1    /* Tag backgrounds */
--code-bg:     #f5f3ee    /* Code background */
--highlight:   #c4a97d    /* Emphasis highlights */
```

**Fonts:**
- **Body text:** Crimson Pro (serif) — 1.15rem, line-height 1.85
- **Headings/UI:** Source Sans 3 (sans-serif)
- **Code:** Consolas, Liberation Mono, Menlo

---

## Content Structure Rules

### Headings

```html
<h2>Main Section Heading</h2>
<!-- Font: Crimson Pro, 1.55rem, italic, border-top -->

<h3>Subsection Heading</h3>
<!-- Font: Crimson Pro, 1.2rem, italic, lighter color -->
```

### Paragraphs

```html
<p>Regular paragraph text. Keep it readable and well-spaced.</p>
<!-- Margin-bottom: 1.4rem automatically applied -->
```

### Links

```html
<a href="/blog/article-name/">Internal article link</a>
<a href="https://example.com" target="_blank">External link</a>
<!-- Color: var(--accent), no underline by default, underline on hover -->
```

### Inline Code

```html
<p>Use <code>code tags</code> for inline code or technical terms.</p>
<!-- Background: var(--code-bg), small border, monospace font -->
```

### Code Blocks

```html
<pre><code>
def example_function():
    return "Code goes here"
</code></pre>
<!-- Dark background (#2a2520), proper syntax highlighting colors -->
```

### Lists

```html
<ul>
  <li>Unordered list item</li>
  <li>Another item</li>
</ul>

<ol>
  <li>Ordered list item</li>
  <li>Another item</li>
</ol>
```

---

## Special Content Blocks

### Callout Box (for key insights/quotes)

```html
<div class="callout">
  <strong>The key insight:</strong> Important takeaway or quote goes here in italic serif font.
</div>
```

**Styling:**
- Background: var(--bg-alt)
- Left border: 3px solid var(--accent)
- Font: Crimson Pro, italic
- Use for: key insights, important quotes, emphasis

### Insight Box (for tips/principles)

```html
<div class="insight-box">
  <div class="label">Design Principle</div>
  <p style="margin:0;">The actual insight or principle explained clearly and concisely.</p>
</div>
```

**Styling:**
- Background: #f4f0e8 (warm beige)
- Border: 1px solid #d9cebe
- Label: uppercase, small, accent color
- Use for: design principles, key learnings, actionable tips

### Warning Box (for caveats/trade-offs)

```html
<div class="warning-box">
  <div class="label">Trade-off</div>
  <p style="margin:0;">Explanation of the caveat, limitation, or trade-off.</p>
</div>
```

**Styling:**
- Background: #f5ede0 (slightly warmer beige)
- Border: 1px solid #ddc9aa
- Label: uppercase, small, brown color
- Use for: warnings, caveats, important trade-offs

### Next Post Teaser (for series)

```html
<div class="next-post">
  <div class="label">Next in this Series</div>
  <div class="title"><a href="/blog/next-article/">Title of Next Article</a></div>
  <p style="font-size:15px;color:var(--text-light);margin:6px 0 0;font-family:-apple-system,sans-serif;">Short description of what's covered next.</p>
</div>
```

---

## Images & Figures

### Standard Image with Caption

```html
<div class="figure">
  <img src="image-name.png" alt="Descriptive alt text for accessibility" />
  <div class="caption">Caption explaining what the image shows and why it matters.</div>
</div>
```

**Image requirements:**
- Save as separate PNG/JPG files (not embedded)
- Use descriptive filenames: `screenshot-dashboard.png`, `architecture-diagram.png`
- Max width: 100% (responsive)
- Border + subtle shadow applied automatically

### SVG Diagrams

```html
<div class="figure">
  <svg viewBox="0 0 680 450" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:var(--bg-alt);border-radius:8px;border:1px solid var(--border);">
    <!-- SVG content -->
  </svg>
  <div class="caption">Caption for the diagram.</div>
</div>
```

**SVG styling tips:**
- Use CSS variables for colors (var(--accent), var(--text), etc.)
- Background: var(--bg-alt)
- Border: 1px solid var(--border)
- Keep viewBox responsive

---

## Tables

```html
<table>
  <thead>
    <tr>
      <th>Column Header 1</th>
      <th>Column Header 2</th>
      <th>Column Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 2, Cell 3</td>
    </tr>
  </tbody>
</table>
```

**Styling:**
- Font: Source Sans 3 (sans-serif), 14px
- Header background: var(--bg-alt)
- Borders: subtle, alternating row colors
- Full width, responsive

---

## Tags

```html
<p>
  <span class="tag">AI Agents</span>
  <span class="tag">Next.js</span>
  <span class="tag">Solutions Architecture</span>
</p>
```

**Styling:**
- Background: var(--tag-bg)
- Border: 1px solid var(--border)
- Small rounded corners
- Sans-serif, 11px, uppercase tracking

---

## Writing Tone & Style

### Voice
- **Technical but accessible:** Explain complex concepts clearly without dumbing down
- **Personal and reflective:** "I built this," "Here's what I learned"
- **Honest about limitations:** Call out v1 assumptions, unsolved problems, trade-offs
- **Actionable:** Readers should leave with concrete takeaways

### Structure
1. **Hook/Context:** Why this matters, what problem you're solving
2. **The Build:** What you made, how it works, key decisions
3. **Reflections:** What worked, what didn't, what you'd do differently
4. **Next Steps:** What's still unsolved, where to improve

### Sentence Style
- **Active voice preferred:** "I built X" not "X was built"
- **Vary sentence length:** Mix short punchy sentences with longer explanatory ones
- **Use concrete examples:** Not "the system performs well" but "reduces enrichment time from 8 minutes to 3"
- **Avoid jargon without definition:** If using technical terms, explain them

---

## Internal Linking Conventions

```html
<!-- Links to other blog posts -->
<a href="/blog/article-slug/">Article Title</a>

<!-- Links to projects -->
<a href="/projects/">Projects page</a>

<!-- Links to external resources -->
<a href="https://example.com" target="_blank">External Resource</a>
```

**Path structure:**
- Blog posts: `/blog/article-slug/` (each article lives in `/blog/article-slug/index.html`)
- Projects: `/projects/`
- About: `/about/`
- Homepage: `/`

---

## File Organization for Handoff

When ready to hand off to Claude Code, provide:

1. **Main HTML file** saved as `index.html`
2. **All images** as separate files with descriptive names
3. **Article slug** for the folder name (e.g., `lead-gen-reflections`)
4. **Blog index metadata** for the new article:
   ```
   Title: [Article Title]
   Date: [Month YYYY]
   Read time: [X] min read
   Series: [Optional: Series Name · Part X of Y]
   Description: [1-2 sentence summary for blog index]
   Tags: [3-5 relevant tags]
   ```

Claude Code will then:
1. Create `/blog/[article-slug]/` folder
2. Move `index.html` and images into folder
3. Update `/blog/index.html` to add article to list
4. Update homepage if needed
5. Commit and push to GitHub

---

## Common Mistakes to Avoid

❌ **Don't:**
- Use inline CSS styles (except for SVGs or very specific one-off cases)
- Hardcode color values like `#6366f1` — use CSS variables
- Use relative image paths like `../images/` — use `image-name.png` (same folder)
- Forget to include both text links AND icons in footer
- Use different fonts (stick to Crimson Pro + Source Sans 3)
- Add emojis unless explicitly requested

✅ **Do:**
- Link to `/css/style.css`
- Use semantic HTML (proper heading hierarchy)
- Include descriptive alt text for all images
- Test that all internal links use correct paths
- Keep the footer structure consistent with other posts
- Use the exact navigation structure from template

---

## Questions for Claude Code Handoff

When handing off, answer these for smooth publishing:

1. **Article slug (URL path):** What should the folder be named?
2. **Series information:** Is this part of a series? What part number?
3. **Related posts:** Should this link to previous/next articles?
4. **Homepage feature:** Should this appear on the homepage Featured Projects/Writing?
5. **Images:** Have all images been saved as separate files?

---

## Example Reference

See these published posts for perfect examples:
- `/blog/what-agent-means/index.html` — Standard article with series
- `/blog/lead-gen-reflections/index.html` — Article with images and diagrams
- `/blog/lead-gen-technical/index.html` — Technical deep-dive with tables and code

---

## Version History

- **2026-03-20:** Initial guide created after Instalily blog post handoff
- Guide reflects actual production styles from linusseah.com as of March 2026
