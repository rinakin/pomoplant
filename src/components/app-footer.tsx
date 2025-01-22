import React from 'react';

import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import SocialsList from '@/components/ui/socials-list';

const AppFooter = () => {
  return (
    <footer className="mb-auto bg-muted">
      <Container className="space-y-4 py-6 text-muted-foreground">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm">Special Thanks:</p>
          <ul className="flex flex-col flex-wrap items-center justify-center space-x-3 text-start text-sm min-[405px]:flex-row">
            <li className="text-sm">
              <a
                href="https://www.zapsplat.com"
                target="_blank"
                className="underline"
                aria-label="Zapsplat"
              >
                Zapsplat
              </a>{' '}
              - alarm sounds
            </li>
            <div>♥</div>
            <li className="text-sm">
              <a
                href="https://www.figma.com/design/OfRafdHUVDHv2IU8XbF52V/Quinzy---15-Simple-Houseplant-Elements-(Community)?node-id=1-3&p=f&t=kil8GsD33MKmDeyJ-0"
                target="_blank"
                className="underline"
              >
                Quinzy
              </a>{' '}
              - plant vectors
            </li>
            <div>♥</div>
            <li className="text-sm">
              <a
                href="https://lottiefiles.com/free-animation/plant-growing-animation-Bk7Iu2zpGa"
                target="_blank"
                className="underline"
              >
                Shannon
              </a>{' '}
              - peace lily
            </li>
            <div>♥</div>
            <li className="text-sm">
              <a href="https://shadcncolors.com" target="_blank" className="underline">
                shadcncolors
              </a>{' '}
            </li>
          </ul>
        </div>

        <Separator className="bg-muted-foreground/20" />

        <div className="flex w-full flex-col items-center justify-center">
          <SocialsList />
          <span className="mt-6 text-xs">© 2025 Pomoplant by Rinakin. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default AppFooter;
