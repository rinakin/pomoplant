'use client';
import React from 'react';
import { Settings } from 'lucide-react';

import { Button } from '@/components/ui/button';
import AppSettings from '@/components/app-settings/app-settings';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Kofi from '@/assets/socials/kofi.svg';

const AppMainNav = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label="Open Ko-Fi to support me"
              className="[&_svg]:size-6"
              size={'icon'}
              variant="ghost"
              asChild
            >
              <a
                href="https://ko-fi.com/rinakin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Support me on Ko-Fi"
              >
                <Kofi />
              </a>
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
