import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";

const CohortInquiry = () => {

  const { id } = useParams();

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
            Thank you for reaching out!
          </h1>

          <p className="text-muted-foreground">
            We have received your message and our team will get back to you
            within 24 hours.
          </p>

        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-wide section-padding max-w-xl">

        <h1 className="text-3xl font-bold mb-6">
        Need More Information?
        <h2 className="text-xl font-semibold mt-4">
          Fill out the form below and our team will get back to you within 24 hours.
        </h2>
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
            placeholder="Email"
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
            placeholder="Any questions or message"
            rows={4}
            required
            className="w-full border rounded-lg p-3"
          />

          <button
            className="bg-primary text-white px-6 py-3 rounded-lg"
          >
            Submit
          </button>

        </form>

      </div>
    </Layout>
  );
};

export default CohortInquiry;