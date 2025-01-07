'use client';

import React, { useEffect } from 'react';
import Container from '@/components/ui/container';
import fonts from '@/lib/fonts';
import useTimerStore from '@/stores/timer-store';
import useSessionStore from '@/stores/session-store';
import TimerControls from '@/components/timer/timer-controls';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

const TimerDisplay = () => {
  const { minutes, seconds, startTimer, status, pauseTimer, resetTimer, phase, updateTimeData } =
    useTimerStore();
  const { sessions, activeSessionIndex, setActiveSession, allSessionsCompleted, resetSessions } =
    useSessionStore();
  const activeSession = sessions[activeSessionIndex];

  useEffect(() => {
    if (status === 'complete') {
      setActiveSession();
    }
  }, [status]);

  useEffect(() => {
    if (activeSession) {
      updateTimeData({
        minutes: activeSession.minutes,
        seconds: activeSession.seconds,
        phase: activeSession.phase,
        initialMinutes: activeSession.minutes,
        initialSeconds: activeSession.seconds,
        status: 'inactive',
      });
    }
  }, [activeSession]);

  return (
    <div className="w-full">
      <Container>
        <Card>
          <CardHeader />
          <CardContent className="flex w-full flex-col items-center justify-center gap-8">
            <div className="flex aspect-square items-center justify-center rounded-full border-[10px] border-primary bg-timer p-10 md:p-14">
              <div
                className={`text-5xl font-bold text-timer-foreground ${fonts.robotoMono.className} min-[450px]:text-6xl lg:text-7xl`}
              >
                {!allSessionsCompleted
                  ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                  : '00:00'}
              </div>
            </div>
            <TimerControls
              startTimer={startTimer}
              pauseTimer={pauseTimer}
              resetTimer={resetTimer}
              status={status}
              allSessionsCompleted={allSessionsCompleted}
              resetSessions={resetSessions}
            />
          </CardContent>
          <CardFooter className="flex items-center justify-start">
            {!allSessionsCompleted && (
              <p className="rounded-full bg-muted px-4 py-1 text-lg font-medium md:px-6 md:text-2xl">
                {phase}
              </p>
            )}
            {allSessionsCompleted && (
              <p className="rounded-full bg-muted px-4 py-1 text-lg font-medium md:px-6 md:text-2xl">
                finished
              </p>
            )}
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};
export default TimerDisplay;
