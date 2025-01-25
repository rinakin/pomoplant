import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pomoplant',
    short_name: 'Pomoplant',
    description:
      'Boost productivity with Pomoplant’s Pomodoro timer. Add and complete tasks in focused intervals, and watch your plant grow as you progress through your flow.',
    start_url: '/focus',
    display: 'standalone',
    theme_color: '#f2f5e0',
    background_color: '#f2f5e0',
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
    screenshots: [
      {
        src: '/screenshot-app-705x925.png',
        sizes: '705x945',
        type: 'image/png',
        label: 'Mobile App Overview',
      },
      {
        src: '/screenshot-desktop-2000x1509.png',
        sizes: '2000x1509',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Desktop App Overview',
      },
    ],
  };
}
