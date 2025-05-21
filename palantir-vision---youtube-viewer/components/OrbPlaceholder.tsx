
import React from 'react';

export const OrbPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-black to-slate-900 flex flex-col items-center justify-center text-center p-4 overflow-hidden relative">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyan-800/30 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-indigo-700/20 rounded-full animate-pulse delay-500 blur-xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <svg className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-600/70 opacity-50 mb-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <circle cx="50" cy="50" r="10" fill="currentColor" className="animate-pulse opacity-70" />
        </svg>
        <p className="text-slate-400 font-cinzel text-sm sm:text-base">
          The Orb is Dormant...
        </p>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          Awaiting a vision to be channeled.
        </p>
      </div>
      {/* Fixed: Removed jsx and global props from style tag, used template literal for CSS string */}
      <style>
        {`
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}
      </style>
    </div>
  );
};
