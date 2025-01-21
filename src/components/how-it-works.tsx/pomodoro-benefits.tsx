import React from 'react';

import { ScanHeart, TrendingUp, Clock, Sprout } from 'lucide-react';
import BenefitCard from './benefit-card';

const PomodoroBenefits = () => {
  return (
    <article>
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold text-gray-700">
          Benefits of the Pomodoro Technique
        </h3>
        <p className="text-gray-700">
          The Pomodoro technique breaks your work into focused intervals, followed by short breaks.
          This method helps maintain high productivity while keeping you refreshed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <BenefitCard
          icon={<Sprout size={20} stroke="#4b5563" />}
          title={'Improved Focus'}
          description="Stay concentrated for short bursts, boosting productivity."
        />
        <BenefitCard
          icon={<Clock size={20} stroke="#4b5563" />}
          title={'Time Management'}
          description="Manage your tasks efficiently with clear work intervals."
        />
        <BenefitCard
          icon={<ScanHeart size={20} stroke="#4b5563" />}
          title={'Reduced Burnout'}
          description="Frequent breaks help prevent mental fatigue."
        />
        <BenefitCard
          icon={<TrendingUp size={20} stroke="#4b5563" />}
          title={'Increased Productivity'}
          description="Breaks allow you to return to work feeling refreshed."
        />
      </div>
    </article>
  );
};

export default PomodoroBenefits;
