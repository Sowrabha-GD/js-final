import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Download, Mail, User, Building2, 
  CheckCircle, ArrowLeft, Star, Users,
  FileText, Award, TrendingUp, Briefcase,
  Target, Code, Users as UsersIcon,
  ArrowRight
} from "lucide-react";

const CareerRoadmaps = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    experience: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: 'Career Roadmaps Download',
          from_name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          experience: formData.experience,
          resource: 'Salesforce Career Roadmaps',
          replyto: formData.email,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '/resources/career-roadmaps.pdf';
          link.download = 'career-roadmaps.pdf';
          link.click();
        }, 1000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resourceDetails = {
    title: "Salesforce Career Roadmaps",
    description: "Step-by-step guides for Consultant, Architect, and Developer career paths. Includes certifications, skills, timelines, and salary expectations.",
    format: "PDF",
    pages: 45,
    category: "Career",
    color: "from-green-500 to-emerald-500",
    icon: TrendingUp,
    rating: 4.9,
    downloads: 3200,
    whatYouGet: [
      "Consultant career roadmap (0-5 years)",
      "Developer career roadmap with PD1/PD2 path",
      "Solution Architect progression guide",
      "Technical Architect to CTA path",
      "Certification roadmap with timelines",
      "Salary benchmarks by role and region",
      "Interview preparation checklists"
    ],
    tableOfContents: [
      "Chapter 1: Introduction to Salesforce Careers",
      "Chapter 2: Consultant Path",
      "Chapter 3: Developer Path",
      "Chapter 4: Solution Architect Path",
      "Chapter 5: Technical Architect Path",
      "Chapter 6: Certification Roadmap",
      "Chapter 7: Salary Benchmarks",
      "Chapter 8: Interview Preparation",
      "Chapter 9: Next Steps & Resources"
    ]
  };
const relatedResources = [
{
title:"CTA Study Guide",
category:"Certification",
color:"from-purple-500 to-pink-500",
link:"/CTAStudyGuideFormPage"
},

{
title:"Interview Prep Kit",
category:"Career",
color:"from-yellow-500 to-amber-500",
link:"/InterviewPrepKitFormPage"
},

{
title:"Apex Patterns Guide",
category:"Development",
color:"from-emerald-500 to-teal-500",
link:"/ApexPatternsGuideFormPage"
}
];
  return (
    <Layout>
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${resourceDetails.color} text-white py-16`}>
        <div className="container-wide">
          <Link to="/FreeResourcesMasterPage" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <resourceDetails.icon className="w-6 h-6" />
              </div>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{resourceDetails.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{resourceDetails.title}</h1>
            <p className="text-xl text-white/90 mb-6">{resourceDetails.description}</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-white/80" />
                <span>{resourceDetails.format} • {resourceDetails.pages} pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{resourceDetails.rating} rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-white/80" />
                <span>{resourceDetails.downloads}+ downloads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Resource Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get</h2>
              <ul className="space-y-3 mb-8">
                {resourceDetails.whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
              <ul className="space-y-2 mb-8">
                {resourceDetails.tableOfContents.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-gray-900 mb-2">Who This Is For</h3>
                <p className="text-sm text-gray-600">
                  Professionals at any stage of their Salesforce career, from beginners to experienced practitioners aiming for architect roles. Used by 3,200+ professionals to plan their career progression.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Download Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {!isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 sticky top-24">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Roadmaps</h3>
                  <p className="text-gray-600 mb-6">Enter your details for instant access.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select your role</option>
                        <option value="beginner">Just starting</option>
                        <option value="admin">Admin</option>
                        <option value="developer">Developer</option>
                        <option value="consultant">Consultant</option>
                        <option value="architect">Architect</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Download Free Roadmaps
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200 text-center sticky top-24"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                  <p className="text-gray-600 mb-4">
                    Your download should start automatically. If not, 
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/resources/career-roadmaps.pdf';
                        link.download = 'career-roadmaps.pdf';
                        link.click();
                      }}
                      className="text-green-600 hover:text-green-700 font-medium mx-1"
                    >
                      click here
                    </button>
                  </p>
                  <p className="text-sm text-gray-500">
                    We've also sent a copy to your email.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gray-50 py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">

{relatedResources.map((resource,i)=>(
<Link
key={i}
to={resource.link}
className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all"
>

<span className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${resource.color} bg-opacity-10 text-gray-700`}>
{resource.category}
</span>

<h3 className="font-bold text-gray-900 mt-2 mb-1">
{resource.title}
</h3>

<span className="text-sm text-blue-600 inline-flex items-center gap-1">
Learn more <ArrowRight className="w-3 h-3"/>
</span>

</Link>
))}

</div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerRoadmaps;