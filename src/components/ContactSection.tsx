import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+201098042529",
    href: "https://wa.me/201098042529",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Get in touch",
    href: "mailto:contact@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Egypt",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">Contact Me</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center gradient-border block"
              >
                <item.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-foreground font-semibold text-sm">{item.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 gradient-border glow"
          >
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-[hsl(250,80%,60%)] text-primary-foreground font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(217, 91%, 60%, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
