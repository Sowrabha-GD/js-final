import { useParams, Link } from "react-router-dom";
import cohorts from "@/data/cohorts.json";
import Layout from "@/components/Layout";

const CohortDetail = () => {
  const { id } = useParams();

  const cohort = cohorts.find((c) => c.id === id);

  if (!cohort) return <p>Cohort not found</p>;

  return (
    <Layout>
      <div className="container-wide section-padding max-w-4xl">

        {/* Header */}
        <h1 className="text-3xl font-bold">{cohort.name}</h1>

        <p className="mt-4 text-muted-foreground">
          {cohort.description}
        </p>

        <p className="mt-3">
          {cohort.date} • {cohort.time}
        </p>

        {/* Register Button */}
        <Link
          to={`/learn/live-cohorts/register/${cohort.id}`}
          className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg"
        >
          Register
        </Link>

        {/* Course Content */}
        <div className="mt-12 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Course Overview
            </h2>

            <p className="text-muted-foreground">
              {cohort.overview}
            </p>
          </div>

          {/* What You Will Learn */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              What You Will Learn
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {cohort.learning?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Audience */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Who This Cohort Is For
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {cohort.audience?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Duration */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Duration
            </h2>

            <p className="text-muted-foreground">
              {cohort.duration}
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default CohortDetail;