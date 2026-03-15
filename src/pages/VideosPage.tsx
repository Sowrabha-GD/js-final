import { useState } from "react";
import Layout from "@/components/Layout";
import VideoCard from "@/components/VideoCard";
import { videos, videoCategories } from "@/data/videos";

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const filtered = activeCategory ? videos.filter((v) => v.category === activeCategory) : videos;

  return (
    <Layout>
      <div
  className="w-full px-12 py-16"
  style={{
    background: "linear-gradient(135deg, #0f2d6b 0%, #1a4fba 40%, #2c7be5 70%, #3b9ef0 100%)",
  }}
>
  <span
    className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-4 py-1.5 rounded-full border border-white/25"
    style={{ background: "rgba(255,255,255,0.15)" }}
  >
    Videos  
  </span>
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
    Video Library
  </h1>
  <p className="text-white/80 text-base max-w-xl leading-relaxed">
    Visual walkthroughs on architecture, engineering practices, and Salesforce platform deep dives.
  </p>
</div>
  
<div className="container-wide pt-8 pb-12 px-8"></div>

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
      <div className="container-wide pt-4 pb-12 px-8"></div>
    </Layout>
  );
};

export default VideosPage;
