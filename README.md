# dylan-kim.github.io

Personal tech blog — Astro + [AstroPaper](https://github.com/satnaing/astro-paper), deployed to GitHub Pages on push to `main`.

## Write a post

1. Create `src/content/posts/<slug>/index.md` (images go in the same folder).
2. Front matter:
   ```yaml
   ---
   title: "My post"
   description: "One-line summary."
   pubDatetime: 2026-11-26T10:00:00+01:00
   tags: ["topic"]
   draft: true # remove or set false to publish
   ---
   ```
3. Image with caption: `![alt text](./pic.png "Caption shown under the image")`
4. Preview: `pnpm dev` → http://localhost:4321
5. Publish: `git push` to `main`.

Site settings (title, socials, features): `astro-paper.config.ts`. About page: `src/content/pages/about.md`.
