import Layout from "@/components/Layout";
import CareerRoadmapLayout from "../components/CareerRoadmapLayout";
import { Briefcase } from "lucide-react";

const ConsultantRoadmap = () => {
  return (
  <Layout>  
    <CareerRoadmapLayout
      title="Salesforce Consultant"
      icon={<Briefcase className="w-8 h-8" />}
      color="blue"
      description="Bridge business requirements with technical solutions. Lead discovery, design, and delivery of Salesforce implementations."
      salary="$100k - $140k"
      demand="High"
      skills={[
        "Business Analysis",
        "Solution Design",
        "Stakeholder Management",
        "Process Mapping",
        "Requirements Gathering",
        "Agile Methodologies",
        "Client Presentations",
        "User Training"
      ]}
      certifications={[
        { name: "Salesforce Certified Administrator", link: "https://trailhead.salesforce.com/credentials/administrator", level: "Beginner" },
        { name: "Salesforce Certified Sales Cloud Consultant", link: "https://trailhead.salesforce.com/credentials/sales-cloud-consultant", level: "Intermediate" },
        { name: "Salesforce Certified Service Cloud Consultant", link: "https://trailhead.salesforce.com/credentials/service-cloud-consultant", level: "Intermediate" },
        { name: "Salesforce Certified Business Analyst", link: "https://trailhead.salesforce.com/credentials/business-analyst", level: "Advanced" }
      ]}
      roadmap={[
        {
          phase: "Phase 1: Foundation",
          duration: "3-4 months",
          steps: [
            "Get Salesforce Certified Administrator",
            "Complete Trailhead modules: Admin Beginner, Process Automation",
            "Shadow senior consultants on discovery calls",
            "Learn business process mapping"
          ]
        },
        {
          phase: "Phase 2: Specialization",
          duration: "4-6 months",
          steps: [
            "Choose track: Sales or Service Cloud",
            "Get Sales or Service Cloud Consultant certified",
            "Lead small requirements gathering sessions",
            "Start creating solution documentation"
          ]
        },
        {
          phase: "Phase 3: Lead Consultant",
          duration: "6-8 months",
          steps: [
            "Get Business Analyst certification",
            "Lead end-to-end discovery workshops",
            "Mentor junior consultants",
            "Develop estimation and scoping skills"
          ]
        }
      ]}
      resources={[
        { title: "Consultant Starter Kit", type: "Course", link: "#" },
        { title: "Discovery Workshop Template", type: "Article", link: "#" },
        { title: "Requirements Gathering Masterclass", type: "Video", link: "#" }
      ]}
      relatedPaths={[
        { title: "Technical Architect", link: "/careers/technical-architect", color: "purple" },
        { title: "Solution Architect", link: "/careers/solution-architect", color: "emerald" },
        { title: "Salesforce Developer", link: "/careers/developer", color: "orange" }
      ]}
    />
  </Layout>  
  );
};

export default ConsultantRoadmap;