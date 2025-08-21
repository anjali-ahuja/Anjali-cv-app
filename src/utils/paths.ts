// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use Next.js base path for production builds
  const basePath = process.env.NODE_ENV === 'production' ? '/Anjali-cv-app' : '';
  
  return `${basePath}/${cleanPath}`;
}; 