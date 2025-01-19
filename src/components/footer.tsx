import React from 'react';
import Container from '@/components/ui/container';
import SocialsList from '@/components/ui/socials-list';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="mb-auto bg-[#c2c9b6]">
      <Container className="space-y-4 py-6">
        <div className="flex w-full flex-col items-center justify-center">
          <SocialsList />
          <Separator className="bg-[#c2c9b6]" />
          <span className="mt-6 text-xs">© 2025 Pomoplant by Rinakin. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
