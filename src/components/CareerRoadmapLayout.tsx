
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Award, BookOpen, Target, Clock, Users, Star, CheckCircle, TrendingUp } from "lucide-react";

type ColorScheme = {
  bg: string;
  text: string;
  border: string;
  gradient: string;
  light: string;
};

interface CareerRoadmapProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  salary: string;
  demand: string;
  skills: string[];
  certifications: {
    name: string;
    link: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  }[];
  roadmap: {
    phase: string;
    duration: string;
    steps: string[];
  }[];
  resources: {
    title: string;
    type: "Article" | "Video" | "Course" | "Book";
    link: string;
  }[];
  relatedPaths: {
    title: string;
    link: string;
    color: string;
  }[];
}

const CareerRoadmapLayout = ({
  title,
  icon,
  description,
  color,
  salary,
  demand,
  skills,
  certifications,
  roadmap,
  resources,
  relatedPaths
}: CareerRoadmapProps) => {
  
  const getColorClasses = (color: string) => {
    const colors: Record<string, ColorScheme> = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-600 to-blue-700",
        light: "from-blue-50 to-blue-100"
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-600 to-purple-700",
        light: "from-purple-50 to-purple-100"
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        gradient: "from-emerald-600 to-emerald-700",
        light: "from-emerald-50 to-emerald-100"
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-600 to-orange-700",
        light: "from-orange-50 to-orange-100"
      }
    };
    return colors[color] || colors.blue;
  };

  const colors = getColorClasses(color);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${colors.light} border-b ${colors.border}`}>
        <div className="container-wide py-12">
          
          
          <div className="flex items-start gap-6">
            <div className={`p-4 bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg`}>
              <div className="text-white w-8 h-8">
                {icon}
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                {title} <span className={`${colors.text}`}>Roadmap</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mb-6">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                  <TrendingUp className={`w-4 h-4 ${colors.text}`} />
                  <span className="font-medium">{salary}</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                  <Users className={`w-4 h-4 ${colors.text}`} />
                  <span className="font-medium">{demand} Demand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Skills Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Skills You'll Need</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${colors.text}`} />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Learning Journey</h2>
              
              <div className="space-y-6">
                {roadmap.map((phase, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200 last:border-0 last:pb-0">
                    <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${colors.gradient}`}></div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {phase.steps.map((step, i) => (
                        <li key={i} className="text-gray-600 flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient} mt-2`}></span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Path */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Certifications</h2>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <Award className={`w-5 h-5 ${colors.text}`} />
                      <div>
                        <h3 className="font-medium text-gray-900">{cert.name}</h3>
                        <span className="text-xs text-gray-500">{cert.level}</span>
                      </div>
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Salary</span>
                  <span className="font-bold text-gray-900">{salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Demand</span>
                  <span className={`font-bold ${colors.text}`}>{demand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time to achieve</span>
                  <span className="font-bold text-gray-900">12-18 months</span>
                </div>
              </div>
            </div>

            {/* Free Resources */}
            <div className={`bg-gradient-to-br ${colors.light} rounded-2xl p-6 border ${colors.border}`}>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className={`w-5 h-5 ${colors.text}`} />
                Free Learning Resources
              </h3>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.link}
                    className="block p-3 bg-white rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">{resource.type}</span>
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mentorship CTA */}
            <div className="bg-gray-900 text-white rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">Need guidance?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get personalized mentorship from Jeet to accelerate your career.
              </p>
              <Link 
                to="/TrainingPage"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Explore Training Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Related Paths */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Related Career Paths</h3>
              <div className="space-y-2">
                {relatedPaths.map((path, index) => {
                  const pathColors = getColorClasses(path.color);
                  return (
                    <Link 
                      key={index}
                      to={path.link}
                      className={`block p-3 ${pathColors.bg} rounded-xl hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${pathColors.text}`}>{path.title}</span>
                        <ArrowRight className={`w-4 h-4 ${pathColors.text}`} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmapLayout;