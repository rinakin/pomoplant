import React from 'react';

import Container from '@/components/ui/container';
import AppMainNav from './app-main-nav';
import Link from 'next/link';

const AppNavbar = () => {
  return (
    <header className="relative py-4">
      <Container className="flex items-center justify-between">
        <Link href={'/'} className="cursor-pointer text-xl font-bold">
          Pomoplant
        </Link>
        <AppMainNav />
      </Container>
    </header>
  );
};

export default AppNavbar;
