import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Brain, Cpu, CheckCircle } from "lucide-react";

const AIFeatureSection = () => {
  return (
    <section className="bg-white">
      <div className="container-wide section-padding">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: AI that works for you */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            
            {/* Light background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>
            
            <div className="relative p-8 md:p-10 z-10">
              {/* Icon and tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/20">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              {/* Main content */}
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 leading-tight">
                AI that works
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  for you
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                Stay ahead with in-demand AI skills that level up your career and get you noticed by top employers.
              </p>

              {/* Features list */}
              <div className="space-y-3 mb-8">
                {[
                  "Industry-recognized certification",
                  "Hands-on projects with real AI tools",
                  "Learn from AI practitioners"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/ai-courses"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Explore AI Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Check your skills */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 hover:border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            
            {/* Light background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl"></div>
            
            <div className="relative p-8 md:p-10 z-10">
              {/* Icon and tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg shadow-emerald-500/20">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase bg-emerald-100 px-3 py-1 rounded-full">
                    Self Assessment
                  </span>
                </div>
              </div>

              {/* Main content */}
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 leading-tight">
                Check your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  skills
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                Discover your strengths and get personalized guidance on what to learn next to accelerate your career.
              </p>

              {/* Skills meter preview */}
              <div className="mb-8 space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span className="font-medium">AI Fundamentals</span>
                    <span className="text-emerald-600 font-medium">Intermediate</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span className="font-medium">Machine Learning</span>
                    <span className="text-emerald-600 font-medium">Beginner</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span className="font-medium">Neural Networks</span>
                    <span className="text-emerald-600 font-medium">Advanced</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/assessments"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Explore assessments</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Optional: Subtle pattern or decorative element */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Trusted by professionals from leading companies
          </p>
          {/* Add logo cloud here if you want */}
        </div>
      </div>
    </section>
  );
};

export default AIFeatureSection;