
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { OrbPlaceholder } from './OrbPlaceholder';
import { LoaderIcon } from './LoaderIcon';

interface PalantirDisplayProps {
  videoId: string | null;
  isLoading: boolean;
}

export const PalantirDisplay: React.FC<PalantirDisplayProps> = ({ videoId, isLoading }) => {
  const playerOpts: YouTubeProps['opts'] = {
    height: '100%', // Will be controlled by wrapper
    width: '100%',  // Will be controlled by wrapper
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3, // Hide video annotations
      color: 'white', // Player control color
      // fs: 0, // Disable fullscreen, if desired for orb aesthetic
    },
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // event.target.playVideo(); // Handled by autoplay:1
  };
  
  const onPlayerError: YouTubeProps['onError'] = (event) => {
    // console.error('YouTube Player Error:', event.data);
    // Potentially set an error state here to show a message within the orb
  };

  return (
    <div 
      className="relative w-full mx-auto bg-neutral-950 rounded-full 
                 shadow-[0_0_15px_5px_rgba(0,0,0,0.7),_0_0_45px_15px_rgba(72,180,220,0.25),_inset_0_0_25px_8px_rgba(0,0,0,0.8)] 
                 border-2 border-neutral-700/70 p-2 sm:p-3 md:p-4"
      // This outer div is the main 'orb' frame
    >
      <div 
        className="aspect-video w-full bg-black rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden 
                   shadow-inner shadow-black/80 relative"
        // Inner container for the player/placeholder, with slightly less rounding than full circle
        // The rounding values are experimental for a good 'inset sphere' look
      >
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center bg-black/80">
            <LoaderIcon />
          </div>
        ) : videoId ? (
          <YouTube
            videoId={videoId}
            opts={playerOpts}
            onReady={onPlayerReady}
            onError={onPlayerError}
            className="w-full h-full" // Make react-youtube component fill this container
            iframeClassName="w-full h-full" // Make the iframe itself fill its parent
          />
        ) : (
          <OrbPlaceholder />
        )}
      </div>
    </div>
  );
};
