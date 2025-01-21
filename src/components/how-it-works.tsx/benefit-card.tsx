import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center rounded-md bg-[#cdd4c5] p-6">
      <div className="mr-4 flex aspect-square items-center justify-center rounded-full bg-[#f9faf0] p-2">
        {icon}
      </div>
      <p className="text-gray-700">
        <span className="font-semibold">{title}: </span>
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
