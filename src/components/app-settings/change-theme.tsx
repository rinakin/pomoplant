'use client';
import React, { useEffect } from 'react';
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
import useSessionStore from '@/stores/session-store';

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  const { darkMode } = useSessionStore();

  // Ensure a default theme is set on mount
  useEffect(() => {
    if (!theme) {
      setTheme(darkMode ? 'defaultDark' : 'default');
    }
  }, [theme, darkMode, setTheme]);

  const defaultValue = theme?.replace('Dark', '') || 'default';

  const onClick = (theme: string) => {
    if (darkMode) {
      setTheme(`${theme}Dark`);
    } else {
      setTheme(theme);
    }
  };

  return (
    <div className="flex w-full flex-row items-center gap-2">
      <SettingsHeader title="Theme:" />
      <Select onValueChange={onClick} defaultValue={defaultValue}>
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
