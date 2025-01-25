import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import fonts from '@/lib/fonts';

import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Pomoplant - Customizable Pomodoro Timer to Boost Your Focus',
  description:
    'Boost productivity with Pomoplant, a customizable Pomodoro timer. Stay focused as your plant grows with each session, offering a personalized experience.',
};
export const viewport: Viewport = {
  maximumScale: 1, //Disable auto-zoom on mobile Safari
  themeColor: [
    {
      color: 'rgb(var(--background))',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${fonts.workSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="default"
          disableTransitionOnChange
          themes={[
            'default',
            'defaultDark',
            'slate',
            'slateDark',
            'pastelPink',
            'pastelPinkDark',
            'steampunkCogs',
            'steampunkCogsDark',
            'vintageVinyl',
            'vintageVinylDark',
            'mistyHarbor',
            'mistyHarborDark',
            'zenGarden',
            'zenGardenDark',
          ]}
        >
          <div className="flex min-h-screen flex-col">
            <main className="flex-grow">
              {children}
              <Analytics />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
