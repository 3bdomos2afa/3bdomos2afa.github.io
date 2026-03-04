import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+201098042529",
    href: "https://wa.me/201098042529",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Get in touch",
    href: "mailto:contact@example.com",
    gradient: "from-primary to-[hsl(250,80%,60%)]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Egypt 🇪🇬",
    href: "#",
    gradient: "from-[hsl(250,80%,60%)] to-[hsl(280,70%,50%)]",
  },
];

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm">{"// get in touch"}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 gradient-text section-heading">Contact Me</h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring" }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="glass-card rounded-2xl p-6 text-center gradient-border block group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all`}>
                  <item.icon className="text-foreground" size={22} />
                </div>
                <p className="text-foreground font-bold text-sm">{item.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-10 gradient-border glow relative overflow-hidden"
          >
            {/* Shimmer */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 }}
              />
            </div>

            <form className="space-y-5 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "name", placeholder: "Your Name", type: "text" },
                  { name: "email", placeholder: "Your Email", type: "email" },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    animate={focused === field.name ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="w-full glass rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div animate={focused === "subject" ? { scale: 1.01 } : { scale: 1 }}>
                <input
                  type="text"
                  placeholder="Subject"
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className="w-full glass rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
                />
              </motion.div>
              <motion.div animate={focused === "message" ? { scale: 1.01 } : { scale: 1 }}>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full glass rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 resize-none"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-[hsl(260,85%,60%)] text-primary-foreground font-bold flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(217, 91%, 60%, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send size={18} />
                  Send Message
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(260,85%,60%)] to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
