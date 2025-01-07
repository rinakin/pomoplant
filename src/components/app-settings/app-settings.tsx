import React, { useState } from 'react';
import { Settings } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';

import ChangeTheme from './change-theme';
import SessionSettings from './session-settings';

const AppSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Settings />
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex flex-row items-center gap-2">App Settings</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <ChangeTheme />
        <SessionSettings onSave={handleDialogClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AppSettings;
