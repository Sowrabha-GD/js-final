import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

type Insight = {
  slug: string;
  title: string;
  categories: string[];
  date: string;
  excerpt: string;
  image: string;
  folder: string;
};

interface InsightCardProps {
  insight: Insight;
  index?: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  apex: "text-white",
  lwc: "text-white",
  integration: "text-white",
  security: "text-white",
  certifications: "text-white",
  admin: "text-white",
  misc: "text-white",
};

const InsightCard = ({ insight, index = 0 }: InsightCardProps) => {
  const category = insight.categories?.[0] ?? "";
  const colorClass = CATEGORY_COLORS[category.toLowerCase()] ?? "text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        to={`/insights/${insight.slug}`}
        className="
        flex flex-col h-full
        bg-gradient-to-b from-[#1A4F88] via-[#1E5C95] to-[#2467A3]
        backdrop-blur-lg
        border border-white/20
        border border-blue-700
        rounded-xl
        p-6
        shadow-md
        hover:shadow-xl
        hover:scale-[1.02]
        hover:shadow-blue-500/40
        transition-all duration-300
        group
        "
      >
        {/* Category */}
        <span className={`text-xs font-bold tracking-widest uppercase ${colorClass} mb-3`}>
          {category}
        </span>

        {/* Title */}
        <h3
          className="
          flex-1
          text-lg
          font-semibold
          text-white
          leading-snug
          transition-colors
          mb-5
        "
        >
          {insight.title}
        </h3>

        {/* Divider */}
        <div className="border-t border-blue-300 mb-4"></div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-blue-100">
          <Clock className="w-4 h-4" />
          {insight.date}
        </div>
      </Link>
    </motion.div>
  );
};

export default InsightCard;