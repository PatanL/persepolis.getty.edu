/**
 * Creates a subtle star/noise background effect
 * This draws random white pixels on a canvas to create a starfield effect
 */
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('noise-bg');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  
  window.addEventListener('resize', resize);
  resize();
  
  // Configuration for the star field
  const density = 0.00015; // Star density (0-1)
  const maxSize = 1.2;     // Maximum star size
  const minOpacity = 0.1;  // Minimum star opacity
  const maxOpacity = 0.5;  // Maximum star opacity
  
  function drawStars() {
    ctx.clearRect(0, 0, width, height);
    
    // Number of stars based on canvas size and density
    const starCount = Math.floor(width * height * density);
    
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * maxSize;
      const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
      
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Initial draw
  drawStars();
  
  // Redraw occasionally to create subtle animation
  setInterval(() => {
    drawStars();
  }, 5000);
});