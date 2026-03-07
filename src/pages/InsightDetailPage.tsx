import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import InsightCard from "@/components/InsightCard";
import { insights } from "@/lib/insights";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Simple markdown-to-HTML renderer for basic markdown */

const InsightDetailPage = () => {
  const { slug } = useParams();
  const insight = insights.find((i) => i.slug === slug);
  const related = insights
  .filter(
    (i) =>
      i.slug !== insight.slug &&
      i.categories?.some((cat) =>
        insight.categories?.includes(cat)
      )
  )
  .slice(0, 3);

  if (!insight) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-centre">
          <h1 className="font-display text-2xl font-bold">Insight not found</h1>
         
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container-narrow section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            {insight.categories}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{insight.title}</h1>
          <p className="text-lg text-muted-foreground mb-2">{insight.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
            <span></span>
            
          </div>

<div className="prose prose-lg max-w-none">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
  >
    {insight.content}
  </ReactMarkdown>
</div>

 </motion.div>

        {related.length > 0 && (
          <div className="mt-20 pt-10 border-t border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Related Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r, i) => (
                <InsightCard key={r.slug} insight={r} index={i} />
              ))}
            </div>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default InsightDetailPage;
