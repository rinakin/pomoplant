import type { Metadata } from 'next';

import './globals.css';
import fonts from '@/lib/fonts';

import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.workSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="default"
          themes={['default', 'slate', 'slateDark', 'cottonCandy', 'cottonCandyDark']}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
