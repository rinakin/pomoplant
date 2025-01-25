import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';
import fonts from '@/lib/fonts';

import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Pomoplant - Customizable Pomodoro Timer to Boost Your Focus',
  description:
    'Boost productivity with Pomoplant, a customizable Pomodoro timer. Stay focused as your plant grows with each session, offering a personalized experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
