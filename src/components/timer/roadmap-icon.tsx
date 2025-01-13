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
          `flex aspect-square h-8 w-8 rounded-full border-[2px] border-primary bg-muted p-2 text-muted-foreground transition-all duration-200 min-[440px]:h-10 min-[440px]:w-10 [&_svg]:h-[16px] [&_svg]:w-[16px] min-[440px]:[&_svg]:h-[20px] min-[440px]:[&_svg]:w-[20px]`,
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
