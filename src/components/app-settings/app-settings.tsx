import React, { useState } from 'react';

import ChangeTheme from './change-theme';
import SessionSettings from './session-settings';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';

interface AppSettingsProps {
  trigger: React.ReactNode;
  type: 'full' | 'session-only'; // 'full' for settings, 'session-only' for adding sessions
}

const AppSettings: React.FC<AppSettingsProps> = ({ trigger, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex flex-row items-center gap-2">
            {type === 'full' ? 'App Settings' : 'Add Sessions'}
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        {type == 'full' && <ChangeTheme handleDialogClose={handleDialogClose} />}
        <SessionSettings onSave={handleDialogClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AppSettings;
