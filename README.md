# 🌐 Marné Vermaak: Virtual CV

**CMPG 323 – Profile Development | NWU 2026**

Live site: **https://nowucme22.github.io/virtual-cv/**

A personal portfolio website built as the "Virtual CV" deliverable for CMPG 323. It's a
plain HTML/CSS/JS multi-page site (no framework, no build step) hosted on GitHub Pages,
designed as a friendlier, more personal counterpart to the formal PDF CV.

---

## 📄 Pages

| Page | File | What's on it |
|------|------|---------------|
| Home | `index.html` | Hero intro, flip-card photo with fun facts, current role/education snapshot, "where I'm headed" cards |
| About | `about.html` | Personal background, how I got into IT, what drives me |
| Resume | `resume.html` | Work experience, academic leadership experience, downloadable CV PDF |
| Skills | `skills.html` | Technical skills grouped by category |
| Projects | `projects.html` | Project cards with descriptions and links to GitHub repos |
| Contact | `contact.html` | Contact details and social links |

Navigation is a floating pill nav shared across every page, with a mobile toggle for
smaller screens.

## ✨ Interaction & Design

- **Flip-card "meet me" interaction:** clicking the homepage photo flips it over to
  reveal a short list of personal fun facts, then flips back on a second click.
- **Reveal-on-scroll sections:** content sections fade/slide in as they enter the
  viewport instead of appearing all at once.
- **Colour palette:** light blue / grey / cream, deliberately distinct from the more
  formal palette used on the printed CV, to keep the two deliverables visually separate.
- Responsive layout: cards and grids reflow for tablet/mobile, and the nav collapses
  into a toggleable menu below the desktop breakpoint.

## 🛠️ Tech Stack

- **HTML5:** semantic markup, one file per page
- **CSS3:** `css/style.css`, custom properties for the colour system, CSS Grid/Flexbox
  for layout, `@media` queries for responsiveness
- **Vanilla JavaScript:** `js/script.js` handles the flip-card interaction, the mobile
  nav toggle, and scroll-triggered reveal animations
- **Hosting:** GitHub Pages, served from the `main` branch

No build tools, bundlers, or frameworks; the whole site runs directly from static
files, which keeps setup to "clone and open `index.html`."

## 🗂️ Structure

```
virtual-cv/
├── index.html
├── about.html
├── resume.html
├── skills.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── headshot.png
    └── Marne_Vermaak_CV.pdf
```

## ▶️ Running Locally

No dependencies or build step required, just open `index.html` in a browser, or serve
the folder with any static server, e.g.:

```bash
npx serve .
```

## 🎓 Context

Built for **CMPG 323 – Profile Development** at North-West University, alongside the
[printed CV](assets/Marne_Vermaak_CV.pdf), a populated GitHub profile, and a LinkedIn
profile, as part of a combined post-graduation portfolio.
