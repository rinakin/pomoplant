import React from 'react';
import { cn } from '@/lib/utils';
interface ContainerProps {
  children: React.ReactNode;
  className?: string;

}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(`mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8`, className)}>{children}</div>;
};

export default Container;