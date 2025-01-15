import React from 'react';
import { motion } from 'framer-motion';

import { Task } from '@/types/types';

import TaskItem from './task-item';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  // Return an empty state message if there are no tasks
  if (tasks.length === 0) {
    return (
      <div className="mx-auto space-y-4 text-center">
        <span className="text-muted-foreground">Your task list is empty</span>
      </div>
    );
  }

  // Sort tasks to display pending tasks at the top
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {sortedTasks.map((item) => (
        <motion.div key={item.id} layoutId={item.id} transition={{ duration: 0.3 }}>
          <TaskItem task={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default TaskList;
