// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're in production (GitHub Pages)
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname === 'github.io' || 
                         window.location.pathname.startsWith('/Anjali-cv-app');
    if (isGitHubPages) {
      return `/Anjali-cv-app/${cleanPath}`;
    }
  }
  
  // For development or other environments, return path with leading slash
  return `/${cleanPath}`;
}; 