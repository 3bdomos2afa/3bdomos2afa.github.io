import { motion } from "framer-motion";

const GlowingBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary large blobs */}
      <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[180px] animate-blob" />
      <div className="absolute top-[60%] -right-32 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[200px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] left-[40%] w-[450px] h-[450px] bg-[hsl(260,80%,55%,0.08)] rounded-full blur-[170px] animate-blob" style={{ animationDelay: "4s" }} />
      
      {/* Secondary accent blobs */}
      <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-[hsl(190,80%,55%,0.06)] rounded-full blur-[140px] animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[20%] left-[20%] w-[350px] h-[350px] bg-primary/8 rounded-full blur-[160px] animate-glow-pulse" />
      <div className="absolute top-[80%] right-[50%] w-[250px] h-[250px] bg-[hsl(260,70%,50%,0.06)] rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(var(--background)) 70%)',
        }}
      />
    </div>
  );
};

export default GlowingBlobs;
