import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 glass-strong rounded-full px-2 py-2 max-w-xl w-[95%] md:w-auto"
    >
      <div className="flex items-center justify-between gap-1 md:gap-2 px-2">
        <motion.a
          href="#home"
          className="text-lg font-bold gradient-text px-3 py-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          AM.
        </motion.a>
        <div className="flex items-center gap-1">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground px-2 md:px-3 py-1.5 rounded-full hover:bg-primary/10 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#contact"
          className="glass px-4 py-1.5 rounded-full text-xs md:text-sm text-primary gradient-border hidden md:block"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(217, 91%, 60%, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
