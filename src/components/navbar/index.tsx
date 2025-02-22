import React from 'react';
import Link from 'next/link';
import { Leaf } from 'lucide-react';

import Kofi from '@/assets/socials/kofi.svg';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';

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
        <Button
          asChild
          variant={'outline'}
          className="border-[#afaa93] bg-[#f9faf0] text-[#4a5568] hover:bg-[#9cad85] hover:text-[#29303d]"
        >
          <a
            href="https://ko-fi.com/rinakin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support me on Ko-Fi"
          >
            <Kofi />
            Support me
          </a>
        </Button>
      </Container>
    </header>
  );
};

export default Navbar;
