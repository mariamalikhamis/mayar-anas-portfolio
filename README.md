# Mayar Anas — Architect Portfolio

Portfolio with light and dark modes, built with Next.js and deployed on Vercel.

## Edit content

| What | File |
| --- | --- |
| Projects (order, category, tags, text, cover, project page) | `src/content/projects.ts` |
| All other text and links (WhatsApp, email, LinkedIn, Behance, CV) | `src/content/site.ts` |
| Colours, spacing, type | "Mayar Anas theme" at the end of `src/app/globals.css` |
| Cover images | `public/covers/` (WebP, ~1600–2000px wide) |
| Project page images | `public/work/<project>/` |
| CV, portrait | `public/media/` |

### Add a project
1. Put the cover in `public/covers/` as WebP.
2. Copy one entry in `src/content/projects.ts`, change `slug`, `cat`, `type`, `tags`, `title`, `desc` and `cover`.
3. To give it its own page at `/work/<slug>`, add a `page` object (see Minet El Basal or Adabiya Shipyard) and put its images in `public/work/<slug>/`.
4. Category tabs only appear when a category has at least one project.

## Run locally
```bash
npm install
npm run dev
```
