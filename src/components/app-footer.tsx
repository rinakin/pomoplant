import React from 'react';
import Container from '@/components/ui/container';

const AppFooter = () => {
  return (
    <footer className="mb-auto border-t-[1px]">
      <Container>
        <div className="flex h-16 w-full items-center justify-center text-xs">
          <span>&#xa9; 2024, Pomoloop</span>
        </div>
      </Container>
    </footer>
  );
};

export default AppFooter;
