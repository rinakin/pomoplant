import React from 'react';
import { Timer, Pause, TimerReset, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { TimerStatus } from '@/types';

interface TimerControlsProps {
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  status: TimerStatus;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  startTimer,
  pauseTimer,
  resetTimer,
  status,
}) => {
  const renderControls = () => {
    switch (status) {
      case 'inactive':
      case 'complete':
        return (
          <Button onClick={startTimer}>
            <Timer />
            Start Timer
          </Button>
        );
      case 'active':
      case 'paused':
        return (
          <>
            <Button onClick={status === 'paused' ? startTimer : pauseTimer}>
              {status === 'paused' ? (
                <>
                  <Play />
                  Play
                </>
              ) : (
                <>
                  <Pause />
                  Pause
                </>
              )}
            </Button>
            <Button onClick={resetTimer} variant="secondary">
              <TimerReset />
              Reset
            </Button>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex w-full items-center justify-center gap-4 rounded-md font-bold text-card-foreground">
      {renderControls()}
    </div>
  );
};

export default TimerControls;
