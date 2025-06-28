import React from 'react';

import Footer from '@/components/footer';
import HowItWorks from '@/components/how-it-works.tsx';
import LearnMore from '@/components/learn-more';
import MobileWaitlist from '@/components/waitlist/mobile-waitlist';
import AppContainer from '@/components/app-container';

const HomePage = () => {
  return (
    <>
      <MobileWaitlist />
      <AppContainer />
      <div className="bg-[#f2f5e0]">
        <HowItWorks />
        <LearnMore />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
