import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container-narrow section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">About</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Jeet Singh</h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm a senior Salesforce architect with over a decade of experience designing and building enterprise-scale solutions across Sales Cloud, Service Cloud, Experience Cloud, and custom platform applications.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground pt-4">Experience</h2>
            <p>
              My work spans Fortune 500 companies and fast-growing startups — from greenfield implementations to complex multi-org consolidations. I've led architecture for programs involving millions of records, dozens of integrations, and globally distributed teams.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground pt-4">Philosophy</h2>
            <p>
              I believe great Salesforce architecture is invisible. It enables business outcomes without creating ongoing technical burden. Every design decision should be justified, every trade-off documented, and every solution operable by the team that inherits it.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground pt-4">Credentials</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Salesforce Certified Technical Architect (CTA)</li>
              <li>Salesforce Certified Application Architect</li>
              <li>Salesforce Certified System Architect</li>
              <li>10+ Salesforce platform certifications</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Read Insights <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/advisory"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              Advisory Services
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutPage;
