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
        asChild
        className={cn('hover:bg-[#9cad85] [&_svg]:size-6', { 'hover:bg-accent': isFocus })}
        size={'icon'}
        variant={'ghost'}
      >
        <a
          href="https://github.com/schan610"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My Github"
        >
          <Github className={cn({ 'fill-current': isFocus })} />
        </a>
      </Button>

      <Button
        asChild
        className={cn('hover:bg-[#9cad85] [&_svg]:size-6', { 'hover:bg-accent': isFocus })}
        size={'icon'}
        variant={'ghost'}
      >
        <a
          href="https://www.linkedin.com/in/sabrinachan-cs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find me on Linkedin"
        >
          <Linkedin className={cn({ 'fill-current': isFocus })} />
        </a>
      </Button>
      <Button
        asChild
        className={cn('hover:bg-[#9cad85] [&_svg]:size-6', { 'hover:bg-accent': isFocus })}
        size={'icon'}
        variant={'ghost'}
        onClick={() => window.open('https://ko-fi.com', '_blank')}
      >
        <a
          href="https://ko-fi.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Support me on Ko-Fi"
        >
          <Kofi className={cn({ 'fill-current': isFocus })} />
        </a>
      </Button>
    </div>
  );
};

export default SocialsList;
