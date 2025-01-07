import React from 'react';
import AppNavbar from '@/components/app-navbar';
import Footer from '@/components/footer';
import AppFooter from '@/components/app-footer';

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
