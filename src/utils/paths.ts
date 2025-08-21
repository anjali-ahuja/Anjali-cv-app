// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use Next.js base path for production builds
  const basePath = process.env.NODE_ENV === 'production' ? '/Anjali-cv-app' : '';
  
  // Add cache-busting parameter for production builds
  const cacheBuster = process.env.NODE_ENV === 'production' ? '?v=2' : '';
  
  return `${basePath}/${cleanPath}${cacheBuster}`;
}; 