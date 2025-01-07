'use client';

import React, { useEffect } from 'react';
import TimerContainer from '@/components/timer/timer-container';
import TasksContainer from '@/components/tasks/tasks-container';
import { useTheme } from 'next-themes';

const FocusPage = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme('default');
  }, []);
  return (
    <section className="space-y-4 py-4">
      <TimerContainer />
      <TasksContainer />
    </section>
  );
};

export default FocusPage;
