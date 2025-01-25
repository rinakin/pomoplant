'use client';
import React, { useEffect } from 'react';

import fonts from '@/lib/fonts';
import useSessionStore from '@/stores/session-store';
import useTimerStore from '@/stores/timer-store';
import { cn } from '@/lib/utils';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import TimerControls from '@/components/timer/timer-controls';
import AppSettings from '@/components/app-settings/app-settings';
import AnimatedProgress from '@/components/animated-progress';
import useSoundEffect from '@/hooks/use-sound-effect';
import useWakeLock from '@/hooks/use-wake-lock';

const TimerDisplay = () => {
  const { request, release, released, type, isSupported } = useWakeLock();
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

  // Wake Lock API handler
  useEffect(() => {
    if (status === `active` && isSupported && !type) {
      request();
    } else if (status !== 'active' && !released && type) {
      release();
    }
  }, [status, isSupported, released, type, release, request]);

  // Update timer or active session when the status changes
  useEffect(() => {
    if (status === 'paused') {
      pauseTimer();
    } else if (status === 'inactive') {
      resetTimer();
    } else if (status === 'complete') {
      if (audio?.src && alarm?.value) {
        audio.muted = false;
        audio.play();
      }
      setActiveSession(); // Move to the next session when complete
    }
  }, [status, setActiveSession, audio, alarm, pauseTimer, resetTimer]);

  const handleStartTimer = () => {
    if (audio) {
      audio.muted = true;
      audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
    startTimer();
  };

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
    <div className="w-full">
      <Container>
        <Card>
          <CardHeader />
          <CardContent className="relative flex w-full flex-col items-center justify-center gap-8">
            {sessions.length !== 0 && (
              <>
                {plant && (
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <AnimatedProgress plantData={plant} animationData={plant.animationData} />
                  </div>
                )}

                <div className="z-10 flex flex-col items-center justify-center gap-8">
                  <div
                    className={cn(
                      `z-10 flex aspect-square items-center justify-center rounded-full border-[10px] border-primary/90 bg-background/40 p-10 opacity-100 transition-all duration-200 ease-in md:p-14`,
                      { 'opacity-0': allSessionsCompleted },
                    )}
                  >
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
                    startTimer={handleStartTimer}
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
          <CardFooter className="flex items-center justify-between p-4 md:p-6">
            {sessions.length > 0 && (
              <p className="rounded-full bg-muted px-4 py-1 text-lg font-medium md:px-6 md:text-2xl">
                {allSessionsCompleted ? 'finished' : phase}
              </p>
            )}
            {!allSessionsCompleted && sessions.length !== 0 && (
              <Button
                onClick={() => {
                  resetTimer();
                  resetSessions();
                }}
                variant={'ghost'}
              >
                Restart Sessions
              </Button>
            )}
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
};
export default TimerDisplay;
