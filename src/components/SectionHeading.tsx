import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-14"
  >
    <p className={`section-subtitle mb-3 ${light ? "text-silver" : ""}`}>{subtitle}</p>
    <h2 className={`heading-lg ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
    {description && (
      <p className={`mt-4 max-w-2xl mx-auto text-body ${light ? "text-silver" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
