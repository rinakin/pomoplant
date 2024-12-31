'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type TRoutes = {
  label: string;
  href: string;
  pathname: string;
};

const MainNav: React.FC = () => {
  const pathname = usePathname();
  const routes: TRoutes[] = [
    {
      label: 'About',
      href: '/about',
      pathname: 'about',
    },
    {
      label: 'Contact',
      href: '/contact',
      pathname: 'contact',
    },
  ];
  return (
    <nav className="items-center space-x-6 md:flex lg:space-x-8">
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={cn(
            'group relative font-medium tracking-tight text-gray-700 transition-colors hover:text-gray-900',
            route.pathname === pathname
              ? 'font-semibold text-[#773f1a] hover:text-[#773f1a]'
              : 'text-gray-700',
          )}
        >
          {route.label}
          <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-[#773f1a] transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
