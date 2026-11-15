# Bhushan Zade — Poster Portfolio

A ready-to-customize, poster-style portfolio inspired by the illustrated editorial approach of Ashmit Mittal's public Astro portfolio template. This project uses original CSS/SVG artwork and customized copy for Bhushan; it does not include Ashmit's personal illustrations.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (normally http://localhost:4321).

Build for production:

```bash
npm run build
npm run preview
```

## Personal details already added

- Bhushan Zade — AI Analyst
- Pune, India
- Email: bhushanzade02@gmail.com
- GitHub: https://github.com/bhushanzade02
- LinkedIn: https://www.linkedin.com/in/bhushanzade02/
- Resume PDF: `public/Bhushan-Zade-Resume.pdf`

## Sections

1. Illustrated poster-style hero with floating skill labels
2. About / professional positioning
3. Three featured projects from the supplied resume
4. Technical toolkit
5. Education
6. Contact and social links

## Content to review before publishing

- Confirm the LinkedIn URL and public email address.
- The resume PDF contains the contact details from the uploaded resume. Review it before deploying publicly; replace it with a redacted copy if you do not want your phone number public.
- The SMS Fraud Detection and Numerical Computing cards are included from the resume and are intentionally not linked to guessed repositories.
- Algonix links to `https://github.com/bhushanzade02/MACHINE-LEARNING`, the repository referenced by the Algonix PyPI package metadata.
- No company-internal project names or confidential implementation details are included.
- Check the content of the public GitHub repositories and add direct links to the other projects once their exact repository URLs are confirmed.

## Deploy to GitHub Pages

1. Create a new public repository named `bhushanzade02.github.io` (or use another repository and configure the matching Astro `base`).
2. Push this project to the repository.
3. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the deployment source.
4. Add an Astro GitHub Pages workflow if the repository does not already have one. The Astro deployment guide is at https://docs.astro.build/en/guides/deploy/github/.

For a project repository rather than a user-site repository, update `base` in `astro.config.mjs` to `'/repository-name'` and use the same base in the GitHub Pages workflow.

## Customization

Most profile text and project content are in `src/pages/index.astro`. Colours, typography, spacing and mobile layout are in `src/styles/global.css`. Intro and scroll animations are in `src/scripts/motion.ts`.
