import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Plane, Hotel, Compass, Map, 
  Users, Star, Calendar, Clock,
  CheckCircle, ArrowRight, Award, Sparkles,
  Globe, Luggage, Coffee, Camera,
  Sun, Umbrella, Ship, Train
} from "lucide-react";

const TravelHospitalityPage = () => {
  const verticals = [
    {
      name: "Hotels & Resorts",
      icon: Hotel,
      description: "Deliver personalized guest experiences from booking to check-out.",
      challenges: ["Guest 360", "Loyalty integration", "Personalization", "Revenue management"],
      solutions: ["Guest profiles", "Loyalty cloud", "AI recommendations", "Rate optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Airlines",
      icon: Plane,
      description: "Transform passenger journeys with seamless, personalized travel experiences.",
      challenges: ["Passenger 360", "Flight disruptions", "Loyalty programs", "Ancillary sales"],
      solutions: ["Passenger profiles", "Real-time alerts", "Miles management", "Upsell optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Cruise Lines",
      icon: Ship,
      description: "Create memorable voyage experiences with personalized onboard and shore services.",
      challenges: ["Pre-cruise planning", "Onboard experience", "Shore excursions", "Crew management"],
      solutions: ["Guest portals", "Onboard apps", "Excursion booking", "Crew collaboration"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Online Travel Agencies",
      icon: Globe,
      description: "Connect travelers with the perfect accommodations and experiences.",
      challenges: ["Inventory management", "Booking experience", "Personalization", "Supplier integration"],
      solutions: ["OTA platform", "Recommendation engine", "Dynamic packaging", "Supplier portals"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Restaurants & Dining",
      icon: Coffee,
      description: "Delight guests with personalized dining experiences and loyalty programs.",
      challenges: ["Reservations", "Guest preferences", "Waitlist management", "Loyalty"],
      solutions: ["Booking platform", "Preference tracking", "Table management", "Rewards"],
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Experiences & Activities",
      icon: Compass,
      description: "Curate unforgettable local experiences and adventures.",
      challenges: ["Discovery", "Booking", "Operator management", "Reviews"],
      solutions: ["Experience marketplace", "Real-time availability", "Operator portals", "Review management"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const useCases = [
    {
      title: "Guest 360",
      description: "Unified profile across all touchpoints - pre-booking to post-stay",
      impact: "35% increase in repeat bookings",
      icon: Users
    },
    {
      title: "Personalized Offers",
      description: "AI-powered recommendations based on preferences and behavior",
      impact: "45% higher conversion",
      icon: Sparkles
    },
    {
      title: "Loyalty Transformation",
      description: "Modern loyalty programs that drive engagement and spend",
      impact: "60% more redemptions",
      icon: Star
    },
    {
      title: "Seamless Service",
      description: "Real-time service recovery and proactive guest care",
      impact: "50% faster issue resolution",
      icon: Clock
    }
  ];

  const solutions = [
    {
      category: "Guest Experience",
      items: [
        { name: "Unified Guest Profile", description: "Complete view of preferences, history, and behavior" },
        { name: "Personalized Recommendations", description: "AI-driven offers and experiences" },
        { name: "Mobile Guest App", description: "Check-in, room key, service requests, and more" },
        { name: "Guest Messaging", description: "Real-time communication via preferred channels" }
      ]
    },
    {
      category: "Operations",
      items: [
        { name: "Property Management Integration", description: "Seamless PMS connectivity" },
        { name: "Housekeeping Optimization", description: "Real-time room status and task management" },
        { name: "Maintenance Requests", description: "Automated work orders and tracking" },
        { name: "Inventory Management", description: "Real-time availability across channels" }
      ]
    },
    {
      category: "Loyalty & Marketing",
      items: [
        { name: "Loyalty Cloud", description: "Points, tiers, and rewards management" },
        { name: "Campaign Automation", description: "Personalized pre-arrival and post-stay emails" },
        { name: "Segmentation", description: "Targeted offers based on behavior and preferences" },
        { name: "Analytics & Insights", description: "Revenue optimization and performance tracking" }
      ]
    },
    {
      category: "Distribution",
      items: [
        { name: "Channel Management", description: "Real-time inventory across OTAs and direct" },
        { name: "Rate Optimization", description: "Dynamic pricing based on demand" },
        { name: "Group Booking", description: "Streamlined events and group reservations" },
        { name: "Corporate Accounts", description: "Negotiated rates and business travel" }
      ]
    }
  ];

  const guestJourney = [
    {
      stage: "Dream & Discover",
      icon: Compass,
      description: "Inspiration, search, and destination discovery"
    },
    {
      stage: "Plan & Book",
      icon: Calendar,
      description: "Seamless booking, upgrades, and add-ons"
    },
    {
      stage: "Pre-Arrival",
      icon: Luggage,
      description: "Mobile check-in, preferences, and special requests"
    },
    {
      stage: "On-Site Experience",
      icon: Hotel,
      description: "Mobile key, service requests, and dining"
    },
    {
      stage: "Post-Stay",
      icon: Star,
      description: "Feedback, loyalty, and next stay booking"
    }
  ];

  const testimonials = [
    {
      quote: "Jeet transformed our guest experience across 50+ properties. Our loyalty program now drives 60% of repeat bookings, and guest satisfaction scores are at an all-time high.",
      author: "Elena Rodriguez",
      role: "VP of Guest Experience",
      company: "Luxury Resorts International",
      image: "ER"
    },
    {
      quote: "The personalized booking platform Jeet architected has revolutionized how we engage with travelers. Conversion rates are up 45% and our mobile app has 4.9 stars.",
      author: "Marcus Chen",
      role: "Chief Digital Officer",
      company: "Global Travel Group",
      image: "MC"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Plane className="w-4 h-4" />
                Travel & Hospitality
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Create Unforgettable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Guest Experiences</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8">
                Transform every touchpoint of the traveler journey - from dream to booking to stay and beyond.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 hover:bg-purple-50 rounded-xl font-medium transition-all"
                >
                  Schedule consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/TravelHospitalityCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View case studies
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Travel & Hospitality Cloud Expertise
              </h3>
              <div className="space-y-4">
                {[
                  "Guest 360 Implementation",
                  "Loyalty Program Transformation",
                  "Personalization & AI Recommendations",
                  "Mobile Guest Experience",
                  "Revenue & Distribution Optimization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-xs text-purple-200">Hospitality Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs text-purple-200">Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5M+</div>
                  <div className="text-xs text-purple-200">Guest Profiles</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase bg-purple-50 px-4 py-2 rounded-full">
              Industry Verticals
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Travel Ecosystem</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Deep expertise across every segment of travel and hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vertical, index) => {
              const Icon = vertical.icon;
              
              return (
                <motion.div
                  key={vertical.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vertical.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vertical.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{vertical.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Challenges</h4>
                      <div className="flex flex-wrap gap-1">
                        {vertical.challenges.map((c, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Solutions</h4>
                      <div className="flex flex-wrap gap-1">
                        {vertical.solutions.map((s, i) => (
                          <span key={i} className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-md">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Use Cases</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Real solutions delivering measurable improvements in guest experience and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                  <div className="inline-block bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {useCase.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guest Journey */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              The Connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Guest Journey</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Seamless experiences at every stage of the traveler journey.
            </p>
          </div>

          <div className="relative">
            {/* Journey Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {guestJourney.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 z-10 text-center"
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.stage}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    
                    {/* Connector Dot */}
                    {index < guestJourney.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-purple-600 rounded-full transform translate-x-1/2 -translate-y-1/2 z-20"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Hospitality Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end capabilities for modern travel and hospitality businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{solution.category}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {solution.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty & Personalization */}
      <section className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Star className="w-4 h-4" />
                Loyalty & Personalization
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Turn Guests into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Loyal Advocates</span>
              </h2>
              
              <p className="text-lg text-purple-100 mb-8">
                Modern loyalty programs that drive repeat business and deep personalization that delights guests at every touchpoint.
              </p>

              <div className="space-y-4">
                {[
                  "Points, tiers, and rewards management",
                  "AI-powered personalization engine",
                  "Omnichannel engagement",
                  "Partner integrations",
                  "Real-time offers and upsells",
                  "Predictive analytics for churn prevention"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-6">Loyalty Program Results</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Repeat Bookings</span>
                    <span className="font-bold text-purple-300">+60%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Guest Lifetime Value</span>
                    <span className="font-bold text-purple-300">+45%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Redemption Rate</span>
                    <span className="font-bold text-purple-300">+80%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-xs text-purple-200">App Store Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-xs text-purple-200">Active Members</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Hospitality Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-purple-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to transform the guest experience?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you create unforgettable journeys that keep guests coming back.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/TravelHospitalityCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View travel case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TravelHospitalityPage;