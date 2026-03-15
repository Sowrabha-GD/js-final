import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const learnLinks = [
  { label: "Live Cohorts", to: "/learn/live-cohorts", description: "Interactive learning sessions" },
  { label: "Foundations", to: "/learn/foundations", description: "Core concepts and basics" },
  { label: "Paths", to: "/learn/paths", description: "Structured learning journeys" },
  { label: "Playbooks", to: "/learn/playbooks", description: "Practical guides" },
  { label: "Sessions", to: "/learn/sessions", description: "Recorded workshops" },
];

const advisoryLinks = [
  { label: "Strategy & Roadmapping", to: "/advisory#strategy", description: "Plan your Salesforce journey" },
  { label: "Architecture & Design", to: "/advisory#architecture", description: "Scalable solution design" },
  { label: "New Implementations", to: "/advisory#implementations", description: "From concept to launch" },
  { label: "Build & Scale", to: "/advisory#build", description: "Grow your Salesforce org" },
  { label: "Audits & Health Checks", to: "/advisory#audits", description: "Optimize existing systems" },
  { label: "Support & Stabilization", to: "/advisory#support", description: "Ongoing technical support" },
];

const expertiseLinks = [
  { label: "Sales Cloud", to: "/expertise/sales-cloud", description: "Sales process optimization" },
  { label: "Service Cloud", to: "/expertise/service-cloud", description: "Customer service solutions" },
  { label: "CPQ & Revenue", to: "/expertise/cpq", description: "Quote to cash" },
  { label: "Integration", to: "/expertise/integration", description: "Connect enterprise systems" },
  { label: "Security", to: "/expertise/security", description: "Governance & compliance" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" },
  { label: "Insights", to: "/insights" },
  { label: "Videos", to: "/videos" },
  { label: "Learn", to: "/learn", children: learnLinks },
  { label: "Advisory", to: "/advisory", children: advisoryLinks },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white shadow-lg py-3 border-b border-gray-200" 
          : "bg-white/80 backdrop-blur-md py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        
        {/* Logo with dark text */}
        <Link to="/" className="group relative">
          <span className="text-2xl font-display font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Jeet Singh
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1 group ${
                  isActive(item.to)
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`} />
                )}
                
                {/* Active indicator */}
                {isActive(item.to) && !item.children && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>

              {/* Mega Dropdown */}
              {item.children && openDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl border border-gray-200 shadow-xl p-2"
                >
                  <div className="grid gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="group/dropdown flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover/dropdown:bg-blue-200 transition-colors">
                          <Sparkles className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 group-hover/dropdown:text-blue-600 transition-colors">
                            {child.label}
                          </div>
                          <div className="text-xs text-gray-500">
                            {child.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side - Social & CTA */}
        <div className="flex items-center gap-3">
          {/* Social Icons - Dark version */}
          <div className="hidden md:flex items-center gap-2">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full text-gray-600 hover:text-blue-600 transition-all hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-gray-100 hover:bg-red-100 rounded-full text-gray-600 hover:text-red-600 transition-all hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* Book Consultation CTA - Gradient Button */}
          <Link
            to="/book-consultation"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25 group"
          >
            <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Book Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container-wide py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2 text-base font-medium rounded-xl transition-colors ${
                      isActive(item.to)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                  
                  {item.children && (
                    <div className="ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="font-medium">{child.label}</div>
                          <div className="text-xs text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  to="/book-consultation"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;