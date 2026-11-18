# Simple Blog - Junior Frontend Developer Home Work

A simple, responsive blog post listing page built with Next.js. It shows modern frontend work with a focus on adaptive layouts, semantic HTML and SCSS styling. The page lists blog posts with images, titles, descriptions, dates, "Read more" links, view counts, reading time estimates and tags. The data comes from a mock API.

The design is based on a free blog UI kit from the Figma Community: https://www.figma.com/community/file/1235152009438565697

## Getting Started

Requirements: Node.js 18.18 or newer and Yarn.

1. Install the dependencies:

   ```bash
   yarn install
   ```

2. Start the development server:

   ```bash
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script        | Description                                       |
| ------------- | ------------------------------------------------- |
| `yarn dev`    | Starts the development server with Turbopack.     |
| `yarn build`  | Builds the application for production.            |
| `yarn start`  | Starts the production server (run `build` first). |
| `yarn lint`   | Runs ESLint (including the Prettier rules).       |
| `yarn format` | Formats the code with Prettier.                   |

## Deployment

1. Build the application for production:

   ```bash
   yarn build
   ```

2. Start the production server:

   ```bash
   yarn start
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 15 (Pages Router) for routing and data fetching
- React 19 (functional components, hooks, context)
- TypeScript
- SCSS modules for component styles
- [react-paginate](https://github.com/AdeleD/react-paginate) for pagination
- ESLint and Prettier for code quality

## Project Structure

```
src/
├── components/   UI components, one folder each (component, props type, SCSS module)
├── constants/    API URLs, navigation and footer links, tag list
├── context/      ThemeContext (light/dark theme)
├── hooks/        useMenuToggle (mobile menu state)
├── pages/        Next.js routes: /, /post/[id], /about, /projects, /newsletter
├── services/     BlogService (fetches posts from the mock API)
├── styles/       Global styles, SCSS variables and mixins
├── types/        Shared TypeScript types
└── utils/        Small helpers (date formatting, capitalization, random tags)
```

## Features

- **Responsive layout**
  - Grid layout that adapts to mobile, tablet and desktop screens.
  - Mobile-first styling in SCSS, with a slide-in menu on small screens.
- **Mock API integration**
  - Posts are fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
  - Cover images come from [Lorem Picsum](https://picsum.photos), seeded by post id.
  - The API only provides the title and body, so the date, view count and tags are simulated.
- **Pagination**
  - The "All Blog Posts" section shows 6 posts per page, using react-paginate. The current page is highlighted.
- **Post detail page**
  - "Read more" opens the post at `/post/[id]`. It is rendered on the server, and an unknown id shows the 404 page.
- **Accessibility**
  - Semantic HTML, alt text for images and `aria-label`s for icon buttons.
  - All controls (menu, theme toggle, links) are real buttons or links, so they work with the keyboard.
  - The closed mobile menu is `inert`, so its hidden links cannot be focused.

## Bonus Features

- **Dark mode toggle:** switches between the light and dark theme. The theme is stored in a React context and applied as a class on `<body>`, which switches the CSS color variables.
- **Dynamic reading time:** calculated from the word count at an average reading speed of 200 words per minute.
- **View counter:** each post shows a view count. It is randomly generated, because the mock API has no view data.

## Approach

- **Data fetching**
  - The post list is fetched on the client with `useEffect` and `useState`.
  - The post detail page uses `getServerSideProps`.
  - `BlogService` maps the API response to the `BlogPostType` model used by the UI.
- **Styling**
  - SCSS modules per component, with shared variables (colors, font sizes) and mixins (responsive grid, flex layout, breakpoints).
  - Mobile-first approach: the page is responsive on mobile, tablet and desktop screens.
- **Routing**
  - Dynamic route for blog posts: each post has its own page at `/post/[id]`.
- **Code quality**
  - ESLint (Next.js, TypeScript, React and Prettier rules) and Prettier keep the code clean and consistent.
  - Components, hooks, services and helpers are documented with JSDoc comments.

## Evaluation Criteria

- **Code structure and readability:** the code is clean, maintainable and follows best practices.
- **Mobile responsiveness:** a grid-based layout in SCSS adapts to different screen sizes.
- **Accessibility:** semantic HTML elements, alt text for images and keyboard-accessible controls.
- **Bonus features:** dark mode toggle and dynamic reading time calculation.

## Submission Guidelines

- Push the code to a public GitHub repository.
- Include a link to the Figma design used.
- Provide a brief explanation of the approach and of any bonus features implemented.
