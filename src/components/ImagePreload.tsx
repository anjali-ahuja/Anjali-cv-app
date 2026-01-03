// Component to add preload link via inline script (runs immediately, before page load)
const ImagePreload = () => {
  // Determine the correct path based on environment
  const basePath = process.env.NODE_ENV === 'production' ? '/Anjali-cv-app' : '';
  const imagePath = `${basePath}/hero/hero-photo.jpg?v=2`;
  
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = '${imagePath}';
            link.fetchPriority = 'high';
            document.head.appendChild(link);
          })();
        `,
      }}
    />
  );
};

export default ImagePreload;

