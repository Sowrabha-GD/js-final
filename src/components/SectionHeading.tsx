import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${centered ? "text-center" : ""}`}
  >
    {label && (
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {description && (
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
