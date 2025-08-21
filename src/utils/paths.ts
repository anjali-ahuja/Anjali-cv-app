// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // For GitHub Pages deployment, we need to include the base path
  return `/Anjali-cv-app${path}`;
}; 