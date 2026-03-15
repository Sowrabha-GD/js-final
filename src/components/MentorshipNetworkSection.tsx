import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, Award, TrendingUp, MessageCircle, 
  Linkedin, Mail, Star, Sparkles 
} from "lucide-react";

const MentorshipNetworkSection = () => {
  const [hoveredMentee, setHoveredMentee] = useState<number | null>(null);

  const mentees = [
    {
      name: "Priya Sharma",
      role: "Technical Architect",
      company: "Google",
      image: "PS",
      achievement: "CTA 2023",
      story: "From developer to architect in 3 years",
      impact: "Now leading AI initiatives",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Rahul Verma",
      role: "Solution Architect",
      company: "Salesforce",
      image: "RV",
      achievement: "Application Architect",
      story: "Started as admin, now designs enterprise solutions",
      impact: "Leading $10M implementations",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Anjali Patel",
      role: "Senior Consultant",
      company: "Deloitte",
      image: "AP",
      achievement: "Rising Star 2024",
      story: "Fastest promotion in firm history",
      impact: "Mentoring 5 junior consultants",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Vikram Singh",
      role: "Lead Developer",
      company: "Amazon",
      image: "VS",
      achievement: "Innovation Award",
      story: "Built AI-powered service bot",
      impact: "Saved 10,000+ support hours",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Neha Gupta",
      role: "Product Manager",
      company: "Microsoft",
      image: "NG",
      achievement: "Product Launch Lead",
      story: "From BA to PM in 2 years",
      impact: "Launched AI copilot feature",
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Arjun Nair",
      role: "Salesforce Architect",
      company: "TCS",
      image: "AN",
      achievement: "Young Architect 2024",
      story: "Mentored through CTA journey",
      impact: "Now mentoring 10+ team members",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Kavita Reddy",
      role: "Integration Specialist",
      company: "IBM",
      image: "KR",
      achievement: "Patent Filed",
      story: "Developed novel integration pattern",
      impact: "Company-wide adoption",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Suresh Menon",
      role: "Practice Head",
      company: "Infosys",
      image: "SM",
      achievement: "Built 50+ team",
      story: "From architect to practice leader",
      impact: "Grew practice to 200+",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 overflow-hidden">
      <div className="container-wide relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Users className="w-4 h-4" />
            Mentorship Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Growing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Next Generation</span>
          </h2>
          <p className="text-gray-300 text-lg">
            50+ professionals mentored to architect roles. Each dot represents a success story.
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Central Node - You */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredMentee(-1)}
              onMouseLeave={() => setHoveredMentee(null)}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">JS</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur-xl"></div>
              
              {/* Pulse Animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-30"></div>
              
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <span className="font-bold">Jeet Singh</span>
                <span className="text-gray-300 ml-2">Mentor</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
            </defs>
            
            {mentees.map((mentee, index) => {
              const angle = (index * (360 / mentees.length)) * (Math.PI / 180);
              const radius = 220;
              const x = Math.cos(angle) * radius + 50;
              const y = Math.sin(angle) * radius + 50;
              
              return (
                <motion.line
                  key={index}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* Mentee Nodes */}
          {mentees.map((mentee, index) => {
            const angle = (index * (360 / mentees.length)) * (Math.PI / 180);
            const radius = 220;
            const x = Math.cos(angle) * radius + 50;
            const y = Math.sin(angle) * radius + 50;
            
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${x}%`, top: `${y}%` }}
                onMouseEnter={() => setHoveredMentee(index)}
                onMouseLeave={() => setHoveredMentee(null)}
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="relative cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${mentee.color} flex items-center justify-center shadow-xl`}>
                    <span className="text-lg font-bold text-white">{mentee.image}</span>
                  </div>
                  
                  {/* Glow on hover */}
                  {hoveredMentee === index && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 0.5 }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${mentee.color} blur-xl`}
                    />
                  )}
                </motion.div>

                {/* Tooltip on hover */}
                {hoveredMentee === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 bg-gray-800 rounded-xl p-4 shadow-2xl border border-gray-700 z-30"
                  >
                    <div className="text-center">
                      <h4 className="font-bold text-white">{mentee.name}</h4>
                      <p className="text-sm text-blue-400">{mentee.role}</p>
                      <p className="text-xs text-gray-400 mb-2">{mentee.company}</p>
                      
                      <div className="bg-gray-700/50 rounded-lg p-2 mb-2">
                        <p className="text-xs text-gray-300">{mentee.story}</p>
                      </div>
                      
                      <div className="flex items-center justify-center gap-1 text-xs text-yellow-400">
                        <Award className="w-3 h-3" />
                        {mentee.achievement}
                      </div>
                      
                      <div className="flex justify-center gap-2 mt-2">
                        <a href="#" className="p-1 bg-blue-600/20 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-colors">
                          <Linkedin className="w-3 h-3" />
                        </a>
                        <a href="#" className="p-1 bg-purple-600/20 rounded-lg text-purple-400 hover:bg-purple-600 hover:text-white transition-colors">
                          <Mail className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-32">
          {[
            { number: "50+", label: "Mentored to Architect Roles", icon: Users },
            { number: "85%", label: "Promotion Rate", icon: TrendingUp },
            { number: "200+", label: "Career Sessions", icon: MessageCircle },
            { number: "15+", label: "CTAs Developed", icon: Award }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all"
              >
                <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <p className="text-gray-300">
              Want to be part of this constellation? <a href="/FreeResourcesMasterPage" className="text-blue-400 hover:text-blue-300 font-semibold underline decoration-dotted">Join the mentorship program →</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipNetworkSection;