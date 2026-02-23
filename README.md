# Joseph Martinez — NJIT IT Student Portfolio

A professional portfolio site built with HTML + Bootstrap 5, deployed via GitHub Pages from the `docs/` folder.

---

## How to Update Your Portfolio

### 1. Update Project Cards

Open `docs/index.html` and find the `<!-- SECTION: Portfolio / Proof of Work -->` section.

Each project card follows this pattern — edit the values in `< >`:

```html
<h3 class="project-title"><Your Project Title></h3>
<div class="tech-tags mb-3">
  <span class="badge badge-tech"><Tech 1></span>
  <span class="badge badge-tech"><Tech 2></span>
</div>
<p class="project-impact">
  <Sentence 1: What problem did you solve and who did it help.>
  <Sentence 2: Quantified result — e.g., reduced time by 40%, served 200+ users.>
</p>
```

To add a 4th or 5th project, copy an existing `<div class="col-md-6 col-xl-4">` block and paste it inside the `<div class="row g-4">`. Then create a matching `project-4.html` in `docs/case-studies/`.

---

### 2. Update Case Study Pages

Each case study is in `docs/case-studies/project-N.html` and uses the **Problem → Action → Result** framework.

- **Problem** — What was broken or missing? Who was affected?
- **Action** — What did you specifically do? What tools/decisions did you make?
- **Result** — What was the measurable outcome? Numbers preferred.

Update the `<h1>`, tech `badge-tech` tags, and the three `<p class="cs-body">` blocks.

---

### 3. Swap Your Resume

Drop your PDF into `docs/resume/` and name it exactly:

```
Joseph-Martinez-Resume-2026.pdf
```

The "Download Resume" button in the nav and hero will automatically point to it. No code changes needed.

---

### 4. Replace Your Headshot

Drop your photo into `docs/assets/images/` and name it:

```
headshot-placeholder.png
```

Recommended: square image, at least 400×400px. If the file is missing, the site falls back to a red "JM" initials placeholder automatically.

---

### 5. Update NJIT Highlander Section

In `docs/index.html`, find `<!-- SECTION: NJIT Highlander -->`.

Each badge follows this pattern:

```html
<h4 class="badge-title"><Club or Lab Name></h4>
<p class="badge-desc"><Your role and what you contributed.></p>
```

Change the Bootstrap Icon in `<i class="bi bi-..."></i>` to match — full icon list at https://icons.getbootstrap.com

---

### 6. Update Social Links

In `docs/index.html`, find the `<!-- SECTION: Footer / Contact -->` section and update the three `href` values:

| Link      | Where to update                                  |
| --------- | ------------------------------------------------ |
| LinkedIn  | `https://linkedin.com/in/YOUR-HANDLE`            |
| GitHub    | Already set to `https://github.com/joey33o`      |
| Handshake | `https://app.joinhandshake.com/profiles/YOUR-ID` |

---

## Deployment — GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to `Deploy from a branch`, branch `main`, folder `/docs`.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## File Structure

```
docs/
├── index.html                  Main portfolio page
├── assets/
│   ├── css/styles.css          NJIT theme styles
│   ├── js/main.js              Nav scroll behavior
│   └── images/                 Drop headshot here
├── case-studies/
│   ├── project-1.html
│   ├── project-2.html
│   └── project-3.html
└── resume/                     Drop PDF here
```
