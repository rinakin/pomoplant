import React from 'react';

import Container from '@/components/ui/container';
import MainNav from './main-nav';

const Navbar = async () => {
  return (
    <header className="relative py-4">
      <Container className="flex items-center justify-between">
        <div className="cursor-pointer text-2xl font-bold text-[#1e4d3a]">Pomoloop</div>
        <MainNav />
      </Container>
    </header>
  );
};

export default Navbar;
