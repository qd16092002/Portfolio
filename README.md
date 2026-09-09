# Portfolio — Trần Quang Đạo

Personal portfolio site. Single-page React app (Create React App), bilingual
(English / Vietnamese), no backend.

## Getting started

```bash
npm install
npm start      # dev server on http://localhost:3000
npm run build  # production build into ./build
npm run lint   # ESLint, no warnings allowed
```

## Structure

```
public/            static assets served as-is (CV, images, favicon)
  projects/        project screenshots, 1200x750 WebP
src/
  App.js           page shell: header, sections, footer
  index.css        design tokens + reset (colors, type scale, spacing, radii, motion)
  App.css          layout primitives (container, section, buttons, cards, reveal)
  context/         LanguageContext — the single source for the active language
  data/            profile links and the skills list
  lib/             asset() helper for base-path-safe public URLs
  locales/         en.json / vi.json — all site copy lives here
  hooks/           useScrollSpy
  components/
    common/        Reveal, SectionHeader
    Layout/        Header, Footer
    Sections/      Hero, About, Skills, Experience, Projects, Contact
```

## Editing content

All visible copy lives in `src/locales/en.json` and `src/locales/vi.json`.
Both files must keep the same key structure. Personal links (email, phone,
GitHub, LinkedIn, CV) live in `src/data/profile.js`.

Project screenshots resolve by the project's `id` field:
`public/projects/<id>.webp`, exported at 1200x750 (16:10).

## Deployment

`.github/workflows/deploy.yml` builds the app and publishes `build/` to GitHub
Pages on every push to `main`. `homepage` is set to `"."` in `package.json` so
the bundle works both at a domain root and under a project subpath.
