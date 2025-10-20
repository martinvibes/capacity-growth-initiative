// Image resizing utility for carousel images
export const resizeImage = (dataUrl: string, maxWidth: number, maxHeight: number): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      // Calculate new dimensions maintaining aspect ratio
      let { width, height } = img;

      // Resize to fit within maxWidth x maxHeight while maintaining aspect ratio
      const aspectRatio = width / height;
      const targetAspectRatio = maxWidth / maxHeight;

      if (aspectRatio > targetAspectRatio) {
        // Image is wider than target aspect ratio
        width = maxWidth;
        height = maxWidth / aspectRatio;
      } else {
        // Image is taller than target aspect ratio
        height = maxHeight;
        width = maxHeight * aspectRatio;
      }

      // Set canvas size to target dimensions
      canvas.width = maxWidth;
      canvas.height = maxHeight;

      // Fill with white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, maxWidth, maxHeight);

      // Center the image
      const x = (maxWidth - width) / 2;
      const y = (maxHeight - height) / 2;

      // Draw the resized image
      ctx.drawImage(img, x, y, width, height);

      // Convert to data URL
      const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
      resolve(resizedDataUrl);
    };
    img.src = dataUrl;
  });
};
