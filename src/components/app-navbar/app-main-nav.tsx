'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import AppSettings from '@/components/app-settings/app-settings';

const AppMainNav = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Button variant={'ghost'}>How it works</Button>
      <AppSettings />
    </div>
  );
};

export default AppMainNav;
