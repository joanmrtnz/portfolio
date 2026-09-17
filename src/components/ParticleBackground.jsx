import { useEffect, useRef } from "react";
import "./ParticleBackground.css";

const FRAME_INTERVAL = 1000 / 30;

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let particles = [];
    let color = "";
    let frameId = 0;
    let lastFrame = null;
    let elapsed = 0;

    function draw() {
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      const time = elapsed * 0.00035;

      for (const particle of particles) {
        const wave = Math.sin(particle.x * 0.008 + particle.depth * 3 - time);
        const ripple = Math.cos(particle.x * 0.003 - particle.depth * 5 + time * 0.7);
        const y = particle.y + wave * height * 0.045 + ripple * height * 0.025;
        context.globalAlpha = particle.opacity;
        context.beginPath();
        context.arc(particle.x, y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    }

    function animate(timestamp) {
      if (lastFrame === null) lastFrame = timestamp;
      const delta = timestamp - lastFrame;
      if (delta >= FRAME_INTERVAL) {
        elapsed += Math.min(delta, 100);
        lastFrame = timestamp - (delta % FRAME_INTERVAL);
        draw();
      }
      frameId = window.requestAnimationFrame(animate);
    }

    function syncAnimation() {
      window.cancelAnimationFrame(frameId);
      lastFrame = null;
      if (document.hidden) return;
      draw();
      if (!motionQuery.matches) {
        frameId = window.requestAnimationFrame(animate);
      }
    }

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      // Bound both drawing work and backing-store memory on large/HiDPI screens.
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const mobile = width < 640;
      const columns = Math.min(mobile ? 24 : 45, Math.ceil(width / 32));
      const rows = mobile ? 12 : 16;
      particles = [];
      for (let row = 0; row < rows; row += 1) {
        const depth = row / (rows - 1);
        for (let column = 0; column < columns; column += 1) {
          particles.push({
            x: ((column + (row % 2) * 0.5) / columns) * width,
            y: height * (0.12 + depth * 0.8),
            depth,
            radius: 0.8 + depth * 0.8,
            opacity: 0.12 + depth * 0.23,
          });
        }
      }
      if (!document.hidden) draw();
    }

    function syncColor() {
      color = getComputedStyle(canvas).color;
      if (!document.hidden) draw();
    }

    const resizeObserver = new ResizeObserver(resize);
    const themeObserver = new MutationObserver(syncColor);
    color = getComputedStyle(canvas).color;
    resize();
    resizeObserver.observe(canvas);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
    motionQuery.addEventListener("change", syncAnimation);
    document.addEventListener("visibilitychange", syncAnimation);
    syncAnimation();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      motionQuery.removeEventListener("change", syncAnimation);
      document.removeEventListener("visibilitychange", syncAnimation);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
}
