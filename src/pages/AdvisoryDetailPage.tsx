import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { offerings } from "@/pages/AdvisoryPage";

const AdvisoryDetailPage = () => {
  const { id } = useParams();
  const offering = offerings.find((o) => o.id === id);
  const others = offerings.filter((o) => o.id !== id);

  if (!offering) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-center">
          <h1 className="font-display text-2xl font-bold">Service not found</h1>
          <Link to="/advisory" className="text-primary mt-4 inline-block">Back to Advisory</Link>
        </div>
      </Layout>
    );
  }

  const Icon = offering.icon;

  return (
    <Layout>
      <div className="container-narrow section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/advisory" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Advisory
          </Link>

          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Advisory</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{offering.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">{offering.what}</p>
          <p className="text-sm text-muted-foreground mb-10">
            <span className="font-medium text-foreground">For:</span> {offering.who}
          </p>

          {/* What's Included */}
          <div className="bg-surface-blue rounded-xl p-8 mb-10">
            <h2 className="font-display text-xl font-semibold text-foreground mb-5">What's Included</h2>
            <ul className="space-y-3">
              {offering.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div className="mb-12">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Approach</h2>
            <p className="text-muted-foreground leading-relaxed">{offering.approach}</p>
          </div>

          {/* CTA */}
          <div className="bg-card rounded-xl border border-border p-8 text-center">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Ready to get started?</h3>
            <p className="text-sm text-muted-foreground mb-5">Let's discuss how this can help your team.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Other Services */}
        <div className="mt-20 pt-10 border-t border-border">
          <h3 className="font-display text-xl font-bold text-foreground mb-6">Other Advisory Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Link
                  key={o.id}
                  to={`/advisory/${o.id}`}
                  className="group flex items-center gap-4 bg-card rounded-xl border border-border p-5 card-elevated"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <OIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {o.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{o.what}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdvisoryDetailPage;
