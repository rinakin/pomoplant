import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pomoplant',
    short_name: 'Pomoplant',
    description:
      'Boost productivity with Pomoplant’s Pomodoro timer. Add and complete tasks in focused intervals, and watch your plant grow as you progress through your flow.',
    start_url: '/focus',
    display: 'standalone',
    background_color: '#f2f5e0 ',
    theme_color: '#c2c9b6',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
