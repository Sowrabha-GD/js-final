import { useState } from "react";
import Layout from "@/components/Layout";
import InsightCard from "@/components/InsightCard";
import blogs from "@/data/blogs.json";
import { Insight } from "@/lib/insights";

const blogList = blogs as Insight[];

// Generate categories dynamically
const insightCategories = [
  ...new Set(blogList.flatMap((blog) => blog.categories || []))
];

const InsightsPage = () => {

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? blogList.filter((b) =>
        b.categories?.includes(activeCategory)
      )
    : blogList;

  return (
    <Layout>

      {/* Blue gradient hero — matching Wizdin Solutions style */}
      <div
        className="w-full px-8 py-20"
        style={{
          background: "linear-gradient(135deg, #0f2d6b 0%, #1a4fba 40%, #2c7be5 70%, #3b9ef0 100%)",
        }}
      >
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-4 py-1.5 rounded-full border border-white/25"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Articles & Deep Dives
        </h1>
        <p className="text-white/80 text-base max-w-xl leading-relaxed">
          In-depth thinking on Salesforce architecture, engineering patterns, and platform strategy.
        </p>
      </div>

      <div className="container-wide section-padding">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">

          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              !activeCategory
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>

          {insightCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((insight, i) => (
            <InsightCard
              key={insight.slug}
              insight={insight}
              index={i}
            />
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default InsightsPage;