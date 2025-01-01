import React from 'react';
import AppNavbar from '@/components/app-navbar';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <AppNavbar />
      {children}
    </div>
  );
};

export default MainLayout;
