
import React from 'react';

export const LoaderIcon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 p-4">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <div className="absolute inset-0 border-4 border-cyan-700/50 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-2 border-cyan-600/60 rounded-full animate-pulse"></div>
      </div>
      <p className="text-cyan-300 font-cinzel text-sm sm:text-base tracking-wider animate-pulse">
        Conjuring Vision...
      </p>
    </div>
  );
};
