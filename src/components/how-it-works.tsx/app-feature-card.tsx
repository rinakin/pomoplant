import React from 'react';
import { cn } from '@/lib/utils';

interface AppFeatureCardProps {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconBackgroundColor: string;
}
const AppFeatureCard: React.FC<AppFeatureCardProps> = ({
  title,
  description,
  icon,
  iconBackgroundColor,
}) => {
  const FeatureIcon = icon;
  return (
    <div className="flex flex-col items-center rounded-lg bg-[#f9faf0] px-6 py-8 shadow-md transition-transform duration-300 hover:scale-105">
      <div className={cn('mb-6 rounded-full p-2', iconBackgroundColor)}>
        <FeatureIcon width={64} />
      </div>
      <h3 className="mb-1 text-center text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-center text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default AppFeatureCard;
