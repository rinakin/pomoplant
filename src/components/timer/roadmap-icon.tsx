import React from 'react';
import { NotebookPen, Coffee, AlarmClockCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapIconProps {
  phase: string;
  completed: boolean;
  isActive: boolean;
}
const RoadmapIcon: React.FC<RoadmapIconProps> = ({ phase, completed, isActive }) => {
  const renderIcon = () => {
    if (completed) return <AlarmClockCheck />;
    else if (phase === 'focus') return <NotebookPen />;
    else if (phase === 'break') return <Coffee />;
  };
  return (
    <>
      <div
        className={cn(
          `flex aspect-square h-9 w-9 items-center justify-center rounded-full border-[2px] border-primary bg-muted p-2 text-muted-foreground transition-all duration-200 sm:h-10 sm:w-10`,
          {
            'scale-110 border-primary bg-timer text-timer-foreground': isActive,
            'border-primary bg-primary text-primary-foreground': completed,
          },
        )}
      >
        {renderIcon()}
      </div>
    </>
  );
};

export default RoadmapIcon;
