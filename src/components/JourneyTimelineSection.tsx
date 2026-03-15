import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Award, Briefcase, Mic, BookOpen, MapPin, 
  Calendar, Star, TrendingUp, CheckCircle 
} from "lucide-react";

const JourneyTimelineSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const milestones = [
    {
      year: "2010",
      title: "Salesforce Journey Begins",
      description: "Started as a Salesforce Developer, building custom applications and learning the platform inside out.",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      achievements: ["First Salesforce certification", "Completed 5 enterprise projects", "Discovered passion for architecture"],
      location: "Bangalore, India"
    },
    {
      year: "2013",
      title: "Lead Developer",
      description: "Promoted to Lead Developer, mentoring junior team members and leading technical design.",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
      achievements: ["Led team of 8 developers", "Architected first multi-org solution", "Started public speaking"],
      location: "Bangalore, India"
    },
    {
      year: "2015",
      title: "Solution Architect",
      description: "Transitioned to Solution Architect role, designing enterprise-scale solutions for Fortune 500 clients.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      achievements: ["Application Architect certified", "First international client", "Integration specialist"],
      location: "Singapore"
    },
    {
      year: "2017",
      title: "Technical Architect",
      description: "Achieved Technical Architect certification, focusing on complex system design and governance.",
      icon: Star,
      color: "from-amber-500 to-orange-500",
      achievements: ["System Architect certified", "Led $5M transformation program", "Started mentoring program"],
      location: "London, UK"
    },
    {
      year: "2019",
      title: "CTA Achievement",
      description: "Became Salesforce Certified Technical Architect (CTA) - one of the few globally.",
      icon: Award,
      color: "from-red-500 to-rose-500",
      achievements: ["CTA certification", "Keynote at Dreamforce", "Published first architecture guide"],
      location: "San Francisco, CA"
    },
    {
      year: "2021",
      title: "Independent Advisor",
      description: "Launched independent advisory practice, helping startups and enterprises scale.",
      icon: Mic,
      color: "from-indigo-500 to-blue-500",
      achievements: ["50+ enterprise clients", "200+ architecture reviews", "Global speaking circuit"],
      location: "Remote Worldwide"
    },
    {
      year: "2024",
      title: "AI & Agentforce Pioneer",
      description: "Leading the way in Agentic AI, helping companies leverage autonomous agents.",
      icon: BookOpen,
      color: "from-violet-500 to-purple-500",
      achievements: ["Agentforce certified", "AI strategy advisor", "Future of work speaker"],
      location: "Bangalore, India"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden" ref={containerRef}>
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
            The Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
            15 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Architecting Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Every milestone, every achievement - the story of how passion became purpose.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
            style={{ 
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
          />

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
                    >
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${milestone.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                        <Calendar className="w-4 h-4" />
                        {milestone.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-4">
                        {milestone.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-4">
                        {milestone.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className={`w-4 h-4 text-transparent bg-gradient-to-r ${milestone.color} bg-clip-text`} />
                            {achievement}
                          </div>
                        ))}
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {milestone.location}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-xl z-10 relative`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${milestone.color} opacity-30 blur-xl`}></div>
                  </div>

                  {/* Empty Space for Alignment */}
                  <div className="flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {[
            { number: "15+", label: "Years Experience", icon: Star },
            { number: "50+", label: "Enterprise Clients", icon: Briefcase },
            { number: "200+", label: "Projects Delivered", icon: CheckCircle },
            { number: "10+", label: "Countries Visited", icon: MapPin }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all">
                <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimelineSection;