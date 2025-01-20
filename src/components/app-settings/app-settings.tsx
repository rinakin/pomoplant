import React, { useState } from 'react';

import ChangeTheme from './change-theme';
import SessionSettings from './session-settings';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ChangeAlarm from './change-alarm';

import ThemeToggle from './theme-toggle';

interface AppSettingsProps {
  trigger: React.ReactNode;
  type: 'full' | 'session-only'; // 'full' for settings, 'session-only' for adding sessions
}

const AppSettings: React.FC<AppSettingsProps> = ({ trigger, type }) => {
  const [isOpen, setIsOpen] = useState(false); // state to control visibility of dialog

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-3xl">
        <DialogHeader className="my-4 flex w-full flex-row items-center justify-between">
          <DialogTitle className="flex flex-row items-center gap-2">
            {type === 'full' ? 'App Settings' : 'Add Sessions'}
          </DialogTitle>
          {type === 'full' && <ThemeToggle />}
        </DialogHeader>
        <div className="space-y-10">
          {type == 'full' && (
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:gap-8">
              <ChangeTheme />
              <ChangeAlarm />
            </div>
          )}
          <SessionSettings onSave={handleDialogClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppSettings;
