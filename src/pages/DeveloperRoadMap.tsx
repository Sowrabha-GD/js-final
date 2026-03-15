import Layout from "@/components/Layout";
import CareerRoadmapLayout from "../components/CareerRoadMapLayout";
import { TrendingUp } from "lucide-react";

const DeveloperRoadmap = () => {
  return (
  <Layout>  
    <CareerRoadmapLayout
      title="Salesforce Developer"
      icon={<TrendingUp className="w-8 h-8" />}
      color="orange"
      description="Build custom solutions, integrations, and applications on the Salesforce platform. Master Apex, LWC, and modern development practices."
      salary="$90k - $130k"
      demand="Very High"
      skills={[
        "Apex Programming",
        "Lightning Web Components",
        "Integration Development",
        "DevOps & CI/CD",
        "SOQL & SOSL",
        "Testing & Debugging",
        "Version Control (Git)",
        "JavaScript"
      ]}
      certifications={[
        { name: "Platform Developer I", link: "https://trailhead.salesforce.com/credentials/platform-developer-i", level: "Beginner" },
        { name: "JavaScript Developer I", link: "https://trailhead.salesforce.com/credentials/javascript-developer-i", level: "Intermediate" },
        { name: "Platform Developer II", link: "https://trailhead.salesforce.com/credentials/platform-developer-ii", level: "Advanced" },
        { name: "Integration Architect", link: "https://trailhead.salesforce.com/credentials/integration-architect", level: "Advanced" }
      ]}
      roadmap={[
        {
          phase: "Phase 1: Development Fundamentals",
          duration: "3-4 months",
          steps: [
            "Learn Apex basics and SOQL",
            "Get Platform Developer I certified",
            "Build first custom application",
            "Master debugging and testing"
          ]
        },
        {
          phase: "Phase 2: Modern Development",
          duration: "4-6 months",
          steps: [
            "Master Lightning Web Components",
            "Get JavaScript Developer I certified",
            "Learn Git and CI/CD",
            "Build modern UI applications"
          ]
        },
        {
          phase: "Phase 3: Advanced Developer",
          duration: "6-8 months",
          steps: [
            "Get Platform Developer II certified",
            "Master integration patterns",
            "Lead code reviews",
            "Mentor junior developers"
          ]
        }
      ]}
      resources={[
        { title: "Apex Patterns Guide", type: "Book", link: "#" },
        { title: "LWC Masterclass", type: "Course", link: "#" },
        { title: "DevOps for Salesforce", type: "Video", link: "#" }
      ]}
      relatedPaths={[
        { title: "Technical Architect", link: "/careers/technical-architect", color: "purple" },
        { title: "Solution Architect", link: "/careers/solution-architect", color: "emerald" },
        { title: "Consultant", link: "/careers/consultant", color: "blue" }
      ]}
    />
  </Layout>  
  );
};

export default DeveloperRoadmap;
