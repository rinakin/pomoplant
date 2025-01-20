'use client';
import React from 'react';
import Lottie from 'lottie-react';
import { cn } from '@/lib/utils';

interface LottiePlayerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  className?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ animationData, className }) => {
  return (
    <Lottie
      animationData={animationData}
      autoPlay={true}
      loop={true}
      className={cn(`max-w-[350px]`, className)}
    />
  );
};

export default LottiePlayer;
