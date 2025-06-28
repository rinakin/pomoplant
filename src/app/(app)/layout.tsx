import type { Metadata } from 'next';

import React from 'react';
import AppFooter from '@/components/app-footer';

export const metadata: Metadata = {
  title: 'Pomoplant - Pomodoro Timer that Grows with You',
  description:
    'Boost productivity with Pomoplant’s Pomodoro timer. Add and complete tasks in focused intervals, and watch your plant grow as you progress through your flow.',
};

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full">
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">{children}</main>
        <AppFooter />
      </div>
    </main>
  );
};

export default MainLayout;
