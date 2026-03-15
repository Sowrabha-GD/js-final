import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Shield, Brain } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroPhoto from "@/assets/hero-photo.png";
import InsightCard from "@/components/InsightCard";
import VideoCard from "@/components/VideoCard";
import CardsSection from "@/components/CardsSection";
import CardsSection2 from "@/components/CardsSection2";
import AuthoritySection from "@/components/AuthoritySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TestimonialSection from "@/components/TestimonialSection";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";
import TechnicalArchitectureSection from "@/components/TechnicalArchitectureSection";
import IndustrySection from "@/components/IndustrySection";
import ProductExpertiseSection from "@/components/ProductExpertiseSection";
import CareerPathsSection from "@/components/CareerPathsSection";
import AgentforceSection from "@/components/AgentforceSection";
import ArchitectureComplexityVisualizerSection from "@/components/ArchitectureComplexityVisualizerSection";
import EnterpriseSuccessMatrix from "@/components/EnterpriseSuccessMatrix";
import DigitalOnboardingSection from "@/components/DigitalOnboardingSection";
import CTASectionLeftComponent from "@/components/CTASectionLeftComponent";
import CTASectionRightComponent from "@/components/CTASectionRightComponent";
import CTASectionLeft from "@/components/CTASectionLeftComponent2";
import CTASectionRight from "@/components/CTASectionRightComponent2";
import CTASectionRightComponent3 from "@/components/CTASectionRightComponent3";
import CTASectionLeftComponent3 from "@/components/CTASectionLeftComponent3";
import HeroSection from "@/components/HeroSection";
import blogs from "@/data/blogs.json";
import { Insight } from "@/lib/insights";

const insights = blogs as Insight[];
import { videos } from "@/data/videos";
import CTASectionLeftComponent2 from "@/components/CTASectionLeftComponent2";
import CTASectionRightComponent2 from "@/components/CTASectionRightComponent2";


const pillars = [
  { icon: Layers, title: "Architecture & Design", desc: "Building systems that scale with clarity and purpose." },
  { icon: Zap, title: "Integrations & APIs", desc: "Connecting platforms with reliable, well-designed patterns." },
  { icon: Shield, title: "Security & Scale", desc: "Protecting data and ensuring performance at every level." },
  { icon: Brain, title: "Engineering Thinking", desc: "Bringing software engineering discipline to Salesforce." },
];

const Index = () => {
  return (
    <Layout>

 
      <section>
            <div>
              {/* Your other sections */}
                <HeroSection />
              {/* Your other sections */}
            </div>
      </section>
      <section>
            <div>
              {/* Your other sections */}
                <TechnicalArchitectureSection />
              {/* Your other sections */}
            </div>
      </section>
      <section>
            <div>
              {/* Your other sections */}
                <AgentforceSection />
              {/* Your other sections */}
            </div>
      </section>
       <section>
            <div>
              {/* Your other sections */}
                <IndustrySection />
              {/* Your other sections */}
            </div>
      </section>
      <section>
            <div>
              {/* Your other sections */}
                <ArchitectureComplexityVisualizerSection />
              {/* Your other sections */}
            </div>
      </section>
      <section>
            <div>
              {/* Your other sections */}
                <ProductExpertiseSection />
              {/* Your other sections */}
            </div>
      </section>
      <section>

            <div>
              {/* Your other sections */}
                <DigitalOnboardingSection />
              {/* Your other sections */}
            </div>
      </section>
       <section>
       <div>
              {/* Your other sections */}
                <CareerPathsSection />
              {/* Your other sections */}
            </div>
      </section>
       <section>
            <div>
              {/* Your other sections */}
                <EnterpriseSuccessMatrix />
              {/* Your other sections */}
            </div>
      </section>
      


      <section>
            <div>
              {/* Your other sections */}
                <CardsSection />
              {/* Your other sections */}
            </div>
      </section>
      <section>
            <div>
              {/* Your other sections */}
                <CardsSection2 />
              {/* Your other sections */}
            </div>
      </section>
      
     
      
      

      <section>
            <div>
              {/* Your other sections */}
                <ThoughtLeadershipSection />
              {/* Your other sections */}
            </div>
      </section>

      <section>
            <div>
              {/* Your other sections */}
                <AuthoritySection />
              {/* Your other sections */}
            </div>
      </section>

            <section>
            <div>
              {/* Your other sections */}
                <ExpertiseSection />
              {/* Your other sections */}
            </div>
      </section>

            <section>
            <div>
              {/* Your other sections */}
                <TestimonialSection />
              {/* Your other sections */}
            </div>
      </section>

      <section>
            <div>
              {/* Your other sections */}
                <ThoughtLeadershipSection />
              {/* Your other sections */}
            </div>
      </section>

     
      <section>
            <div>
              {/* Your other sections */}
                <ProductExpertiseSection />
              {/* Your other sections */}
            </div>
      </section>
      
      <section>
            <div>
              {/* Your other sections */}
                <CareerPathsSection />
              {/* Your other sections */}
            </div>
      </section>
      <section>
            <div>
              {/* Your other sections */}
                <AgentforceSection />
              {/* Your other sections */}
            </div>
      </section>

      {/* Expertise Pillars */}
      <section className="bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1]">
        <div className="container-wide section-padding">

          <div className="text-center mb-12">

  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
    Expertise
  </span>

  <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Core Areas of Focus
  </h2>

  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Specialized knowledge across the Salesforce platform, built through years of hands-on enterprise work.
  </p>

</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {pillars.map((pillar, i) => (

              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}

                className="
                bg-gradient-to-b from-[#1A4F88] via-[#1E5C95] to-[#2467A3]
                backdrop-blur-lg
                border border-white/20
                rounded-xl
                p-6
                shadow-lg
                hover:scale-[1.05]
                hover:shadow-2xl
                hover:shadow-blue-500/40
                transition-all duration-300
                text-white
                text-center
                "

              >

                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display font-semibold text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm text-blue-100 leading-relaxed">
                  {pillar.desc}
                </p>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="bg-gradient-to-b from-[#1B4F8A] to-[#1F5E9C]">
        <div className="container-wide section-padding">

<div className="text-center mb-12">
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
      Insights
    </span>

    <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Latest Thinking
    </h2>

    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      In-depth articles on Salesforce architecture, engineering, and platform strategy.
    </p>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {insights.slice(0, 4).map((insight, i) => (
              <InsightCard key={insight.slug} insight={insight} index={i} />
            ))}

          </div>

          <div className="text-center mt-10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition"
            >
              View all insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Videos */}
      <section className="bg-surface-blue">
        <div className="container-wide section-padding">
<div className="text-center mb-12">

  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">
    Videos
  </span>

  <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
   Watch & Learn
  </h2>

  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Video walkthroughs on architecture patterns, engineering practices, and platform deep dives.
  </p>

</div>

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

      {/* Advisory */}
      <section className="bg-gradient-to-r from-[#1B4F8A] to-[#2A6FB0]">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <SectionHeading
            label="Advisory"
            title="Need Architecture Guidance?"
            description=" From strategy and roadmapping to hands-on architecture reviews —
                I work with teams to build Salesforce solutions that last."
          />


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
