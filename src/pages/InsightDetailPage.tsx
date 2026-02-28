import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import InsightCard from "@/components/InsightCard";
import { insights } from "@/lib/insights";

/** Simple markdown-to-HTML renderer for basic markdown */
const renderMarkdown = (md: string) => {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl font-semibold text-foreground mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl font-bold text-foreground mt-10 mb-4">$1</h2>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-primary/30 pl-4 py-1 my-6 text-muted-foreground italic">$1</blockquote>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal text-muted-foreground leading-relaxed">$1</li>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-muted-foreground leading-relaxed">$1</li>')
    .replace(/\n\n/g, '</p><p class="text-muted-foreground leading-relaxed mb-4">')
    .replace(/^(?!<)(.+)$/gm, '<p class="text-muted-foreground leading-relaxed mb-4">$1</p>');
};

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

          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(insight.content) }}
          />
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
