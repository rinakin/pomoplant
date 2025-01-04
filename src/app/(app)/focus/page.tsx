import React from 'react';
import TimerContainer from '@/components/timer/timer-container';
import TasksContainer from '@/components/tasks/tasks-container';

const FocusPage = () => {
  return (
    <section className="space-y-4 py-4">
      <TimerContainer />
      <TasksContainer />
    </section>
  );
};

export default FocusPage;
