const SvgWave = ({ flip = false, className = "" }: { flip?: boolean; className?: string }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill="hsl(var(--secondary))"
          fillOpacity="0.5"
        />
        <path
          d="M0,80 C360,20 720,100 1080,40 C1260,10 1380,50 1440,80 L1440,120 L0,120 Z"
          fill="hsl(var(--secondary))"
          fillOpacity="0.3"
        />
      </svg>
    </div>
  );
};

export default SvgWave;
