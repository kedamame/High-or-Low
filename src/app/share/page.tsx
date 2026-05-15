import { type Metadata } from 'next';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://high-or-low-sigma.vercel.app';

type Props = { searchParams: { streak?: string } };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const streak = Math.min(9999, Math.max(0, parseInt(searchParams.streak || '0', 10)));
  const ogImage = `${APP_URL}/og-result?streak=${streak}`;
  const title = `High or Low - ${streak} streak`;
  const description =
    streak > 0
      ? `I scored a streak of ${streak} playing High or Low on Base! Can you beat me?`
      : 'Just played High or Low on Base. Give it a try!';

  const miniAppEmbed = {
    version: '1',
    imageUrl: ogImage,
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

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage, width: 900, height: 600 }],
    },
    other: {
      'fc:miniapp': JSON.stringify(miniAppEmbed),
      'base:app_id': '6a0205a1e13b6320f1e63f5b',
    },
  };
}

// Page body is intentionally empty — this route exists only for OG metadata.
// The fc:miniapp embed's "Play Now" button launches the miniapp at APP_URL.
export default function SharePage() {
  return null;
}
