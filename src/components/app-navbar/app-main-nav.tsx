'use client';
import { Palette } from 'lucide-react';

import React from 'react';
import { Button } from '../ui/button';

const AppMainNav = () => {
  return (
    <div>
      <Button className="rounded-lg">
        <Palette />
      </Button>
    </div>
  );
};

export default AppMainNav;
