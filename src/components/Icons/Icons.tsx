import type { SVGProps } from 'react';

/*
 * Inline SVG icons. Each accepts the standard SVG props and uses `currentColor`,
 * so the color can be set with CSS.
 */

/** Left arrow: "Previous" in the pagination and "All posts" on the post page. */
export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="currentColor" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.67} d="M15.833 10.5H4.167m0 0L10 16.333M4.167 10.5 10 4.667" />
  </svg>
);

/** Right arrow: "Next" in the pagination. */
export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="currentColor" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.67} d="M4.167 10.5h11.666m0 0L10 4.667m5.833 5.833L10 16.333" />
  </svg>
);

/** Diagonal arrow next to the post titles in the listing. */
export const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7m0 0H7m10 0v10" />
  </svg>
);

/** Hamburger icon of the button that opens the mobile menu. */
export const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" {...props}>
    <g clipPath="url(#a)">
      <path d="M26.733 14.667H5.267c-.7 0-1.267.567-1.267 1.267v.133c0 .7.567 1.267 1.267 1.267h21.466c.7 0 1.267-.567 1.267-1.267v-.133c0-.7-.567-1.267-1.267-1.267ZM26.733 21.333H5.267C4.567 21.333 4 21.9 4 22.6v.133c0 .7.567 1.267 1.267 1.267h21.466c.7 0 1.267-.567 1.267-1.267V22.6c0-.7-.567-1.267-1.267-1.267ZM26.733 8H5.267C4.567 8 4 8.567 4 9.267V9.4c0 .7.567 1.267 1.267 1.267h21.466c.7 0 1.267-.567 1.267-1.267v-.133C28 8.567 27.433 8 26.733 8Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

/** Close (X) icon of the mobile menu. */
export const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" {...props}>
    <path d="M24.532 23.075 9.353 7.895a1.267 1.267 0 0 0-1.791 0l-.094.095a1.267 1.267 0 0 0 0 1.791l15.179 15.18a1.267 1.267 0 0 0 1.791 0l.094-.095a1.267 1.267 0 0 0 0-1.791Z" />
    <path d="m22.647 7.925-15.18 15.18a1.267 1.267 0 0 0 0 1.79l.095.095a1.267 1.267 0 0 0 1.791 0l15.18-15.18a1.267 1.267 0 0 0 0-1.79l-.095-.095a1.267 1.267 0 0 0-1.791 0Z" />
  </svg>
);

/*
 * Footer link icons, 1em in size so they follow the font size of the link.
 * GitHub mark: Octicons (MIT). The others: Lucide (ISC).
 */

/** Stroke settings shared by the Lucide icons. */
const lucideStroke = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

/** GitHub mark: the source code link. */
export const GitHub = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
  </svg>
);

/** Globe: the portfolio website. */
export const Globe = (props: SVGProps<SVGSVGElement>) => (
  <svg {...lucideStroke} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

/** Twitter bird. */
export const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <svg {...lucideStroke} {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

/** LinkedIn logo. */
export const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...lucideStroke} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/** Envelope: the email link. */
export const Mail = (props: SVGProps<SVGSVGElement>) => (
  <svg {...lucideStroke} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

/** RSS waves: the RSS feed link. */
export const Rss = (props: SVGProps<SVGSVGElement>) => (
  <svg {...lucideStroke} {...props}>
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
  </svg>
);

/** House: the link to the blog's home page. */
export const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg {...lucideStroke} {...props}>
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
