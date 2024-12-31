import React from 'react';
import Container from '@/components/ui/container';

const Footer = () => {
  return (
    <footer className="mb-auto bg-[#1e3b46]">
      <Container>
        <div className="flex h-16 w-full items-center justify-center text-xs text-neutral-400">
          <span>&#xa9; 2024, Pomoloop</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
