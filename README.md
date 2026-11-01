# Sanil Gokarn: Portfolio

Personal portfolio site built with [Astro](https://astro.build) and Tailwind CSS.

## Run it locally

```sh
npm install
npm run dev
```

Open http://localhost:4321. Pages reload as you edit.

## Where things live

| What | File |
| --- | --- |
| Name, bio, stats, experience, education, skills, certifications | `src/data/profile.ts` |
| Homepage sections and layout | `src/pages/index.astro` |
| Projects (one Markdown file each) | `src/content/projects/*.md` |
| Project images | `src/assets/projects/<project-name>/` |
| GIFs and videos | `public/projects/<project-name>/` |
| Colours and fonts | `src/styles/global.css` |

## Add or update a project

1. Copy an existing file in `src/content/projects/` and rename it. The file name becomes the URL, e.g. `my-project.md` → `/projects/my-project/`.
2. Edit the details at the top between the `---` lines, then write the case study below them.
3. Put screenshots in `src/assets/projects/<project-name>/` and point to them:

   ```yaml
   cover: ../../assets/projects/my-project/main.png
   coverAlt: What the screenshot shows
   gallery:
     - src: ../../assets/projects/my-project/second.png
       alt: What this one shows
   ```

   Without a `cover`, the project gets a generated cover showing its first metric.
4. Set `featured: true` and an `order` number to show it on the homepage.

## Build

```sh
npm run build
```

The finished site is written to `dist/`.

## Publish

The live site is https://sanil-gokarn.github.io, hosted on GitHub Pages from the `Sanil-Gokarn.github.io` repository.

Every push to `main` rebuilds and republishes it automatically (see `.github/workflows/deploy.yml`). To publish a change:

```sh
git add -A
git commit -m "Describe the change"
git push
```

The update is live about two minutes later. Progress shows on the repository's **Actions** tab.
