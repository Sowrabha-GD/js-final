import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import InsightCard from "@/components/InsightCard";
import { insights, insightCategories } from "@/lib/insights";

const InsightsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
 const filtered = activeCategory
  ? insights.filter((i) =>
      i.categories?.includes(activeCategory)
    )
  : insights;

  return (
    <Layout>
      <div className="container-wide section-padding">
        <SectionHeading
          label="Insights"
          title="Articles & Deep Dives"
          description="In-depth thinking on Salesforce architecture, engineering patterns, and platform strategy."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              !activeCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {insightCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((insight, i) => (
            <InsightCard key={insight.slug} insight={insight} index={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default InsightsPage;
