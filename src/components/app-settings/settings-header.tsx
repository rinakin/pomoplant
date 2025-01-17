import React from 'react';

interface SettingsHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title, icon }) => {
  return (
    <div className="flex min-w-[60px] flex-row items-center gap-[6px]">
      <h2 className="text-base font-semibold leading-none tracking-tight">{title}</h2>
      {icon}
    </div>
  );
};

export default SettingsHeader;
