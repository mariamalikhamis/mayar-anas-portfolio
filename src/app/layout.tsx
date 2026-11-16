import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@fontsource/archivo/latin-500.css';
import '@fontsource/archivo/latin-600.css';
import '@fontsource/archivo/latin-700.css';
import './globals.css';
import { site } from '@/content/site';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mayar-anas.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.meta.title,
  description: site.meta.description,
  openGraph: { title: site.meta.title, description: site.meta.description, url: '/', siteName: site.meta.title, locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: site.meta.title, description: site.meta.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0E1117' },
  ],
};

// Runs before paint: applies the saved or system theme so there is no flash.
const themeScript = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <style>{`:root{--font-latin:'Inter Variable';--font-arabic:'Inter Variable';--font-serif:'Archivo'}`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
