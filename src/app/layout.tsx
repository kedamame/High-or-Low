import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/components/providers/AppProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space',
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://your-app.vercel.app';

const miniAppEmbed = {
  version: '1',
  imageUrl: `${APP_URL}/opengraph-image`,
  button: {
    title: 'Play Now',
    action: {
      type: 'launch_miniapp',
      name: 'High or Low',
      url: APP_URL,
      splashImageUrl: `${APP_URL}/splash.png`,
      splashBackgroundColor: '#ede9df',
    },
  },
};

export const metadata: Metadata = {
  title: 'High or Low',
  description: 'Card streak challenge on Base. Two consecutive losses end the game.',
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: 'High or Low',
    description: 'Card streak challenge on Base.',
    type: 'website',
    images: [`${APP_URL}/og-image.png`],
  },
  other: {
    'fc:miniapp': JSON.stringify(miniAppEmbed),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body style={{ background: '#ede9df', color: '#141410', fontFamily: 'var(--font-space), sans-serif' }}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
