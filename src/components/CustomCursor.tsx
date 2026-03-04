import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const updateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(updateTrail);
    };

    // Detect hoverable elements
    const handleElementHover = () => {
      const hoverElements = document.querySelectorAll("a, button, [role='button'], input, textarea, .cursor-hover");
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const frameId = requestAnimationFrame(updateTrail);
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });
    handleElementHover();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: position.x - (isHovering ? 8 : 4),
          y: position.y - (isHovering ? 8 : 4),
          scale: isClicking ? 0.5 : isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovering
              ? "w-4 h-4 bg-primary/60 mix-blend-screen"
              : "w-2 h-2 bg-foreground"
          }`}
        />
      </motion.div>

      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: trailPosition.x - (isHovering ? 24 : 16),
          y: trailPosition.y - (isHovering ? 24 : 16),
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? "w-12 h-12 border-primary/50 bg-primary/5"
              : "w-8 h-8 border-foreground/20"
          }`}
        />
      </motion.div>

      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        animate={{
          x: trailPosition.x - 20,
          y: trailPosition.y - 20,
          opacity: isHovering ? 0.4 : 0.1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <div className="w-10 h-10 rounded-full bg-primary/30 blur-xl" />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
