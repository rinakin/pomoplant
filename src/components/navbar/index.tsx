import React from 'react';

import Container from '@/components/ui/container';
import MainNav from './main-nav';

;

const Navbar = async () => {
  return (
    <header className="relative  bg-[#eff2d8] py-4 ">
      <Container className='flex items-center justify-between'>
        <div className='text-2xl text-gray-800 font-bold cursor-pointer'>Pomoloop</div>
        <MainNav/>
      </Container>
    </header>
  );
};

export default Navbar;