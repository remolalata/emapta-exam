import React from "react";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = "" }) => {
  return (
    <div className={`${className}`}>
      <h2 className=" font-bold text-gray-400">{title}</h2>
      <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
    </div>
  );
};

export default SectionHeader;
