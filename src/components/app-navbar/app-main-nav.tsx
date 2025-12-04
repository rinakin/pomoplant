'use client';
import React from 'react';
import { Settings } from 'lucide-react';

import AppSettings from '@/components/app-settings/app-settings';

const AppMainNav = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <AppSettings type="full" trigger={<Settings className="cursor-pointer" />} />
    </div>
  );
};

export default AppMainNav;
