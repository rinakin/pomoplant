'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// or lottie-react - depending on what library you use
interface LottiePlayerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  className?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ animationData, className }) => {
  console.log(animationData);
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
