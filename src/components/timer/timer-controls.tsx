import React from 'react';
import { Timer, Pause, TimerReset, Play } from 'lucide-react';

import { TimerStatus } from '@/types/types';

import { Button } from '@/components/ui/button';
import { capitalizeFirstLetter } from '@/lib/utils';

interface TimerControlsProps {
  phase: string;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  resetSessions: () => void;
  status: TimerStatus;
  allSessionsCompleted: boolean;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  phase,
  startTimer,
  pauseTimer,
  resetTimer,
  status,
  allSessionsCompleted,
  resetSessions,
}) => {
  const renderControls = () => {
    switch (status) {
      case 'inactive':
        return (
          <Button onClick={startTimer}>
            <Timer />
            {`Start ${capitalizeFirstLetter(phase)} Timer`}
          </Button>
        );
      case 'active':
      case 'paused':
        return (
          <>
            <Button variant="secondary" onClick={status === 'paused' ? startTimer : pauseTimer}>
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
            <Button onClick={resetTimer} variant={'ghost'}>
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
      {!allSessionsCompleted && renderControls()}
      {allSessionsCompleted && <Button onClick={resetSessions}>Restart Sessions</Button>}
    </div>
  );
};

export default TimerControls;
