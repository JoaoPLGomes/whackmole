import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full flex justify-center items-center bg-contain	bg-no-repeat">
      <img src="/WAM_bg.jpg" className="absolute h-full w-full" />
      <Component {...pageProps} />
    </div>
  );
}
