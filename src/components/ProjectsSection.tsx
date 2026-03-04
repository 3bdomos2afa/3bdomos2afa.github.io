import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";
import { useRef, MouseEvent } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A creative portfolio with glassmorphism, animations, and modern design. Built with React and Framer Motion.",
    tags: ["React", "Framer Motion", "Tailwind"],
    color: "from-primary to-[hsl(250,80%,60%)]",
    emoji: "🎨",
  },
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce with cart, checkout, and payment integration. Clean UI with responsive design.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-[hsl(250,80%,60%)] to-[hsl(280,70%,50%)]",
    emoji: "🛍️",
  },
  {
    title: "Task Manager",
    description: "Productivity app with drag & drop, categories, and real-time sync across devices.",
    tags: ["TypeScript", "Firebase", "Tailwind"],
    color: "from-primary to-[hsl(190,80%,50%)]",
    emoji: "📋",
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with rooms, typing indicators, and push notifications.",
    tags: ["Socket.io", "React", "Express"],
    color: "from-[hsl(190,80%,50%)] to-primary",
    emoji: "💬",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts and animated weather icons.",
    tags: ["API", "React", "CSS"],
    color: "from-[hsl(280,70%,50%)] to-primary",
    emoji: "🌤️",
  },
  {
    title: "Landing Page",
    description: "Modern SaaS landing page with scroll-triggered animations and glass effects.",
    tags: ["Next.js", "GSAP", "Tailwind"],
    color: "from-primary to-[hsl(250,80%,60%)]",
    emoji: "🚀",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="glass-card rounded-2xl overflow-hidden gradient-border group h-full"
      >
        {/* Top gradient bar */}
        <div className={`h-1.5 bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
        
        {/* Emoji header */}
        <div className="px-6 pt-6">
          <motion.span
            className="text-3xl inline-block"
            whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
            transition={{ type: "spring" }}
          >
            {project.emoji}
          </motion.span>
        </div>

        <div className="p-6 pt-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <motion.div
              className="text-muted-foreground group-hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 45 }}
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-primary/80 bg-primary/8 px-2.5 py-1 rounded-full border border-primary/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom links */}
          <div className="flex gap-3 mt-5 pt-4 border-t border-border/50">
            <motion.a
              href="#"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 3 }}
            >
              <Github size={14} /> Code
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 3 }}
            >
              <ExternalLink size={14} /> Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm">{"// my work"}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 gradient-text section-heading">Projects</h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto">
            A collection of projects that showcase my passion for creative development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
