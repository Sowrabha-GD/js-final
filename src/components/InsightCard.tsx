import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Insight } from "@/lib/insights";
export interface InsightData {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

interface InsightCardProps {
  insight: Insight
  index?: number;
}

const InsightCard = ({ insight, index = 0 }: InsightCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Link
      to={`/insights/${insight.slug}`}
      className="block group bg-card rounded-xl border border-border p-6 card-elevated h-full"
    >
      <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-3">
        {insight.categories}
      </span>
      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
        {insight.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
        {insight.excerpt}
      </p>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /></span>
        <span>{insight.date}</span>
      </div>
    </Link>
  </motion.div>
);

export default InsightCard;
