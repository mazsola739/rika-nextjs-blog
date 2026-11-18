import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { DEFAULT_THEME, themeScript } from '@/constants/theme';
import '@/styles/global.scss';
import styles from './layout.module.scss';

/** Self-hosted by Next.js at build time: no request to Google and no layout shift. */
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

/** Site title and description. Pages set their own title, which goes into the template. */
export const metadata: Metadata = {
  title: {
    default: "Rika's Blog",
    template: "%s | Rika's Blog",
  },
  description: 'A simple, responsive blog built with Next.js, React and SCSS.',
};

/** Both themes are supported, so the browser styles scrollbars and form controls to match. */
export const viewport: Viewport = {
  colorScheme: 'dark light',
};

/**
 * Root layout shared by every page: header, main content and footer.
 *
 * The page starts in the dark theme. The inline script switches to the stored
 * theme before the first paint; `suppressHydrationWarning` is needed because it
 * may change `data-theme` before React hydrates.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME} className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className={styles.layout}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
