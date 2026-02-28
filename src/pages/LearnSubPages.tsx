import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const placeholder = (title: string, desc: string) => (
  <Layout>
    <div className="container-wide section-padding">
      <SectionHeading label="Learn" title={title} description={desc} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center bg-surface-blue rounded-xl p-12"
      >
        <p className="text-muted-foreground">Content coming soon. Check back for updates.</p>
      </motion.div>
    </div>
  </Layout>
);

export const FoundationsPage = () => placeholder("Foundations", "Core concepts and fundamental knowledge every Salesforce professional needs.");
export const PathsPage = () => placeholder("Learning Paths", "Role-based learning journeys for Developers, Solution Architects, and Technical Architects.");
export const PlaybooksPage = () => placeholder("Playbooks", "Actionable, long-form guides for tackling real-world Salesforce challenges.");
export const SessionsPage = () => placeholder("Sessions", "On-demand recorded sessions covering focused topics in depth.");
export const LiveCohortsPage = () => placeholder("Live Cohorts", "Structured group learning programs with live sessions and community support.");
