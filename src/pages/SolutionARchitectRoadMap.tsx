import Layout from "@/components/Layout";
import CareerRoadmapLayout from "../components/CareerRoadMapLayout";
import { Target } from "lucide-react";

const SolutionArchitectRoadmap = () => {
  return (
  <Layout>  
    <CareerRoadmapLayout
      title="Solution Architect"
      icon={<Target className="w-8 h-8" />}
      color="emerald"
      description="Translate business needs into architectural vision. Guide implementation teams and bridge business strategy with technical execution."
      salary="$140k - $180k"
      demand="High"
      skills={[
        "Solution Design",
        "Estimation & Planning",
        "Technical Leadership",
        "Pre-sales Support",
        "Business Analysis",
        "Risk Management",
        "Client Advisory",
        "Team Mentoring"
      ]}
      certifications={[
        { name: "Sales Cloud Consultant", link: "https://trailhead.salesforce.com/credentials/sales-cloud-consultant", level: "Intermediate" },
        { name: "Service Cloud Consultant", link: "https://trailhead.salesforce.com/credentials/service-cloud-consultant", level: "Intermediate" },
        { name: "Application Architect", link: "https://trailhead.salesforce.com/credentials/application-architect", level: "Advanced" },
        { name: "Experience Cloud Consultant", link: "https://trailhead.salesforce.com/credentials/experience-cloud-consultant", level: "Intermediate" }
      ]}
      roadmap={[
        {
          phase: "Phase 1: Consultant Foundation",
          duration: "4-6 months",
          steps: [
            "Get Sales or Service Cloud certified",
            "Lead 2-3 end-to-end implementations",
            "Master requirements gathering",
            "Learn solution estimation"
          ]
        },
        {
          phase: "Phase 2: Architecture Skills",
          duration: "6-8 months",
          steps: [
            "Get second cloud consultant certification",
            "Study integration and data architecture",
            "Lead discovery workshops",
            "Create solution design documents"
          ]
        },
        {
          phase: "Phase 3: Strategic Advisor",
          duration: "8-10 months",
          steps: [
            "Get Application Architect certified",
            "Support pre-sales activities",
            "Mentor consultants",
            "Develop multi-cloud solutions"
          ]
        }
      ]}
      resources={[
        { title: "Solution Design Template", type: "Article", link: "#" },
        { title: "Estimation Masterclass", type: "Course", link: "#" },
        { title: "Pre-sales Workshop Guide", type: "Video", link: "#" }
      ]}
      relatedPaths={[
        { title: "Technical Architect", link: "/careers/technical-architect", color: "purple" },
        { title: "Consultant", link: "/careers/consultant", color: "blue" },
        { title: "Salesforce Developer", link: "/careers/developer", color: "orange" }
      ]}
    />
  </Layout>  
  );
};

export default SolutionArchitectRoadmap;