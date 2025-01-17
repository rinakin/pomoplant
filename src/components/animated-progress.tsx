import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import Lottie, { LottieRefCurrentProps, LottieComponentProps } from 'lottie-react';
import useTimerStore from '@/stores/timer-store';
import useSessionStore from '@/stores/session-store';
import { cn } from '@/lib/utils';
import { PlantData } from '@/types/types';

interface AnimatedProgressProps extends LottieComponentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  plantData: PlantData;
}

const AnimatedProgress: React.FC<AnimatedProgressProps> = ({
  plantData,
  animationData,
  ...lottieProps
}) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const { status, elapsedTime } = useTimerStore();
  const { sessions, activeSessionIndex, allSessionsCompleted } = useSessionStore();

  // Calculate the total duration (in seconds) of all sessions combined
  const totalTime = useMemo(() => {
    return sessions.reduce((acc, session) => acc + session.minutes * 60 + session.seconds, 0);
  }, [sessions]);

  // Determine the proportion of totalTime that each session represents
  const sessionProportions = useMemo(() => {
    return sessions.map((item) => {
      const sessionTimeInSeconds = item.minutes * 60 + item.seconds;
      return sessionTimeInSeconds / totalTime; // Percentage of total time
    });
  }, [sessions, totalTime]);

  // Sync the animation's frame and speed with the current session's progress
  const updateInitialFrame = useCallback(() => {
    if (!lottieRef.current || !sessions.length || activeSessionIndex >= sessions.length) return;
    let totalFrames = lottieRef.current.getDuration(true);
    const animationDuration = lottieRef.current.getDuration(false);
    const currentSession = sessions[activeSessionIndex];
    if (!totalFrames || !animationDuration || !currentSession) return;
    totalFrames = totalFrames - 1; // Align with 0-based frame indexing for accuracy

    // // Handle the case where all sessions are completed to ensure animation is complete
    if (allSessionsCompleted) {
      lottieRef.current.goToAndStop(totalFrames, true); // Stay at the last frame
      return;
    }

    // Ensure the animation speed matches the session timer duration
    const fps = totalFrames / animationDuration;
    const sessionFrames = totalFrames * sessionProportions[activeSessionIndex];
    const sessionDuration = currentSession.minutes * 60 + currentSession.seconds;
    const speed = sessionFrames / (sessionDuration * fps);

    // Determine the starting frame based on completed session progress
    const completedProgress = sessionProportions
      .slice(0, activeSessionIndex)
      .reduce((acc, percentage) => acc + percentage, 0);
    const frameToSet = completedProgress * totalFrames;

    lottieRef.current.setSpeed(speed);
    lottieRef.current.goToAndStop(frameToSet, true);
  }, [lottieRef, sessions, activeSessionIndex, sessionProportions, allSessionsCompleted]);

  // Adjust animation state when timer progress or status changes
  useEffect(() => {
    if (!lottieRef.current) return;
    if (elapsedTime === 0) {
      updateInitialFrame(); // Reset to the starting frame if the timer resets
    }
    if (status === 'inactive' || status === 'paused') {
      lottieRef.current.pause();
    } else {
      lottieRef.current.play();
    }
  }, [elapsedTime, status, updateInitialFrame]);

  // Update animation frame and speed when transitioning to a new session
  useEffect(() => {
    updateInitialFrame();
  }, [activeSessionIndex, updateInitialFrame]);

  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        autoPlay={false}
        loop={false}
        animationData={animationData}
        className={cn('max-w-[450px]', lottieProps.className)}
        {...lottieProps}
        aria-label="Session progress animation" // Descriptive label
      />
    </div>
  );
};

export default AnimatedProgress;
