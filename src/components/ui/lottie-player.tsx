'use client';
import React, { useRef, useEffect } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { cn } from '@/lib/utils';

interface LottiePlayerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  className?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ animationData, className }) => {
  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
    return () => {
      animationInstance.current?.destroy();
    };
  }, [animationData]);
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);
  return <div ref={animationContainer} className={cn(`w-full max-w-[450px]`, className)} />;
};

export default LottiePlayer;
