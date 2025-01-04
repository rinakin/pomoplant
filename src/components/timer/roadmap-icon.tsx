import React from 'react';
import { NotebookPen, Coffee, AlarmClockCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      <Button
        size={'lg'}
        className={cn(
          `flex aspect-square cursor-pointer rounded-full border-[2px] border-primary bg-muted p-2 text-muted-foreground transition-all duration-200 [&_svg]:h-[18px] [&_svg]:w-[18px]`,
          {
            'scale-110 border-primary bg-timer text-timer-foreground': isActive,
            'border-primary bg-primary text-primary-foreground': completed,
          },
        )}
      >
        {renderIcon()}
      </Button>
    </>
  );
};

export default RoadmapIcon;
