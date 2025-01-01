import React from 'react';
import Container from '@/components/ui/container';

const AppNavbar = () => {
  return (
    <header className="relative py-4">
      <Container className="flex items-center justify-between">
        <div className="cursor-pointer text-xl font-bold text-[#1e4d3a]">Pomoloop</div>
      </Container>
    </header>
  );
};

export default AppNavbar;
