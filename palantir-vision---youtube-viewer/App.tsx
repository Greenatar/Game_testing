
import React, { useState, useCallback } from 'react';
import { VideoInput } from './components/VideoInput';
import { PalantirDisplay } from './components/PalantirDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { extractYouTubeVideoId } from './utils/youtube';

const App: React.FC = () => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>(''); // To control input field

  const handleVideoSubmit = useCallback(async (urlOrId: string) => {
    setError(null);
    setIsLoading(true);
    setCurrentVideoId(null); // Clear previous video immediately

    // Simulate a slight delay for "conjuring" effect
    await new Promise(resolve => setTimeout(resolve, 500));

    const videoId = extractYouTubeVideoId(urlOrId);

    if (videoId) {
      setCurrentVideoId(videoId);
      // setInputValue(''); // Clear input after successful submission if desired
    } else {
      setError("Invalid YouTube URL or Video ID. The vision is clouded.");
    }
    setIsLoading(false);
  }, []);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
    if (error) setError(null); // Clear error when user types
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-orbitron overflow-x-hidden">
      <header className="mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400 font-cinzel drop-shadow-[0_2px_3px_rgba(0,220,255,0.4)]">
          Palantír Vision
        </h1>
        <p className="text-slate-400 mt-2 text-sm sm:text-base">
          Gaze into the depths and witness wonders from afar.
        </p>
      </header>

      <VideoInput
        onSubmit={handleVideoSubmit}
        isLoading={isLoading}
        inputValue={inputValue}
        onInputChange={handleInputChange}
      />

      {error && (
        <div className="mt-6 w-full max-w-md">
          <ErrorMessage message={error} onClose={() => setError(null)} />
        </div>
      )}

      <div className="mt-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl">
        <PalantirDisplay videoId={currentVideoId} isLoading={isLoading} />
      </div>

      <footer className="mt-12 text-center text-slate-600 text-xs sm:text-sm">
        <p>&copy; {new Date().getFullYear()} Orthanc Broadcasting Authority. All visions may be subject to alteration by the Dark Lord.</p>
        <p className="mt-1">Use with caution. Prolonged gazing may attract unwanted attention.</p>
      </footer>
    </div>
  );
};

export default App;
