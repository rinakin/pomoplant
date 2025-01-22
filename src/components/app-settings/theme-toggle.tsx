'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useSessionStore from '@/stores/session-store';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { darkMode, setDarkMode } = useSessionStore();

  const toggleThemeMode = () => {
    if (theme?.endsWith('Dark')) {
      setTheme(theme.replace('Dark', ''));
    } else {
      setTheme(`${theme}Dark`);
    }
    setDarkMode();
  };

  return (
    <Button size={'icon'} onClick={toggleThemeMode}>
      {darkMode ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggle;
