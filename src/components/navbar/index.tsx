import React from 'react';
import Link from 'next/link';
import { Leaf } from 'lucide-react';

import Kofi from '@/assets/socials/kofi.svg';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = async () => {
  return (
    <header className="relative py-4">
      <Container className="flex items-center justify-between">
        <Link
          href={'/'}
          className="flex cursor-pointer flex-row items-center gap-1 text-xl font-bold text-[#1e4d3a]"
        >
          <Leaf size={18} className={'stroke-[#274754]'} fill="#2f7b5d" />
          Pomoplant
        </Link>
        <Button variant={'outline'}>
          <Image alt="Ko-Fi logo" src={Kofi} style={{ objectFit: 'contain', width: '18px' }} />
          Support me
        </Button>
      </Container>
    </header>
  );
};

export default Navbar;
