# Thaw’s Portfolio

A one-page English/Japanese portfolio built with the existing React, TypeScript, and Vite setup. The page uses a warm editorial style, responsive navigation, a day/night theme, and reduced-motion-aware section reveals.

## Run locally

```sh
pnpm install
pnpm dev
```

Create a production build with `pnpm build`; preview it with `pnpm preview`.

## Update your portfolio

- **Name, location, school, graduation year, qualifications, email, GitHub, and learning topics:** edit `portfolio` in `src/content.ts`.
- **Introduction, story, section headings, and empty-state copy:** edit the `en` and `ja` entries in `copy` in `src/content.ts`.
- **Projects:** edit the bilingual entries in the `projects` array in `src/content.ts`. Entries support a title, description, status (`live`, `in-progress`, or `completed`), technologies, confirmed contributions, and optional repository/live URLs.
- **Portrait:** the current photo is `public/images/thaw-profile.jpg`; replace that file to update it. Its descriptive alt text is localized in `src/content.ts`.
- **Colors, typography, spacing, and responsive styles:** edit the CSS variables and rules in `src/styles.css`.

Yuno Study Space is listed using only the confirmed live website and study materials prepared for it; no design or coding role is claimed. Resume and LinkedIn details are not shown because no confirmed destination has been provided.
