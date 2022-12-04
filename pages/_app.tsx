import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {Aldrich} from '@next/font/google';

const aldrich = Aldrich({
  subsets: ['latin'],
  variable: '--font-aldrich',
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${aldrich.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
