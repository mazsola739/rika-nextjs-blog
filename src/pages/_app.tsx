import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/context/ThemeContext';
import '../styles/global.scss';

/** App root: loads the global styles and wraps every page in the {@link ThemeProvider}. */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
