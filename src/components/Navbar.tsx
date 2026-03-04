import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Navbar = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="fixed top-0 left-0 right-0 z-40 glass-strong"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          AM.
        </motion.a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#contact"
          className="glass px-4 py-2 rounded-full text-sm text-primary hover:glow transition-all duration-300 gradient-border"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
