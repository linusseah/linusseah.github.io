# GitHub Account Migration Notes

**Date:** February 18, 2026
**From:** `sumoseah` (kellogg.northwestern.edu email — expiring)
**To:** `linusseah` (personal account — primary going forward)

---

## Repositories Transferred

All repositories were transferred from `sumoseah` to `linusseah` via the GitHub API. Transfers preserve full git history, issues, GitHub Actions workflows, and create automatic URL redirects from the old location.

| Repository | Visibility | Notes |
|------------|-----------|-------|
| `daily-digest` | Public | v1/v1.5 deterministic pipeline |
| `daily-digest-v2` | Private | v2 agentic pipeline (active/running) |
| `sumo_claude_code` | Public | Claude Code apps (lives locally at `~/taskflow-app`) |
| `homework-5-git-basics` | Public | University course fork from NU-MBAI-MSAI |
| `personal-fin-tracker` | Private | Personal finance tracker dashboard |
| `source-to-start` | Private | — |

Repositories already in `linusseah` (no action needed):

- `linusseah.github.io` — personal site
- `General-DataScience-Projects-`
- `Pokemon-`
- `dsi2-projects`

---

## Local Clone Remote URLs Updated

Four locally cloned repositories had their `origin` remote updated from `sumoseah` to `linusseah`:

| Local path | Old remote | New remote |
|------------|-----------|------------|
| `~/projects/daily-digest-v2` | `sumoseah/daily-digest-v2` | `linusseah/daily-digest-v2` |
| `~/projects/personal-fin-tracker` | `sumoseah/personal-fin-tracker` | `linusseah/personal-fin-tracker` |
| `~/daily-digest` | `sumoseah/daily-digest` | `linusseah/daily-digest` |
| `~/taskflow-app` | `sumoseah/sumo_claude_code` | `linusseah/sumo_claude_code` |

Not updated (separate service, not GitHub):
- `~/image-to-poem-gradio` — points to HuggingFace Spaces (`sumoseah/image-to-poem-generator`)

---

## Site Links Updated (linusseah.github.io)

All `sumoseah` GitHub URLs in the site source were updated to `linusseah`:

### projects.html
- `Daily Digest v2` card title and GitHub link → `linusseah/daily-digest-v2`
- `Daily Digest v1/v1.5` card title and GitHub link → `linusseah/daily-digest`

### blog/what-agent-means/index.html
- Post header code links (v1/v1.5 and v2)
- Footer GitHub profile link → `github.com/linusseah`
- Footer Project Repo link → `linusseah/daily-digest-v2`

### blog/technical-playbook/index.html
- Post header code links (v1/v1.5 and v2)
- `search_web.py` full source link
- `config/system_prompt.txt` inline link
- `agent.py` inline link
- `config/user_profile.yaml` inline link and code source link
- `fallback.py` inline link
- GitHub Actions `digest.yml` inline link and code source link
- `tools/fetch_imap.py` code source link
- "Try It Yourself" section — both repo links and display text
- Footer GitHub profile link → `github.com/linusseah`
- Footer Project Repo link → `linusseah/daily-digest-v2`

### DEPLOY.md
- `git remote add origin` URL → `linusseah/linusseah.github.io`
- GitHub Pages settings URL → `linusseah/linusseah.github.io`

---

## GitHub Pages

- `linusseah.github.io` GitHub Pages was re-enabled after the account migration caused it to go offline.
- Configured to deploy from the `master` branch, root folder (`/`).
- Site is public; repo must remain public on the free GitHub plan.

---

## Not Yet Addressed

- **HuggingFace Spaces** (`~/image-to-poem-gradio`): Still linked to `sumoseah` account on HuggingFace. This is a separate service from GitHub and was not changed. Address separately if needed.
- **`sumoseah` account**: Now empty of repositories. Can be kept or deleted — GitHub will maintain URL redirects from `sumoseah/<repo>` to `linusseah/<repo>` as long as the transferred repos exist under `linusseah`.
