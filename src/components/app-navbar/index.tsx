import React from 'react';
import { Sprout } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/ui/container';
import AppMainNav from './app-main-nav';

const AppNavbar = () => {
  return (
    <header className="relative py-4">
      <Container className="flex items-center justify-between">
        <Link href={'/'} className="cursor-pointer rounded-full bg-primary p-1 text-xl font-bold">
          <Sprout size={24} className="text-primary-foreground" />
        </Link>
        <AppMainNav />
      </Container>
    </header>
  );
};

export default AppNavbar;
