import React from 'react';
import Link from 'next/link';
import { AlarmClock } from 'lucide-react';

import TaskVector from '@/assets/vectors/task-vector.svg';
import CustomFlowVector from '@/assets/vectors/customize-flow-vector.svg';
import ThemeVector from '@/assets/vectors/custom-theme-vector.svg';
import PlantGrowVector from '@/assets/vectors/plant-grow-vector.svg';

import AppFeatureCard from './app-feature-card';
import { Button } from '@/components/ui/button';

const AppFeatures = () => {
  return (
    <article>
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-gray-700">App Features</h3>
        <p className="text-gray-700">
          Explore the unique features that set this app apart and enhance your experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <AppFeatureCard
          iconBackgroundColor="bg-[#d1e6f7]"
          title="Create Your Perfect Pomodoro Flow"
          description="Customize session durations, break times, and more, ensuring every session is aligned with your personal rhythm."
          icon={CustomFlowVector}
        />
        <AppFeatureCard
          iconBackgroundColor="bg-[#FFF0D1]"
          title="Stay on Track with Tasks"
          description="Add, manage, and check off your to-dos to stay organized and productive throughout your focus time."
          icon={TaskVector}
        />
        <AppFeatureCard
          iconBackgroundColor="bg-[#f3d8c7]"
          title="Personalize Your App Experience"
          description="Choose from a wide range of theme palettes to make the app truly yours, creating a more enjoyable and motivating workspace."
          icon={ThemeVector}
        />

        <AppFeatureCard
          iconBackgroundColor="bg-[#e2f0d9]"
          title="Watch Your Plant Thrive"
          description="The more you focus, the more your plant flourishes, giving you a rewarding visual representation of your productivity."
          icon={PlantGrowVector}
        />
      </div>
      <div className="mt-16 flex justify-center">
        <Link href={'/focus'}>
          <Button
            size={'lg'}
            className="flex w-full items-center gap-2 bg-[#274754] text-white hover:bg-[#274754]/80 md:w-auto"
            aria-label="Start a focus session"
          >
            <AlarmClock />
            Start Focusing Now
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default AppFeatures;
