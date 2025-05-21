
import React from 'react';

interface VideoInputProps {
  onSubmit: (videoId: string) => void;
  isLoading: boolean;
  inputValue: string;
  onInputChange: (value: string) => void;
}

export const VideoInput: React.FC<VideoInputProps> = ({ onSubmit, isLoading, inputValue, onInputChange }) => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    onSubmit(inputValue.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 bg-slate-900/70 rounded-xl shadow-2xl shadow-black/50 border border-slate-700/50 backdrop-blur-sm"
    >
      <label htmlFor="youtube-url" className="block text-sm font-medium text-cyan-300 mb-2 font-cinzel">
        Whisper the Vision's Origin (YouTube URL or ID)
      </label>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          id="youtube-url"
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="e.g., https://youtu.be/dQw4w9WgXcQ or dQw4w9WgXcQ"
          disabled={isLoading}
          className="flex-grow px-4 py-3 bg-slate-800/80 border border-slate-600 text-slate-200 placeholder-slate-500 rounded-lg shadow-inner focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
          aria-label="YouTube URL or Video ID"
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="px-6 py-3 bg-gradient-to-br from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold font-cinzel rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none"
          aria-live="polite"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Seeking...
            </div>
          ) : (
            "Gaze into the Orb"
          )}
        </button>
      </div>
    </form>
  );
};
