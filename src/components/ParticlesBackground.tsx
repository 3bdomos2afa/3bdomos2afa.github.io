import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        color: { value: ["#3b82f6", "#6366f1", "#8b5cf6"] },
        links: {
          color: "#3b82f6",
          distance: 150,
          enable: true,
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none" as const,
          outModes: { default: "bounce" as const },
        },
        number: {
          value: 60,
          density: { enable: true },
        },
        opacity: { value: { min: 0.05, max: 0.2 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.2 } },
          push: { quantity: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        options={options as any}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticlesBackground;
