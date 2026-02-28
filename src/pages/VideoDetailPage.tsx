import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

const VideoDetailPage = () => {
  const { slug } = useParams();
  const video = videos.find((v) => v.slug === slug);
  const related = videos.filter((v) => v.slug !== slug && v.category === video?.category).slice(0, 3);

  if (!video) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-center">
          <h1 className="font-display text-2xl font-bold">Video not found</h1>
          
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-wide section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
         

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            {video.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{video.title}</h1>

          <div className="aspect-video rounded-xl overflow-hidden bg-foreground/5 mb-8">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{video.summary}</p>
            <p className="text-sm text-muted-foreground">Duration: {video.duration}</p>
          </div>
        </motion.div>

        {related.length > 0 && (
          <div className="mt-20 pt-10 border-t border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Related Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v, i) => (
                <VideoCard key={v.slug} video={v} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VideoDetailPage;
