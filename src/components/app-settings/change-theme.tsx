'use client';
import React from 'react';
import SettingsHeader from './settings-header';
import { useTheme } from 'next-themes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { THEMES } from '@/lib/themes';
const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  const onClick = (theme: string) => {
    console.log(theme);
    setTheme(() => theme);
  };
  return (
    <div className="flex flex-row items-center gap-4">
      <SettingsHeader title="Theme:" />

      <Select onValueChange={onClick} defaultValue={theme}>
        <SelectTrigger className="w-full sm:w-[180px]">
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
