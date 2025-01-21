import React from 'react';

import Container from '@/components/ui/container';
import PomodoroBenefits from './pomodoro-benefits';
import AppFeatures from './app-features';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="min-h-[100vh] bg-[#e8ebd3] py-16">
      <Container>
        <h2 className="mb-8 text-center text-4xl font-bold text-[#643516]">How It Works</h2>
        <div className="space-y-24">
          <PomodoroBenefits />
          <AppFeatures />
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
