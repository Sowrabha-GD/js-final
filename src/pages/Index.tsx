import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Shield, Brain } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroPhoto from "@/assets/hero-photo.png";
import InsightCard from "@/components/InsightCard";
import VideoCard from "@/components/VideoCard";
import { insights } from "@/lib/insights";
import { videos } from "@/data/videos";

const pillars = [
  { icon: Layers, title: "Architecture & Design", desc: "Building systems that scale with clarity and purpose." },
  { icon: Zap, title: "Integrations & APIs", desc: "Connecting platforms with reliable, well-designed patterns." },
  { icon: Shield, title: "Security & Scale", desc: "Protecting data and ensuring performance at every level." },
  { icon: Brain, title: "Engineering Thinking", desc: "Bringing software engineering discipline to Salesforce." },
];

const Index = () => {
  return (
    <Layout>

      {/* ── HERO: Full edge-to-edge background photo ── */}
      <section className="relative min-h-screen bg-[#0B1F3A] overflow-hidden">

        {/* Photo fills the entire section as background */}
     <img
  src={heroPhoto}
  alt="Hero"
  className="absolute bottom-0 right-0 h-[60%] md:h-full object-contain"
/>

        {/* Left-to-right dark gradient so text on left is readable, photo shows on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.00) 100%)",
          }}
        />

        {/* Bottom fade to blend into next section */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "160px",
            background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          }}
        />

        {/* Hero text content — left aligned, vertically centered */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-wide w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: "rgba(37,99,235,0.18)",
                  borderColor: "rgba(37,99,235,0.40)",
                  color: "#60a5fa",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#60a5fa" }}
                />
                Salesforce Architect
              </motion.div>

              <h1
                className="font-display font-bold leading-[1.1] mb-6"
                style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", color: "#ffffff" }}
              >
                Salesforce Architecture,{" "}
                <span className="text-gradient">Done Right</span>
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Deep technical insights, structured learning, and advisory from a
                senior Salesforce architect with over a decade of enterprise
                experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/insights"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Read Insights <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/videos"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-colors"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.35)",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.7)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.35)")
                  }
                >
                  Watch Videos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Pillars */}
      <section className="bg-surface-blue">
        <div className="container-wide section-padding">
          <SectionHeading
            label="Expertise"
            title="Core Areas of Focus"
            description="Specialized knowledge across the Salesforce platform, built through years of hands-on enterprise work."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 card-elevated text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section>
        <div className="container-wide section-padding">
          <SectionHeading
            label="Insights"
            title="Latest Thinking"
            description="In-depth articles on Salesforce architecture, engineering, and platform strategy."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.slice(0, 4).map((insight, i) => (
              <InsightCard key={insight.slug} insight={insight} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="bg-surface-blue">
        <div className="container-wide section-padding">
          <SectionHeading
            label="Videos"
            title="Watch & Learn"
            description="Video walkthroughs on architecture patterns, engineering practices, and platform deep dives."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(0, 3).map((video, i) => (
              <VideoCard key={video.slug} video={video} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all videos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advisory Preview */}
      <section>
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Advisory</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Architecture Guidance?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From strategy and roadmapping to hands-on architecture reviews — I work with teams to build Salesforce solutions that last.
              </p>
              <Link
                to="/advisory"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Explore Advisory <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;