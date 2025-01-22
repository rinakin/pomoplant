import type { Metadata } from 'next';

import './globals.css';
import fonts from '@/lib/fonts';

import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Pomoplant - Pomodoro Timer with Growing Plant for Focus',
  description:
    'Boost your productivity with Pomoplant, a Pomodoro timer that helps you stay focused while your plant grows with each session.',
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
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
