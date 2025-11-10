/**
 * Get the correct asset path for both development and production
 * Supports both GitHub Pages and Vercel deployments
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Use Vite's BASE_URL which is automatically set based on build mode
  // For Vercel: BASE_URL = '/'
  // For GitHub Pages: BASE_URL = '/portofolio/'
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

