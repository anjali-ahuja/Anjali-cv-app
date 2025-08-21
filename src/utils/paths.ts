// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // Use environment variable for base path in production
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}; 