'use client';

import React from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Github from '@/assets/socials/github.svg';
import Kofi from '@/assets/socials/kofi.svg';
import Linkedin from '@/assets/socials/linkedin.svg';

const SocialsList = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        size={'icon'}
        variant={'ghost'}
        onClick={() => window.open('https://github.com/schan610', '_blank')}
      >
        <Image alt="Github logo" src={Github} style={{ objectFit: 'contain', width: '20px' }} />
      </Button>{' '}
      <Button
        size={'icon'}
        variant={'ghost'}
        onClick={() => window.open('https://www.linkedin.com/in/sabrinachan-cs/', '_blank')}
      >
        <Image alt="LinkedIn logo" src={Linkedin} style={{ objectFit: 'contain', width: '20px' }} />
      </Button>
      <Button
        size={'icon'}
        variant={'ghost'}
        onClick={() => window.open('https://ko-fi.com', '_blank')}
      >
        <Image alt="Ko-Fi logo" src={Kofi} style={{ objectFit: 'contain', width: '20px' }} />
      </Button>
    </div>
  );
};

export default SocialsList;
