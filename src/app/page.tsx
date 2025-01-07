import React from 'react';

import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const HomePage = () => {
  return (
    <div className="bg-[#f2f5e0]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
