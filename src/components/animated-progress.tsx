import React, { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps, LottieComponentProps } from 'lottie-react';
import useTimerStore from '@/stores/timer-store';
import useSessionStore from '@/stores/session-store';
import { cn } from '@/lib/utils';

interface AnimatedProgressProps extends LottieComponentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
}

const AnimatedProgress: React.FC<AnimatedProgressProps> = ({ animationData, ...lottieProps }) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const { status } = useTimerStore();
  const { sessions } = useSessionStore();

  // Calculate the total session time in seconds
  const totalSessionTime = sessions.reduce((total, session) => {
    return total + session.minutes * 60 + session.seconds;
  }, 0);

  useEffect(() => {
    if (!lottieRef.current) return;
    const lottieDuration = lottieRef.current.getDuration();
    if (lottieDuration) {
      lottieRef.current.setSpeed(lottieDuration / totalSessionTime);
    }
  }, [totalSessionTime]);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (status === 'inactive' || status === 'paused') {
      lottieRef.current.pause();
    } else {
      lottieRef.current.play();
    }
  }, [status]);

  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        className={cn('max-w-[450px]')}
        {...lottieProps}
      />
    </div>
  );
};

export default AnimatedProgress;
