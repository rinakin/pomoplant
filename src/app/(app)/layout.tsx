import type { Metadata } from 'next';

import React from 'react';
import AppNavbar from '@/components/app-navbar';
import AppFooter from '@/components/app-footer';

export const metadata: Metadata = {
  title: 'Pomoplant - Focus Mode with Your Growing Plant',
  description:
    'Stay focused with Pomoplant’s Pomodoro timer. Complete tasks in focused intervals and watch your plant grow as you progress through sessions.',
};

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full">
      <AppNavbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">{children}</main>
        <AppFooter />
      </div>
    </main>
  );
};

export default MainLayout;
