import Layout from "@/components/Layout";
import CareerRoadmapLayout from "../components/CareerRoadMapLayout";
import { Code } from "lucide-react";

const TechnicalArchitectRoadmap = () => {
  return (
  <Layout>  
    <CareerRoadmapLayout
      title="Technical Architect"
      icon={<Code className="w-8 h-8" />}
      color="purple"
      description="Design complex, scalable solutions. Own technical strategy, governance, and ensure best practices across implementations."
      salary="$150k - $200k+"
      demand="Very High"
      skills={[
        "System Architecture",
        "Integration Design",
        "Security Patterns",
        "Performance Tuning",
        "Data Modeling",
        "DevOps Strategy",
        "Technical Governance",
        "Team Leadership"
      ]}
      certifications={[
        { name: "Platform Developer I", link: "https://trailhead.salesforce.com/credentials/platform-developer-i", level: "Intermediate" },
        { name: "Platform Developer II", link: "https://trailhead.salesforce.com/credentials/platform-developer-ii", level: "Advanced" },
        { name: "Application Architect", link: "https://trailhead.salesforce.com/credentials/application-architect", level: "Advanced" },
        { name: "System Architect", link: "https://trailhead.salesforce.com/credentials/system-architect", level: "Expert" },
        { name: "CTA Review Board", link: "#", level: "Expert" }
      ]}
      roadmap={[
        {
          phase: "Phase 1: Development Excellence",
          duration: "6-8 months",
          steps: [
            "Get Platform Developer I certified",
            "Master Apex design patterns",
            "Learn integration patterns and best practices",
            "Build 2-3 complex custom applications"
          ]
        },
        {
          phase: "Phase 2: Architecture Foundations",
          duration: "8-10 months",
          steps: [
            "Get Platform Developer II certified",
            "Study for Application Architect certification",
            "Learn large data volume strategies",
            "Design governance framework"
          ]
        },
        {
          phase: "Phase 3: Enterprise Architecture",
          duration: "10-12 months",
          steps: [
            "Get System Architect certified",
            "Start CTA review board preparation",
            "Architect multi-org strategy",
            "Lead technical design sessions"
          ]
        }
      ]}
      resources={[
        { title: "CTA Study Guide", type: "Book", link: "#" },
        { title: "Architecture Patterns Course", type: "Course", link: "#" },
        { title: "Review Board Simulation", type: "Video", link: "#" }
      ]}
      relatedPaths={[
        { title: "Solution Architect", link: "/careers/solution-architect", color: "emerald" },
        { title: "Salesforce Developer", link: "/careers/developer", color: "orange" },
        { title: "Consultant", link: "/careers/consultant", color: "blue" }
      ]}
    />
  </Layout>  
  );
};

export default TechnicalArchitectRoadmap;