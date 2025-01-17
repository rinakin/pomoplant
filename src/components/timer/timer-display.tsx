'use client';
import React, { useEffect } from 'react';

import fonts from '@/lib/fonts';
import useSessionStore from '@/stores/session-store';
import useTimerStore from '@/stores/timer-store';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import TimerControls from '@/components/timer/timer-controls';
import AppSettings from '@/components/app-settings/app-settings';
import AnimatedProgress from '@/components/animated-progress';
import useSoundEffect from '@/hooks/use-sound-effect';

const TimerDisplay = () => {
  const { minutes, seconds, startTimer, status, pauseTimer, resetTimer, phase, updateTimeData } =
    useTimerStore();
  const {
    sessions,
    activeSessionIndex,
    setActiveSession,
    allSessionsCompleted,
    resetSessions,
    alarm,
    plant,
  } = useSessionStore();
  const activeSession = sessions[activeSessionIndex];
  const audio = useSoundEffect({ src: alarm ? alarm?.value : '' });

  // Update active session when the timer completes
  useEffect(() => {
    if (status === 'complete') {
      if (audio && alarm) {
        audio.play();
      }
      setActiveSession(); // Move to the next session when complete
    }
  }, [status, setActiveSession, audio, alarm]);

  // Update timer data when a new active session is selected
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
  }, [activeSession, updateTimeData]);
  return (
    <div className="relative w-full">
      <Container>
        <Card>
          <CardHeader />
          <CardContent className="flex w-full flex-col items-center justify-center gap-8">
            {sessions.length !== 0 && (
              <>
                {plant && (
                  <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <AnimatedProgress plantData={plant} animationData={plant.animationData} />
                  </div>
                )}

                <div className="relative z-10 flex flex-col items-center justify-center gap-8">
                  <div className="relative z-10 flex aspect-square items-center justify-center rounded-full border-[10px] border-primary bg-timer/40 p-10 md:p-14">
                    <div
                      className={`text-5xl font-bold text-timer-foreground ${fonts.robotoMono.className} min-[450px]:text-6xl lg:text-7xl`}
                    >
                      {!allSessionsCompleted
                        ? `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                        : '00:00'}
                    </div>
                  </div>

                  {/* Timer Controls */}
                  <TimerControls
                    phase={phase}
                    startTimer={startTimer}
                    pauseTimer={pauseTimer}
                    resetTimer={resetTimer}
                    status={status}
                    allSessionsCompleted={allSessionsCompleted}
                    resetSessions={resetSessions}
                  />
                </div>
              </>
            )}

            {sessions.length == 0 && (
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-center text-lg text-muted-foreground">{`Begin your flow by adding focus or break sessions.`}</p>
                <AppSettings trigger={<Button>Add Sessions</Button>} type={'session-only'} />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex items-center justify-start">
            {sessions.length > 0 && (
              <p className="rounded-full bg-muted px-4 py-1 text-lg font-medium md:px-6 md:text-2xl">
                {allSessionsCompleted ? 'finished' : phase}
              </p>
            )}
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};
export default TimerDisplay;
