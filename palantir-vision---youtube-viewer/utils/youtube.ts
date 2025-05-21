
export function extractYouTubeVideoId(urlOrId: string): string | null {
  if (!urlOrId || typeof urlOrId !== 'string') {
    return null;
  }

  const trimmedUrlOrId = urlOrId.trim();
  if (!trimmedUrlOrId) {
    return null;
  }

  // Regex for 11-character YouTube video ID
  const videoIdRegex = /^[a-zA-Z0-9_-]{11}$/;

  // Check if the input itself is a valid 11-character ID
  if (videoIdRegex.test(trimmedUrlOrId)) {
    return trimmedUrlOrId;
  }

  // Common YouTube URL patterns
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
    // URLs with extra parameters
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/, 
    // Shorts URL
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
  ];

  for (const pattern of patterns) {
    const match = trimmedUrlOrId.match(pattern);
    if (match && match[1] && videoIdRegex.test(match[1])) {
      return match[1];
    }
  }

  return null;
}
