import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML, CSS and JS files to `out/`, which GitHub Pages hosts.
  output: 'export',
  // Path prefix on GitHub Pages (`/rika-nextjs-blog`), set by the deploy workflow; empty locally.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  // `/about` is written as `about/index.html`, not `about.html` next to an `about/` folder
  // (which holds the prefetch data). A static host then always finds the page.
  trailingSlash: true,
  // Automatic memoization at build time, so components need no manual useMemo/useCallback.
  reactCompiler: true,
  // Type-checks every <Link href> and router.push() against the existing routes.
  typedRoutes: true,
  images: {
    // There is no image optimizer on a static host, so Lorem Picsum resizes the cover images.
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    // The layout is at most 1216px wide, so the default 2048px and 3840px versions are never needed.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
