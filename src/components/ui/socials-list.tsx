'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Github from '@/assets/socials/github.svg';
import Kofi from '@/assets/socials/kofi.svg';
import Linkedin from '@/assets/socials/linkedin.svg';
import { usePathname } from 'next/navigation';

const SocialsList = () => {
  const pathname = usePathname();
  const isFocus = pathname === '/focus';
  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        className={cn('hover:bg-[#9cad85] [&_svg]:size-6', { 'hover:bg-accent': isFocus })}
        size={'icon'}
        variant={'ghost'}
        onClick={() => window.open('https://github.com/schan610', '_blank')}
      >
        <Github className={cn({ 'fill-current': isFocus })} />
      </Button>

      <Button
        className={cn('hover:bg-[#9cad85] [&_svg]:size-6', { 'hover:bg-accent': isFocus })}
        size={'icon'}
        variant={'ghost'}
        onClick={() => window.open('https://www.linkedin.com/in/sabrinachan-cs/', '_blank')}
      >
        <Linkedin className={cn({ 'fill-current': isFocus })} />
      </Button>
      <Button
        className={cn('hover:bg-[#9cad85] [&_svg]:size-6', { 'hover:bg-accent': isFocus })}
        size={'icon'}
        variant={'ghost'}
        onClick={() => window.open('https://ko-fi.com', '_blank')}
      >
        <Kofi className={cn({ 'fill-current': isFocus })} />
      </Button>
    </div>
  );
};

export default SocialsList;
