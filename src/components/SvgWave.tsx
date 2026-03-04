import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SvgWave = ({ flip = false, className = "" }: { flip?: boolean; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={ref} className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className} relative`}>
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(260, 85%, 65%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(190, 80%, 55%)" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(260, 85%, 65%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,50 C240,110 480,0 720,60 C960,120 1200,10 1440,70 L1440,140 L0,140 Z"
          fill="url(#waveGrad1)"
          style={{ translateX: x1 }}
        />
        <motion.path
          d="M0,80 C360,20 720,100 1080,40 C1260,10 1380,60 1440,80 L1440,140 L0,140 Z"
          fill="url(#waveGrad2)"
          style={{ translateX: x2 }}
        />
        <motion.path
          d="M0,100 C180,60 360,110 540,80 C720,50 900,100 1080,70 C1260,40 1380,90 1440,100 L1440,140 L0,140 Z"
          fill="hsl(var(--secondary))"
          fillOpacity="0.2"
          style={{ translateX: x1 }}
        />
      </svg>
    </div>
  );
};

export default SvgWave;
