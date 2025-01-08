'use client';

import React from 'react';
import TimerDisplay from '@/components/timer/timer-display';
import TimerRoadmap from '@/components/timer/timer-roadmap';

const TimerContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <TimerRoadmap />
      <TimerDisplay />
    </div>
  );
};

export default TimerContainer;
