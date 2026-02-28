import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="container-narrow section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Contact</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Have a question or want to discuss a project? Reach out below.
          </p>

          {submitted ? (
            <div className="bg-surface-blue rounded-xl p-8 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message Sent</h3>
              <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground space-y-2">
            <p>Email: <a href="mailto:hello@jeetsingh.com" className="text-primary hover:underline">hello@jeetsingh.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/jeetsingh</a></p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ContactPage;
