'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import LoadingSpinner from '@/components/ui/loading';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottiePlayerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  className?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ animationData, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleDOMReady = () => {
    setIsLoading(false);
    console.log('DOM is ready for the animation.');
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <Lottie
        animationData={animationData}
        autoPlay
        loop
        className={cn(`max-w-[350px]`, className)}
        onDOMLoaded={handleDOMReady}
      />
    </div>
  );
};

export default LottiePlayer;
