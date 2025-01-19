'use client';
import React from 'react';
import { Settings } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import AppSettings from '@/components/app-settings/app-settings';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import KoFi from '@/assets/socials/kofi.svg';

const AppMainNav = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={'icon'}
              variant="ghost"
              onClick={() => window.open('https://ko-fi.com', '_blank')}
            >
              <Image src={KoFi} alt="Ko-Fi icon" style={{ objectFit: 'contain', width: '24px' }} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Support me on Ko-Fi</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AppSettings type="full" trigger={<Settings className="cursor-pointer" />} />
    </div>
  );
};

export default AppMainNav;
