import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A creative portfolio with glassmorphism, animations, and modern design.",
    tags: ["React", "Framer Motion", "Tailwind"],
    color: "from-primary to-[hsl(250,80%,60%)]",
  },
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce with cart, checkout, and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-[hsl(250,80%,60%)] to-[hsl(280,70%,50%)]",
  },
  {
    title: "Task Manager",
    description: "Productivity app with drag & drop, categories, and real-time sync.",
    tags: ["TypeScript", "Firebase", "Tailwind"],
    color: "from-primary to-[hsl(190,80%,50%)]",
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with rooms, typing indicators, and notifications.",
    tags: ["Socket.io", "React", "Express"],
    color: "from-[hsl(190,80%,50%)] to-primary",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts and animated icons.",
    tags: ["API", "React", "CSS"],
    color: "from-[hsl(280,70%,50%)] to-primary",
  },
  {
    title: "Landing Page",
    description: "Modern SaaS landing page with scroll animations and glass effects.",
    tags: ["Next.js", "GSAP", "Tailwind"],
    color: "from-primary to-[hsl(250,80%,60%)]",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// my work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -8 }}
              className="glass rounded-2xl overflow-hidden gradient-border group cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={28} />
                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.2 }} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={18} />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={18} />
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-primary/70 bg-primary/10 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
