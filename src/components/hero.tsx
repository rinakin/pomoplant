import React from 'react';
import Container from '@/components/ui/container';
import LottiePlayer from '@/components/ui/lottie-player';

import StopwatchAnimation from '@/assets/lottie/hero-lottie.json';
import { AlarmClock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#eff2d8] pb-32 md:min-h-[90vh] md:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <LottiePlayer
            animationData={StopwatchAnimation}
            className="md:order-2 md:w-1/2 md:max-w-[525px]"
          />
          <div className="md:order-1 md:w-1/2">
            <h1 className="mb-4 text-3xl font-extrabold text-[#773f1a] lg:text-4xl">
              Maximize Your Productivity with Timed Focus.
            </h1>
            <p className="text-gray-700">
              Boost your productivity by working in focused intervals with the Pomodoro Technique.
              Balance intense work sessions with restorative breaks for a more efficient workflow.
            </p>
            <p className="mb-2 mt-6 text-sm text-gray-500">
              Start focusing instantly, no sign-up needed!
            </p>
            <div className="flex flex-row gap-6">
              <Button
                size={'lg'}
                className="flex items-center gap-2 bg-[#264653] text-white transition duration-200 hover:bg-[#1e3b46]"
              >
                <AlarmClock size={32} />
                Start Focusing
              </Button>
              <Button
                size={'lg'}
                className="border-[2px] border-[#264653] bg-[#f0f3dc] text-gray-700 transition duration-200 hover:bg-[#e5e9c9]"
              >
                How it works
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
