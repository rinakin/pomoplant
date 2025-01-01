import Navbar from '@/components/navbar';
import React from 'react';

const StandardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default StandardLayout;
