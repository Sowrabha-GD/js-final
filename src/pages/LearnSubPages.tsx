import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import cohorts from "@/data/cohorts.json";
import { Link } from "react-router-dom";

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
export const LiveCohortsPage = () => (
  <Layout>
    <div className="container-wide section-padding">

      <SectionHeading
        label="Learn"
        title="Live Cohorts"
        description="Structured group learning programs with live sessions and community support."
      />

      <div className="space-y-6 mt-10">

        {cohorts.map((cohort) => (

          <div
            key={cohort.id}
            className="bg-surface-blue p-6 rounded-xl flex justify-between items-center"
          >

            {/* Left side */}
            <div>

              <h3 className="text-xl font-semibold">
                {cohort.name}
              </h3>

              <p className="text-muted-foreground mt-2">
                {cohort.date} • {cohort.time}
              </p>

              <p className="text-sm mt-3 text-muted-foreground">
                {cohort.description}
              </p>

            </div>

            {/* Right buttons */}
            <div className="flex gap-3">

              <Link
                to={`/learn/live-cohorts/${cohort.id}`}
                className="px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white"
              >
                View Details
              </Link>

              <Link
                to={`/learn/live-cohorts/register/${cohort.id}`}
                className="px-4 py-2 bg-primary text-white rounded-lg"
              >
                Register
              </Link>

              <Link
                to={`/learn/live-cohorts/inquiry/${cohort.id}`}
                className="px-4 py-2 border border-primary rounded-lg text-primary"
             >
               More Info
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  </Layout>
);