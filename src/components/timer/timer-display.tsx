'use client';

import React, { useEffect } from 'react';
import Container from '@/components/ui/container';
import fonts from '@/lib/fonts';
import useTimerStore from '@/stores/timer-store';
import useSessionStore from '@/stores/session-store';
import TimerControls from '@/components/timer/timer-controls';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

const TimerDisplay = () => {
  const { time, startTimer, status, pauseTimer, resetTimer, phase, updateTimeData } =
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
        time: activeSession.time,
        phase: activeSession.phase,
        initialTime: activeSession.time,
      });
    }
  }, [activeSession?.time, activeSession?.phase]);

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
                {`${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
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
