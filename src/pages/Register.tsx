import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import cohorts from "@/data/cohorts.json";

const Register = () => {

  const { id } = useParams();

  const cohort = cohorts.find((c) => c.id === id);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container-wide section-padding text-center">

          <h1 className="text-2xl font-semibold mb-4">
            Registration Successful
          </h1>

          <p className="text-muted-foreground">
            Thank you for registering for <b>{cohort?.name}</b>.
            Our team will contact you shortly with further details.
          </p>

        </div>
      </Layout>
    );
  }

  return (
    <Layout>
     <div className="container-wide section-padding grid md:grid-cols-2 gap-12">

  {/* LEFT SIDE — FORM */}
  <div>

    <h1 className="text-3xl font-bold mb-6">
      Register for the Cohort
    </h1>

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        placeholder="Full Name"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        type="email"
        placeholder="Email Address"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full border rounded-lg p-3"
      />

      <textarea
        placeholder="Any questions or notes (optional)"
        rows={4}
        className="w-full border rounded-lg p-3"
      />

      <button className="bg-primary text-white px-6 py-3 rounded-lg w-full">
        Complete Registration
      </button>

    </form>

  </div>

  {/* RIGHT SIDE — COURSE CARD */}
  <div className="bg-surface-blue p-6 rounded-xl h-fit sticky top-24">

    <h2 className="text-xl font-semibold mb-4">
      Cohort Details
    </h2>

    <p className="text-lg font-medium">
      {cohort?.name}
    </p>

    <p className="text-muted-foreground mt-2">
      {cohort?.date} • {cohort?.time}
    </p>

    <div className="mt-6 space-y-3 text-sm text-muted-foreground">

      <div>
        <span className="font-medium text-foreground">
          Duration:
        </span>{" "}
        {cohort?.duration}
      </div>

      <div>
        <span className="font-medium text-foreground">
          Format:
        </span>{" "}
        Live Online Sessions
      </div>
    </div>

  </div>

</div> 
    </Layout>
  );
};

export default Register;