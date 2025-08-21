// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // For GitHub Pages deployment, we need to include the base path
  // For local development, use the path as-is
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return path;
  }
  return `/Anjali-cv-app${path}`;
}; 