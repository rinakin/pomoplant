import React from 'react';
import Image from 'next/image';
import TaskIcon from '@/assets/vectors/task-vector.svg';

const AppFeatureCard = () => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-[#f9faf0] px-4 py-6 shadow-md transition-transform duration-300 hover:scale-105">
      {/* Image Section */}
      <Image
        src={TaskIcon}
        alt="Task Icon"
        className="mb-4 h-[64px] w-[64px] rounded-full bg-[#f2f5e0] p-2"
      />

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-gray-800">Customize flow</h3>

      {/* Description */}
      <p className="text-center text-sm text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odio eligendi tempore.
      </p>
    </div>
  );
};

export default AppFeatureCard;
