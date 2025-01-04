import React from 'react';
import Container from '@/components/ui/container';
import AppMainNav from './app-main-nav';

const AppNavbar = () => {
  return (
    <header className="relative py-4">
      <Container className="flex items-center justify-between">
        <div className="cursor-pointer text-xl font-bold">Pomoloop</div>
        <AppMainNav />
      </Container>
    </header>
  );
};

export default AppNavbar;
