import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import InsightCard from "@/components/InsightCard";
import blogs from "@/data/blogs.json";
import { Insight } from "@/lib/insights";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

const blogList = blogs as Insight[];

const InsightDetailPage = () => {

  const { slug } = useParams();

  const insight = blogList.find((b) => b.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    if (!insight) return;

    fetch(`/src/data/insights/${insight.folder}/index.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));

  }, [insight]);

  const related = blogList
    .filter(
      (b) =>
        b.slug !== insight?.slug &&
        b.categories?.some((cat) =>
          insight?.categories?.includes(cat)
        )
    )
    .slice(0, 3);

  if (!insight) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-center">
          <h1 className="font-display text-2xl font-bold">
            Insight not found
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>

      <article className="container-narrow section-padding">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            {insight.categories?.[0]}
          </span>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {insight.title}
          </h1>

          <p className="text-sm text-muted-foreground mb-10">
            {insight.date}
          </p>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

        </motion.div>

        {related.length > 0 && (
          <div className="mt-20 pt-10 border-t border-border">

            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Related Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r, i) => (
                <InsightCard
                  key={r.slug}
                  insight={r}
                  index={i}
                />
              ))}
            </div>

          </div>
        )}

      </article>

    </Layout>
  );
};

export default InsightDetailPage;