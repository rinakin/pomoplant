'use client';
import React from 'react';
import { AlarmClock, Leaf } from 'lucide-react';
import Link from 'next/link';

import LottiePlayer from '@/components/ui/lottie-player';
import LottieAnimation from '@/assets/lottie/stopwatch-lottie.json';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pb-32 md:min-h-[100vh] md:py-32">
      <Container>
        <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between md:gap-4">
          <div className="flex h-[300px] w-[300px] items-center justify-center md:order-2 md:h-[500px] md:w-[500px]">
            <LottiePlayer
              aria-label="A stopwatch animation illustrating productivity with the Pomodoro Technique"
              animationData={LottieAnimation}
              className="max-w-[600px]"
            />
          </div>
          <div className="w-full text-center md:order-1 md:w-3/4 md:text-start">
            <h1 className="mb-4 text-3xl font-extrabold text-[#773f1a] lg:text-4xl">
              Maximize Your Productivity with Timed Focus.
            </h1>
            <div className="mb-4 flex flex-row items-center justify-center gap-6 md:justify-start">
              <Leaf size={32} className={'stroke-[#274754]'} fill="#2f7b5d" />
              <Leaf size={32} className={'stroke-[#274754]'} fill="#2f7b5d" />
            </div>
            <p className="text-gray-700">
              Customize your sessions, create your ideal workflow, and watch your virtual plant grow
              as you work through your focus intervals. Switch between themes to match your style,
              and stay motivated as you achieve your goals.
            </p>
            <p className="mb-4 mt-8 text-sm text-gray-600">
              Start focusing instantly, no sign-up needed!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 min-[420px]:flex-row md:justify-start md:gap-6">
              <Link href={'/focus'} className="w-full md:w-48">
                <Button
                  size={'lg'}
                  className="flex w-full items-center gap-2 bg-[#274754] text-white hover:bg-[#274754]/80"
                  aria-label="Start a focus session"
                >
                  <AlarmClock />
                  Start Focusing
                </Button>
              </Link>
              <a href={'#how-it-works'} className="w-full md:w-48">
                <Button
                  size={'lg'}
                  variant={'secondary'}
                  className="w-full border-[2px] border-[#274754] bg-[#f7f9ec] text-gray-700 hover:bg-[#e2e6d7]"
                  aria-label="Learn how the Pomodoro technique works"
                >
                  How it works
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
