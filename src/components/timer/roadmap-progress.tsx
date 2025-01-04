import React from 'react';
import { cn } from '@/lib/utils';

interface RoadmapProgressProps {
  completed: boolean;
}

const RoadmapProgress: React.FC<RoadmapProgressProps> = ({ completed }) => {
  return (
    <div
      className={cn(
        `mx-1 h-[2px] w-full max-w-28 rounded-full bg-primary/30 transition-all duration-200 ease-in-out`,
        {
          'h-[3px] bg-primary/80': completed,
        },
      )}
    />
  );
};

export default RoadmapProgress;
