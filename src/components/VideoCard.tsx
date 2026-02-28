import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export interface VideoData {
  slug: string;
  title: string;
  category: string;
  duration: string;
  summary: string;
  youtubeId: string;
  thumbnail?: string;
}

interface VideoCardProps {
  video: VideoData;
  index?: number;
}

const VideoCard = ({ video, index = 0 }: VideoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Link
      to={`/videos/${video.slug}`}
      className="block group bg-card rounded-xl border border-border overflow-hidden card-elevated h-full"
    >
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
            <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
          </div>
        </div>
        <span className="absolute bottom-2 right-2 bg-foreground/80 text-primary-foreground text-xs px-2 py-0.5 rounded">
          {video.duration}
        </span>
      </div>
      <div className="p-5">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-2">
          {video.category}
        </span>
        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5">
          {video.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{video.summary}</p>
      </div>
    </Link>
  </motion.div>
);

export default VideoCard;
