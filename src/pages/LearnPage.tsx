import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Map, FileText, MonitorPlay, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    icon: BookOpen,
    title: "Foundations",
    desc: "Core concepts and fundamental knowledge every Salesforce professional needs.",
    to: "/learn/foundations",
  },
  {
    icon: Map,
    title: "Paths",
    desc: "Role-based learning journeys for Developers, Solution Architects, and Technical Architects.",
    to: "/learn/paths",
  },
  {
    icon: FileText,
    title: "Playbooks",
    desc: "Actionable, long-form guides for tackling real-world Salesforce challenges.",
    to: "/learn/playbooks",
  },
  {
    icon: MonitorPlay,
    title: "Sessions",
    desc: "On-demand recorded sessions covering focused topics in depth.",
    to: "/learn/sessions",
  },
  {
    icon: Users,
    title: "Live Cohorts",
    desc: "Structured group learning programs with live sessions and community support.",
    to: "/learn/live-cohorts",
  },
];

const LearnPage = () => {
  return (
    <Layout>
      <div className="container-wide section-padding">
        <SectionHeading
          label="Learn"
          title="Structured Learning"
          description="A curated learning experience designed for Salesforce professionals who want to go deeper — not wider."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={section.to}
                className="block group bg-card rounded-xl border border-border p-6 card-elevated h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LearnPage;
