import React from 'react';

import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HowItWorks from '@/components/how-it-works.tsx';
import LearnMore from '@/components/learn-more';

const HomePage = () => {
  return (
    <div className="bg-[#f2f5e0]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default HomePage;
