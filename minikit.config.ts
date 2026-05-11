const ROOT_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://your-app.vercel.app';

export const minikitConfig = {
  accountAssociation: {
    header: 'TODO: generate via Warpcast Manifest Tool',
    payload: 'TODO: generate via Warpcast Manifest Tool',
    signature: 'TODO: generate via Warpcast Manifest Tool',
  },
  miniapp: {
    version: '1',
    name: 'High or Low',
    subtitle: 'Card streak challenge on Base',
    description: 'Guess if the next card is higher or lower. One wrong answer ends your run. Chain correct guesses and record your best streak on Base. Can you beat your record?',
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: '#0f172a',
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: 'games',
    tags: ['cards', 'game', 'base', 'streak', 'highlow'],
    heroImageUrl: `${ROOT_URL}/og-image.png`,
    screenshotUrls: [
      `${ROOT_URL}/screenshot1.png`,
      `${ROOT_URL}/screenshot2.png`,
      `${ROOT_URL}/screenshot3.png`,
    ],
    tagline: 'One miss ends the game',
    ogTitle: 'High or Low',
    ogDescription: 'Card streak challenge on Base. How far can you go?',
    ogImageUrl: `${ROOT_URL}/og-image.png`,
    noindex: false,
    requiredChains: ['eip155:8453'],
    requiredCapabilities: [],
  },
} as const;
