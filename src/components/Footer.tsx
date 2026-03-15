import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-[#15457A] to-[#0F3A67] text-white">
      <div className="container-wide py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* About Section - Column 1 */}
          <div className="md:col-span-4">
            <Link to="/" className="font-display text-white font-bold text-xl">
              Jeet Singh
            </Link>
            <div className="mt-3 text-sm text-white/70">
              <p>Evangelist, Technology Enthusiast, Architect, Consultant, Trainer, Mentor, Public Speaker and a Learner Forever</p>
            </div>
            <div className="flex gap-4 mt-5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Google Plus"
              >
                <i className="fab fa-google-plus-g text-lg"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="md:col-span-5">
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li>
                <Link to="/DubaiSalesforceArchitectLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Dubai Salesforce Architect
                </Link>
              </li>
              <li>
                <Link to="/GermanySalesforceArchitectLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Germany Salesforce Architect
                </Link>
              </li>
              <li>
                <Link to="/SalesforceAdminTrainingLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Admin Training
                </Link>
              </li>
              <li>
                <Link to="/SalesforceContractArchitectLondonLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Contract Architect London
                </Link>
              </li>
              <li>
                <Link to="/SalesforceFreelanceArchitectNewYorkLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Freelance Architect New York
                </Link>
              </li>
              <li>
                <Link to="/SalesforceTechnicalArchitectMunichLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Technical Architect Munich
                </Link>
              </li>
              <li>
                <Link to="/SalesforceContractArchitectFrankfurtLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Contract Architect Frankfurt
                </Link>
              </li>
              <li>
                <Link to="/SalesforceTechnicalArchitectManchesterLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Technical Architect Manchester
                </Link>
              </li>
              <li>
                <Link to="/SalesforceArchitektFreiberuflerBerlinLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Architekt Freiberufler Berlin
                </Link>
              </li>
              <li>
                <Link to="/SalesforceFreelanceArchitectSydneyLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Freelance Architect Sydney
                </Link>
              </li>
              <li>
                <Link to="/SalesforceTechnicalArchitectRemoteUSLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Technical Architect Remote US
                </Link>
              </li>
              <li>
                <Link to="/SalesforceContractArchitectSanFranciscoLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Contract Architect San Francisco
                </Link>
              </li>
              <li>
                <Link to="/SalesforceContractArchitectMelbourneLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Contract Architect Melbourne
                </Link>
              </li>
              <li>
                <Link to="/SalesforceTechnicalArchitectBrisbaneLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Salesforce Technical Architect Brisbane
                </Link>
              </li>
              <li>
                <Link to="/ServiceIntegrationTrainingLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Service Integration Training
                </Link>
              </li>
              <li>
                <Link to="/ServiceCloudTrainingLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Service Cloud Training
                </Link>
              </li>
              <li>
                <Link to="/SalesCloudTrainingLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Sales Cloud Training
                </Link>
              </li>
              <li>
                <Link to="/CPQTrainingLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  CPQ Training
                </Link>
              </li>
              <li>
                <Link to="/LWCTrainingLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  LWC Training
                </Link>
              </li>
              <li>
                <Link to="/ApexDevelopmentTrainingLandingPage" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  <i className="fas fa-angle-right mr-2 text-sm"></i>
                  Apex Development Training
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter - Column 3 */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to the newsletter to be informed of recent news.
            </p>
            <form 
              id="footer-form" 
              action="#" 
              onSubmit={(e) => {
                e.preventDefault();
                // Add your newsletter signup logic here
                console.log('Newsletter form submitted');
              }}
              className="flex"
            >
              <input 
                type="email" 
                placeholder="Your Email ..." 
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors"
                aria-label="Subscribe"
              >
                <i className="fas fa-long-arrow-alt-right text-white"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
          {/* WhatsApp */}
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-3 rounded-full">
              <a href="https://wa.me/919986142784" className="text-white hover:text-blue-300 transition-colors">
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
            <div>
              <h5 className="text-sm uppercase tracking-wider text-white/60">WhatsApp</h5>
              <a href="https://wa.me/919986142784" className="text-white hover:text-blue-300 transition-colors font-medium">
                +91 99861 42784
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-3 rounded-full">
              <a href="mailto:info@jeet-singh.com" className="text-white hover:text-blue-300 transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            <div>
              <h5 className="text-sm uppercase tracking-wider text-white/60">Mail Us</h5>
              <a href="mailto:info@jeet-singh.com" className="text-white hover:text-blue-300 transition-colors font-medium">
                info@jeet-singh.com
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-3 rounded-full">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <i className="fas fa-home text-xl"></i>
              </a>
            </div>
            <div>
              <h5 className="text-sm uppercase tracking-wider text-white/60">Visit Us</h5>
              <span className="text-white font-medium">Bangalore, India</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60">
            Copyright <i className="far fa-copyright"></i> {currentYear} Jeet-singh.com.
          </div>
          <div>
            <ul className="flex gap-6 text-sm">
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;