const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Settings
const chars = "01";
let fontSize = 16;
let drops = [];
let columns = 0;

// Respect reduced motion
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fit canvas to screen with device-pixel-ratio scaling
function fitCanvas() {
  const dpr = Math.max(window.devicePixelRatio || 1, 1);

  // CSS size (logical pixels)
  const cssWidth = canvas.clientWidth;
  const cssHeight = canvas.clientHeight;

  // Actual canvas backing store (device pixels)
  canvas.width = Math.floor(cssWidth * dpr);
  canvas.height = Math.floor(cssHeight * dpr);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing ops back to CSS pixels
  ctx.font = `${fontSize}px monospace`;

  columns = Math.floor(cssWidth / fontSize);
  drops = Array(columns).fill(1);
}

function draw() {
  // Trail fade
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  // Green glyphs
  ctx.fillStyle = "#0f0";
  ctx.textBaseline = "top";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // Reset randomly after passing the bottom
    if (y > canvas.clientHeight && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

// Init
fitCanvas();
let timer = null;

if (!prefersReduced) {
  timer = setInterval(draw, 33); // ~30fps
} else {
  // Static background for reduced motion
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.fillStyle = "#0f0";
  ctx.font = `${fontSize}px monospace`;
  for (let i = 0; i < 400; i++) {
    const x = Math.floor(Math.random() * canvas.clientWidth / fontSize) * fontSize;
    const y = Math.floor(Math.random() * canvas.clientHeight / fontSize) * fontSize;
    ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), x, y);
  }
}

// Handle resizes (and DPR changes)
let resizeRaf;
window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(() => {
    fitCanvas();
  });
});

