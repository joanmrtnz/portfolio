import { useEffect, useMemo, useState } from "react";
import "./LogoPerformance.css";

const CONFIGS = {
  desktop: {
    tileMinW: 10,
    tileMaxW: 34,
    tileMinH: 12,
    tileMaxH: 30,
    particleCount: 70,
    particleSizeMin: 24,
    particleSizeMax: 35,
    particleDistanceScale: 1.98,
    particleTargetScale: 1.87,
    particleDurationMin: 5.0,
    particleDurationMax: 9.0,
  },
  largeDesktop: {
    tileMinW: 10,
    tileMaxW: 34,
    tileMinH: 12,
    tileMaxH: 30,
    particleCount: 95,
    particleSizeMin: 24,
    particleSizeMax: 39,
    particleDistanceScale: 2.33,
    particleTargetScale: 2.18,
    particleDurationMin: 5.5,
    particleDurationMax: 9.5,
  },
  wideDesktop: {
    tileMinW: 10,
    tileMaxW: 34,
    tileMinH: 12,
    tileMaxH: 30,
    particleCount: 115,
    particleSizeMin: 24,
    particleSizeMax: 45,
    particleDistanceScale: 2.78,
    particleTargetScale: 2.55,
    particleDurationMin: 6.0,
    particleDurationMax: 10.0,
  },
  mobile: {
    tileMinW: 20,
    tileMaxW: 46,
    tileMinH: 18,
    tileMaxH: 40,
    particleCount: 60,
    particleSizeMin: 18,
    particleSizeMax: 26,
    particleDistanceScale: 0.9,
    particleTargetScale: 0.72,
    particleDurationMin: 6.5,
    particleDurationMax: 11.0,
  },
  smallMobile: {
    tileMinW: 24,
    tileMaxW: 52,
    tileMinH: 22,
    tileMaxH: 44,
    particleCount: 40,
    particleSizeMin: 13,
    particleSizeMax: 22,
    particleDistanceScale: 0.82,
    particleTargetScale: 0.65,
    particleDurationMin: 7.5,
    particleDurationMax: 12.0,
  },
};

const LOGO_WIDTH = 360;
const LOGO_HEIGHT = 300;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function getConfigKey() {
  if (window.matchMedia("(max-width: 380px)").matches) {
    return "smallMobile";
  }

  if (window.matchMedia("(max-width: 600px)").matches) {
    return "mobile";
  }

  if (window.matchMedia("(min-width: 1536px)").matches) {
    return "wideDesktop";
  }

  if (window.matchMedia("(min-width: 1280px)").matches) {
    return "largeDesktop";
  }

  return "desktop";
}

function createTiles(config) {
  const tiles = [];

  for (let y = 0; y < LOGO_HEIGHT; ) {
    const rowHeight = random(config.tileMinH, config.tileMaxH);

    for (let x = 0; x < LOGO_WIDTH; ) {
      const tileWidth = random(config.tileMinW, config.tileMaxW);

      tiles.push({
        id: `${x}-${y}-${tiles.length}`,
        style: {
          left: `${x}px`,
          top: `${y}px`,
          width: `${tileWidth}px`,
          height: `${rowHeight}px`,
          "--hue": random(92, 145),
          "--a1": random(0.42, 0.72),
          "--a2": random(0.72, 1),
          "--shine": random(0.18, 0.56),
          "--delay": `${random(-3.2, 0)}s`,
          "--speed-slow": `${random(5.0, 6.4)}s`,
          "--tex-x": `${random(-120, 120)}px`,
          "--tex-y": `${random(-120, 120)}px`,
          "--tex-size": `${random(90, 180)}px`,
        },
      });

      x += tileWidth;
    }

    y += rowHeight;
  }

  return tiles;
}

function createParticles(config) {
  return Array.from({ length: config.particleCount }, (_, index) => {
    const corner = Math.floor(Math.random() * 4);
    const distance = random(230, 330) * config.particleDistanceScale;
    const edge = 170 * config.particleDistanceScale;
    let x0;
    let y0;

    if (corner === 0) {
      x0 = random(-distance, -edge);
      y0 = random(-distance, -edge);
    } else if (corner === 1) {
      x0 = random(edge, distance);
      y0 = random(-distance, -edge);
    } else if (corner === 2) {
      x0 = random(-distance, -edge);
      y0 = random(edge, distance);
    } else {
      x0 = random(edge, distance);
      y0 = random(edge, distance);
    }

    return {
      id: index,
      value: Math.random() > 0.5 ? "1" : "0",
      style: {
        "--x0": `${x0}px`,
        "--y0": `${y0}px`,
        "--x1": `${random(-95, 95) * config.particleTargetScale}px`,
        "--y1": `${random(-80, 80) * config.particleTargetScale}px`,
        "--size": `${random(config.particleSizeMin, config.particleSizeMax)}px`,
        "--duration": `${random(config.particleDurationMin, config.particleDurationMax)}s`,
        "--delay": `${random(-5.5, 0)}s`,
      },
    };
  });
}

export default function LogoPerformance() {
  const [configKey, setConfigKey] = useState("desktop");

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia("(max-width: 380px)"),
      window.matchMedia("(max-width: 600px)"),
      window.matchMedia("(min-width: 1280px)"),
      window.matchMedia("(min-width: 1536px)"),
    ];

    const syncConfig = () => setConfigKey(getConfigKey());
    syncConfig();

    mediaQueries.forEach((query) => {
      query.addEventListener("change", syncConfig);
    });

    return () => {
      mediaQueries.forEach((query) => {
        query.removeEventListener("change", syncConfig);
      });
    };
  }, []);

  const config = CONFIGS[configKey];
  const tiles = useMemo(() => createTiles(config), [config]);
  const particles = useMemo(() => createParticles(config), [config]);

  return (
    <section className="logo-performance-section" aria-label="Animated personal logo">
      <div className="logo-performance-scene">
        <div className="logo-performance-ambient-glow" />
        <div className="logo-performance-logo" aria-hidden="true">
          {tiles.map((tile) => (
            <span key={tile.id} className="logo-performance-tile" style={tile.style} />
          ))}
        </div>
        <div className="logo-performance-particles" aria-hidden="true">
          {particles.map((particle) => (
            <span key={particle.id} className="logo-performance-particle" style={particle.style}>
              {particle.value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
