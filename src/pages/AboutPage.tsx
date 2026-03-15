import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import JourneyTimelineSection from "@/components/JourneyTimelineSection";
import MentorshipNetworkSection from "@/components/MentorshipNetworkSection";
import ExpertiseUniverseSection from "@/components/ExpertiseUniverseSection";
import ExpertiseConstellationSection from "@/components/ExpertiseConstellationSection";


const AboutPage = () => {
  return (
    <Layout>

      <JourneyTimelineSection/>
      <MentorshipNetworkSection/>
      <ExpertiseUniverseSection/>
      <ExpertiseConstellationSection/>
   
    </Layout>
  )}

export default AboutPage;
