# Simple Blog – Junior Frontend Developer Homework

A simple, responsive blog post listing page built with Next.js. It shows modern frontend work with a focus on adaptive layouts, semantic HTML and SCSS styling. The page lists blog posts with images, titles, descriptions, dates, "Read more" links, view counts, reading time estimates and tags. The data comes from a mock API.

Built in 2023 as a home assignment, fully renovated in 2026 (see [History](#history)).

- **Live demo:** https://mazsola739.github.io/rika-nextjs-blog/
- **Source code:** https://github.com/mazsola739/rika-nextjs-blog
- **Portfolio:** https://mazsola739.github.io/mazsola739/ (the blog links to it from the footer and the Projects page)
- **Figma design:** a free blog UI kit from the Figma Community: https://www.figma.com/community/file/1235152009438565697

## Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Approach](#approach)
- [Limitations](#limitations)
- [History](#history)
- [The Task](#the-task)

## Getting Started

Requirements: Node.js 20.9 or newer and Yarn.

1. Clone the repository and install the dependencies:

   ```bash
   git clone https://github.com/mazsola739/rika-nextjs-blog.git
   cd rika-nextjs-blog
   yarn install
   ```

2. Start the development server:

   ```bash
   yarn dev
   ```

   This opens [http://localhost:1111](http://localhost:1111) in your default browser as soon as the server is ready. To start the server without opening the browser, set `NO_OPEN=1`.

The app runs on port 1111 instead of the Next.js default 3000, so it does not clash with other local projects. To use a different port, change `PORT` in `scripts/dev.mjs` (or set the `PORT` environment variable) and the `-l` flag of the `start` script in `package.json`.

## Scripts

| Script           | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `yarn dev`       | Starts the development server on port 1111 and opens it in the browser.      |
| `yarn build`     | Builds the static site into `out/` (type-checks and pre-renders every page). |
| `yarn start`     | Serves the built static site from `out/` on port 1111 (run `build` first).   |
| `yarn lint`      | Runs ESLint (including the Prettier rules).                                  |
| `yarn typecheck` | Generates the route types and runs the TypeScript compiler.                  |
| `yarn format`    | Formats the code with Prettier.                                              |

## Deployment

The site is a static export: `yarn build` pre-renders every page to plain HTML, CSS and JS files in `out/`, so it can be hosted on any static web server. No Node.js server is needed.

### GitHub Pages

The live demo is hosted on GitHub Pages: https://mazsola739.github.io/rika-nextjs-blog/

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow:

1. installs the dependencies (Node.js 24, `yarn install --frozen-lockfile`),
2. runs ESLint (`yarn lint`),
3. builds the site with the GitHub Pages base path (`yarn build`),
4. publishes `out/` to GitHub Pages.

A deployment takes about a minute. The workflow can also be started by hand: **Actions → Deploy to GitHub Pages → Run workflow**.

One-time setup in the repository: **Settings → Pages → Source: GitHub Actions**.

The site is served from a sub-path (`/rika-nextjs-blog/`), so the workflow sets two environment variables for the build. It reads both from the repository's Pages settings, so they stay correct if the repository is renamed.

| Variable                | Value on GitHub Pages                           | Used for                                         |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_BASE_PATH` | `/rika-nextjs-blog`                             | The path prefix of every page, script and image. |
| `NEXT_PUBLIC_SITE_URL`  | `https://mazsola739.github.io/rika-nextjs-blog` | The absolute links in the RSS feed.              |

Both are empty locally, so `yarn build` followed by `yarn start` serves the site at [http://localhost:1111](http://localhost:1111).

### Updating the content

The posts are fetched from the mock API when the site is built, so the live site changes only with a new deployment: push to `main`, or start the workflow by hand.

### Testing the GitHub Pages build locally

To check the site under the same sub-path as on GitHub Pages, build it with the base path and serve the output from a `rika-nextjs-blog` folder:

```bash
NEXT_PUBLIC_BASE_PATH=/rika-nextjs-blog yarn build
```

```bash
mkdir -p ../pages-preview && rm -rf ../pages-preview/rika-nextjs-blog && cp -r out ../pages-preview/rika-nextjs-blog
```

```bash
npx serve ../pages-preview -l 1111
```

Then open [http://localhost:1111/rika-nextjs-blog/](http://localhost:1111/rika-nextjs-blog/).

On Windows, Git Bash turns `/rika-nextjs-blog` into a Windows path. Start the build command with `MSYS_NO_PATHCONV=1` there.

## Tech Stack

- [Next.js 16](https://nextjs.org) with the App Router, React Server Components and Turbopack
- Static export, hosted on GitHub Pages and deployed with GitHub Actions
- React 19 with the React Compiler (automatic memoization)
- TypeScript 6 with typed routes
- SCSS modules for component styles
- [react-paginate](https://github.com/AdeleD/react-paginate) for pagination
- ESLint 10 (flat config) and Prettier for code quality
- Data: [JSONPlaceholder](https://jsonplaceholder.typicode.com) (posts) and [Lorem Picsum](https://picsum.photos) (images)

## Project Structure

```
src/
├── app/          Routes (App Router)
│   ├── layout.tsx        Root layout: <html>, header, footer, fonts, metadata, theme script
│   ├── page.tsx          /                Blog post listing (first page)
│   ├── page/[page]/      /page/[page]/    Further pages of the listing
│   ├── posts/[id]/       /posts/[id]/     Post detail page
│   ├── projects/         /projects/       Points to the portfolio
│   ├── about/, newsletter/                Placeholder pages
│   ├── rss.xml/route.ts  /rss.xml         RSS feed
│   ├── not-found.tsx     404 page
│   └── error.tsx         Error page (e.g. when a page cannot be loaded while offline)
├── components/   UI components, one folder each (component, props type, SCSS module)
├── constants/    API URLs, site URLs (base path, portfolio), navigation and footer links, tags, theme
├── hooks/        useTheme (light/dark theme)
├── services/     posts.ts: fetches the posts from the mock API (at build time)
├── styles/       Global styles, SCSS variables and mixins
├── types/        Shared TypeScript types
└── utils/        Small helpers (formatting, seeded random generator, pagination, image loader)
scripts/
└── dev.mjs       Starts the dev server and opens the browser
.github/workflows/
└── deploy.yml    Builds the site and publishes it to GitHub Pages
```

### Components

| Component      | What it does                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| `BlogPost`     | One post card: cover image, date, view count, reading time, title, excerpt, tags and a "Read more" link. |
| `BlogPostList` | Home page content: "Recent Blog Posts" and the paginated "All Blog Posts".                               |
| `Pagination`   | Page links of "All Blog Posts", built on react-paginate (client component).                              |
| `Header`       | Logo, navigation, the button of the mobile menu and the "THE BLOG" title.                                |
| `Nav`          | Main navigation; marks the current page (client component).                                              |
| `MobileMenu`   | Slide-in menu on small screens, built on the native Popover API (client component).                      |
| `ThemeToggle`  | Light/dark switch (client component).                                                                    |
| `Footer`       | Footer links with icons (portfolio, GitHub, socials, RSS feed) and the copyright line.                   |
| `ExternalLink` | Link that leaves the blog: opens in a new tab and tells screen readers so.                               |
| `Tag`          | Colored tag pill; the color comes from the tag name.                                                     |
| `Icons`        | Inline SVG icons that take their color from the text (`currentColor`).                                   |

## Features

- **Responsive layout**
  - Grid layout that adapts to mobile, tablet and desktop screens.
  - Mobile-first styling in SCSS, with a slide-in menu on small screens.
- **Mock API integration**
  - Posts are fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) at build time, so every page arrives as ready-made HTML.
  - Cover images come from [Lorem Picsum](https://picsum.photos). A custom `next/image` loader asks Lorem Picsum for each image in the width the screen needs, in WebP (responsive `srcset`, lazy loading).
  - The API only provides the title and body, so the date, view count and tags are simulated. A random generator seeded by the post id keeps these values the same on every build.
- **Pagination**
  - The "All Blog Posts" section shows 6 posts per page, using react-paginate.
  - Every page has its own static URL (`/`, `/page/2/`, `/page/3/`, ...), so it can be shared or bookmarked. The page links also work without JavaScript.
- **Post detail page**
  - "Read more" opens the post at `/posts/[id]/`. All post pages are pre-rendered at build time; an unknown id shows the 404 page.
  - Each post has its own page title, description and social preview image (Open Graph).
- **Accessibility**
  - Semantic HTML (`article`, `nav`, `time`, lists, heading hierarchy), alt text for images and `aria-label`s for icon buttons.
  - All controls are real buttons or links, so they work with the keyboard; focus is visible for keyboard users.
  - The mobile menu uses the native Popover API: the browser handles focus and closing with Esc.
  - The current page is marked with `aria-current="page"` in the navigation.
  - Links that open a new tab say so to screen readers.
  - Animations are turned off when the user prefers reduced motion.
- **RSS feed** at `/rss.xml`, linked from the footer.
- **Links to the portfolio and the source code** in the footer, and to the portfolio on the Projects page. Links that leave the blog open in a new tab; links inside the blog stay in the same tab.

## Bonus Features

- **Dark mode toggle:** the site always opens in the dark theme. The toggle switches to light mode and back, and the choice is kept for the rest of the visit (`sessionStorage`), so every new visit starts dark again. A small inline script applies the choice before the first paint, so a reload never flashes the wrong theme.
- **Dynamic reading time:** calculated from the word count at an average reading speed of 200 words per minute.
- **View counter:** each post shows a view count. It is simulated, because the mock API has no view data.

## Approach

- **Data fetching**
  - Pages are React Server Components, rendered at build time (static export): the HTML arrives with the content, and no loading state is needed in the browser.
  - `services/posts.ts` fetches the posts once per build and maps them to the `BlogPostType` model used by the UI.
  - Only the interactive parts are client components: the pagination, the navigation, the mobile menu, the theme toggle and the error page.
- **Static hosting**
  - `output: 'export'` in `next.config.ts` writes the whole site to `out/`; dynamic routes list their pages with `generateStaticParams`, and the RSS route is rendered once at build time.
  - `trailingSlash: true`: every page is a folder with an `index.html` (`/about/` → `about/index.html`), which static hosts like GitHub Pages always find.
  - The base path is added automatically to `next/link` links, router navigation, scripts and styles. Plain `<a>` links and images from `public/` add it by hand from `BASE_PATH` (`constants/site.ts`).
  - GitHub Pages has no image optimizer, so a custom `next/image` loader (`utils/imageLoader.ts`) lets Lorem Picsum resize the cover images.
- **Styling**
  - SCSS modules per component, with shared variables (colors, font sizes) and mixins (responsive grid, flex layout, breakpoints).
  - The theme colors are CSS custom properties, switched by the `data-theme` attribute on `<html>`.
  - The Inter font is self-hosted with `next/font`, so there is no request to Google Fonts and no layout shift.
  - Mobile-first approach: the page is responsive on mobile, tablet and desktop screens.
- **Routing**
  - App Router with dynamic routes that are pre-rendered at build time: each post has its own page at `/posts/[id]/`, and each page of the listing at `/page/[page]/`.
  - Typed routes: links to non-existent routes are type errors.
- **Code quality**
  - ESLint (Next.js, React, React Hooks / React Compiler, accessibility, TypeScript and Prettier rules) and Prettier keep the code clean and consistent. The deploy workflow runs ESLint before every deployment.
  - Components, hooks, services, helpers and configuration files are documented with JSDoc comments.

## Limitations

- The content comes from a mock API: the posts are Latin placeholder text, and the dates, view counts and tags are simulated.
- The live site shows the posts as they were at the last deployment (see [Updating the content](#updating-the-content)).
- The Twitter, LinkedIn and Email links in the footer and the About and Newsletter pages are placeholders from the design.

## History

- **2023 – original version:** built as a home assignment with the Next.js Pages Router, a React context for the theme and SCSS modules, following the Figma design.
- **2026 – renovation:**
  - Moved to Next.js 16 with the App Router and React Server Components, React 19 with the React Compiler, TypeScript 6 with typed routes and ESLint 10.
  - Published as a static site on GitHub Pages, deployed by GitHub Actions on every push.
  - Posts fetched at build time; every page of the listing and every post pre-rendered with its own URL. Post pages moved to `/posts/[id]/`, as the task asks.
  - Responsive WebP images with `next/image`, the Inter font self-hosted with `next/font`.
  - Mobile menu rebuilt on the native Popover API; accessibility improvements (current page, focus ring, reduced motion, new-tab notes).
  - Dark theme by default, without a flash of the wrong theme.
  - RSS feed, 404 and error pages, links to the portfolio and the source code.
  - Development server on port 1111 that opens the browser by itself.
  - Code cleaned up and documented with JSDoc.

## The Task

### Evaluation Criteria

- **Code structure and readability:** the code is clean, maintainable and follows best practices.
- **Mobile responsiveness:** a grid-based layout in SCSS adapts to different screen sizes.
- **Accessibility:** semantic HTML elements, alt text for images and keyboard-accessible controls.
- **Bonus features:** dark mode toggle and dynamic reading time calculation.

### Submission Guidelines

- Push the code to a public GitHub repository.
- Include a link to the Figma design used.
- Provide a brief explanation of the approach and of any bonus features implemented.

## License

[MIT](LICENSE)
