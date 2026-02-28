import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import VideoCard from "@/components/VideoCard";
import { videos, videoCategories } from "@/data/videos";

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const filtered = activeCategory ? videos.filter((v) => v.category === activeCategory) : videos;

  return (
    <Layout>
      <div className="container-wide section-padding">
        <SectionHeading
          label="Videos"
          title="Video Library"
          description="Visual walkthroughs on architecture, engineering practices, and Salesforce platform deep dives."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              !activeCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {videoCategories.map((cat) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video, i) => (
            <VideoCard key={video.slug} video={video} index={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default VideosPage;
