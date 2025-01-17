'use client';
import React from 'react';
import { useTheme } from 'next-themes';

import { THEMES } from '@/lib/themes';

import SettingsHeader from './settings-header';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ChangeThemeProps {
  handleDialogClose: () => void;
}

const ChangeTheme: React.FC<ChangeThemeProps> = ({ handleDialogClose }) => {
  const { theme, setTheme } = useTheme();

  const onClick = (theme: string) => {
    setTheme(() => theme);
    handleDialogClose();
  };

  return (
    <div className="flex w-full flex-row items-center gap-2">
      <SettingsHeader title="Theme:" />
      <Select onValueChange={onClick} defaultValue={theme}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {THEMES.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChangeTheme;
