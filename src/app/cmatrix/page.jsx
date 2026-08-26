
"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 16;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]<>/\\|";
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const columns = Math.floor(canvas.width / fontSize);
      drops = Array.from(
        { length: columns },
        () => -Math.floor(Math.random() * (canvas.height / fontSize))
      );
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ffffff";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height + Math.random() * 500) {
          drops[i] = -Math.floor(Math.random() * 20);
        }

        drops[i]++;
      }
    };

    resize();

    window.addEventListener("resize", resize);
    const interval = window.setInterval(draw, 60);

    return () => {
      window.removeEventListener("resize", resize);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <main className="matrix-page">
      <canvas ref={canvasRef} className="matrix-canvas" />

    </main>
  );
}
