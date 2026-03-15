import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const data = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  await fetch("https://script.google.com/macros/s/AKfycbwzd4_7wsxNagBzFRovVlInucT15f_qCPL01OrpHXrJ1vvVBzJoFlifv8sDf7960AcXng/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
  });

  setSubmitted(true);   // show success message
  form.reset();
};
  return (
    <Layout>
      <div
  className="w-full px-12 py-16"
  style={{
    background: "linear-gradient(135deg, #0f2d6b 0%, #1a4fba 40%, #2c7be5 70%, #3b9ef0 100%)",
  }}
>
  <span
    className="inline-block text-xs font-bold tracking-widest uppercase text-white mb-4 px-4 py-1.5 rounded-full border border-white/25"
    style={{ background: "rgba(255,255,255,0.15)" }}
  >
    Contact
  </span>
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
   Get in Touch
  </h1>
  <p className="text-white/80 text-base max-w-xl leading-relaxed">
   Have a question or want to discuss a project? Reach out below.
  </p>
</div>
  
<div className="container-wide pt-0 pb-2 px-2"></div>
  
      <div className="container-narrow section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
         

          {submitted ? (
  <div className="max-w-lg p-6 rounded-lg bg-green-50 border border-green-200 text-green-800">
    <h3 className="text-lg font-semibold mb-2">Message Sent Successfully ✅</h3>
    <p className="text-sm">
      Thank you for reaching out. Your information has been received and I will
      get back to you within <strong>24 hours</strong>.
    </p>
  </div>
) : (
  <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  name="message"
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
