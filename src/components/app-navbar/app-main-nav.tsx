'use client';
import { Palette, Settings } from 'lucide-react';

import React from 'react';
import { Button } from '../ui/button';

const AppMainNav = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button variant={'ghost'}>How it works</Button>
      <Button className="rounded-lg">
        <Settings />
      </Button>
    </div>
  );
};

export default AppMainNav;
