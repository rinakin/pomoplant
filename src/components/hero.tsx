'use client';
import React from 'react';
import { AlarmClock, Leaf } from 'lucide-react';
import Link from 'next/link';

import Container from '@/components/ui/container';
import LottiePlayer from '@/components/ui/lottie-player';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pb-32 md:min-h-[90vh] md:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <LottiePlayer
            aria-label="A stopwatch animation illustrating productivity with the Pomodoro Technique"
            animationData={require('@/assets/lottie/stopwatch-lottie.json')}
            className="md:order-2 md:max-w-[525px]"
          />
          <div className="text-center md:order-1 md:text-start">
            <h1 className="mb-4 text-3xl font-extrabold text-[#773f1a] lg:text-4xl">
              Maximize Your Productivity with Timed Focus.
            </h1>
            <div className="mb-4 flex flex-row items-center justify-center gap-6 md:justify-start">
              <Leaf size={32} fill="#2f7b5d" />
              <Leaf size={32} fill="#2f7b5d" />
            </div>
            <p className="text-gray-700">
              Boost your productivity by working in focused intervals with the Pomodoro Technique.
              Balance intense work sessions with restorative breaks for a more efficient workflow.
            </p>
            <p className="mb-4 mt-8 text-sm text-gray-600">
              Start focusing instantly, no sign-up needed!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 min-[420px]:flex-row md:justify-start md:gap-6">
              <Link href={'/focus'} className="w-full md:w-48">
                <Button
                  size={'lg'}
                  className="flex w-full items-center gap-2"
                  aria-label="Start a focus session"
                >
                  <AlarmClock />
                  Start Focusing
                </Button>
              </Link>
              <Link href={'/'} className="w-full md:w-48">
                <Button
                  size={'lg'}
                  variant={'secondary'}
                  className="w-full border-[2px] border-primary bg-[#f7f9ec] text-gray-700 hover:bg-[#e2e6d7]"
                  aria-label="Learn how the Pomodoro technique works"
                >
                  How it works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
