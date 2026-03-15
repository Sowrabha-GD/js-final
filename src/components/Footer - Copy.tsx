import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#15457A] to-[#0F3A67]">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-white font-bold">
              Jeet Singh
            </Link>
            <p className="mt-3 text-sm opacity-70 text-white">
              Senior Salesforce Architect. Helping teams build scalable, well-architected solutions.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-white">Content</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
              <li><Link to="/insights" className="hover:opacity-100 transition-opacity">Insights</Link></li>
              <li><Link to="/videos" className="hover:opacity-100 transition-opacity">Videos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 opacity-90">Learn</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
             {/* Hidden for now */}
  {/* <Link to="/learn/foundations">Foundations</Link> */}
  {/* <Link to="/learn/paths">Paths</Link> */}
  {/* <Link to="/learn/playbooks">Playbooks</Link> */}
  {/* <Link to="/learn/sessions">Sessions</Link> */}
              <li><Link to="/learn/live-cohorts" className="hover:opacity-100 transition-opacity">Live Cohorts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 opacity-90">Work</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
              <li><Link to="/advisory" className="hover:opacity-100 transition-opacity">Advisory</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-primary-foreground/10 text-sm opacity-50">
          © {new Date().getFullYear()} Jeet Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
