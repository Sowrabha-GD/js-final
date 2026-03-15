import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Award, Briefcase, Clock, MapPin,
  CheckCircle, ArrowRight, Star, TrendingUp,
  Globe, Users, Building2, Phone,
  Mail, Calendar, Shield, Zap,
  Rocket, Target, Sparkles, Landmark,
  BarChart, Cloud, Server, Code,
  Euro, Cpu, Wifi, Factory
} from "lucide-react";

const SalesforceArchitektFreiberuflerBerlin = () => {
  const expertiseAreas = [
    {
      title: "Digitale Transformation",
      description: "End-to-End Salesforce-Strategie für Berliner Unternehmen und Startups",
      icon: Rocket
    },
    {
      title: "DSGVO & Compliance",
      description: "Vollständig DSGVO-konforme Architekturen für deutsche Datenschutzanforderungen",
      icon: Shield
    },
    {
      title: "Integrationsarchitektur",
      description: "Nahtlose Integration von Salesforce mit SAP und anderen Unternehmenssystemen",
      icon: Cloud
    },
    {
      title: "Startup-Skalierung",
      description: "Skalierbare Architekturen für Berlins wachsende Startup-Szene",
      icon: TrendingUp
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Berlin-Präsenz",
      description: "Regelmäßige Vor-Ort-Termine in Berlin. Eine Woche pro Monat in der Hauptstadt."
    },
    {
      icon: Award,
      title: "CTA-zertifiziert",
      description: "Top 1% der Salesforce-Architekten weltweit. Enterprise-Expertise für Berliner Unternehmen."
    },
    {
      icon: Euro,
      title: "Wettbewerbsfähige Tagessätze",
      description: "€900-1.300/Tag. Premium-Expertise zu fairen Konditionen für den deutschen Markt."
    },
    {
      icon: Wifi,
      title: "Flexibles Arbeiten",
      description: "Hybrides Modell - remote mit regelmäßigen Berlin-Besuchen nach Bedarf."
    }
  ];

  const services = [
    {
      title: "Lösungsarchitektur",
      description: "End-to-End-Lösungsdesign für komplexe Berliner Unternehmensanforderungen",
      rate: "€1.000-1.300/Tag",
      deliverables: ["Lösungspläne", "Integrationsdesign", "Datenmodelle", "Sicherheitsarchitektur"]
    },
    {
      title: "Technische Beratung",
      description: "Strategische Beratung für CTOs und Technologieführer",
      rate: "€900-1.200/Tag",
      deliverables: ["Architektur-Reviews", "Technologie-Roadmap", "Governance-Framework", "Team-Mentoring"]
    },
    {
      title: "Implementierungsunterstützung",
      description: "Praktische Architektur für kritische Projekte",
      rate: "€850-1.100/Tag",
      deliverables: ["Code-Reviews", "Performance-Optimierung", "Sicherheitsaudits", "Go-Live-Support"]
    },
    {
      title: "Organisationsanalyse",
      description: "Umfassende Gesundheitsprüfung Ihrer Salesforce-Org",
      rate: "€8.000-12.000 Festpreis",
      deliverables: ["Technische Schuldenanalyse", "Performance-Benchmarks", "Sicherheitsbewertung", "Empfehlungsbericht"]
    }
  ];

  const testimonials = [
    {
      quote: "Jeet hat unsere Startup-Architektur von Grund auf neu aufgebaut. Seine Skalierbarkeit hat uns geholfen, 300% Wachstum ohne Ausfallzeiten zu bewältigen.",
      author: "Dr. Anna Weber",
      role: "CTO",
      company: "Berliner FinTech-Startup",
      rating: 5,
      image: "AW"
    },
    {
      quote: "Die DSGVO-Konformität war unsere größte Sorge. Jeet hat eine Lösung geliefert, die alle deutschen Datenschutzanforderungen erfüllt und gleichzeitig benutzerfreundlich ist.",
      author: "Thomas Schmidt",
      role: "Leiter Digitale Transformation",
      company: "Berliner Mittelstandsunternehmen",
      rating: 5,
      image: "TS"
    }
  ];

  const recentProjects = [
    {
      client: "Berliner FinTech",
      project: "Skalierbare Architektur",
      duration: "6 Monate",
      impact: "300% Nutzerwachstum ohne Ausfallzeiten bewältigt"
    },
    {
      client: "E-Health Startup",
      project: "DSGVO-konforme Patientenplattform",
      duration: "8 Monate",
      impact: "100% DSGVO-Konformität, 200k+ Nutzer"
    },
    {
      client: "Berliner E-Commerce",
      project: "SAP-Integration",
      duration: "4 Monate",
      impact: "Echtzeit-Synchronisation mit SAP-Systemen"
    }
  ];

  const berlinBezirke = [
    "Berlin-Mitte",
    "Prenzlauer Berg",
    "Kreuzberg",
    "Friedrichshain",
    "Charlottenburg",
    "Potsdamer Platz"
  ];

  const startupStats = [
    { label: "Startups in Berlin", value: "2.500+" },
    { label: "Tech-Mitarbeiter", value: "100.000+" },
    { label: "Finanzierungsvolumen", value: "€5 Mrd.+", description: "2023" },
    { label: "Unicorns", value: "20+" }
  ];

  const faqs = [
    {
      q: "Sprechen Sie Deutsch?",
      a: "Ja, ich habe fließende Deutschkenntnisse und kann technische Gespräche auf Deutsch führen. Komplexe Diskussionen können bei Bedarf auch auf Englisch geführt werden."
    },
    {
      q: "Wie oft sind Sie vor Ort in Berlin?",
      a: "Ich bin in der Regel eine Woche pro Monat in Berlin und nach Bedarf für wichtige Termine. Hybrid-Arbeit ist mein Standardmodell."
    },
    {
      q: "Wie hoch ist Ihr Tagessatz?",
      a: "Mein Tagessatz liegt zwischen €900-1.300, abhängig von Umfang, Dauer und Komplexität des Projekts. Festpreisprojekte sind ebenfalls möglich."
    },
    {
      q: "Haben Sie Erfahrung mit deutschen Startups?",
      a: "Absolut. Ich habe mit zahlreichen Berliner Startups gearbeitet, von der Frühphase bis zum Unicorn. Ich verstehe die besonderen Anforderungen wachsender Unternehmen."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Berlin Modern Theme */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-amber-700 text-white overflow-hidden">
        {/* Berlin Skyline Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <g fill="white">
              {/* Fernsehturm (TV Tower) */}
              <rect x="300" y="150" width="20" height="150" />
              <circle cx="310" cy="140" r="15" />
              
              {/* Brandenburg Gate simplified */}
              <rect x="400" y="200" width="60" height="20" />
              <rect x="420" y="150" width="10" height="50" />
              <rect x="440" y="150" width="10" height="50" />
              
              {/* Modern buildings - Potsdamer Platz style */}
              <rect x="500" y="100" width="30" height="200" />
              <rect x="550" y="80" width="30" height="220" />
              <rect x="600" y="120" width="30" height="180" />
              
              {/* Startup scene - coworking spaces */}
              <rect x="100" y="250" width="20" height="50" />
              <rect x="130" y="230" width="20" height="70" />
              <rect x="160" y="210" width="20" height="90" />
              <circle cx="150" cy="200" r="5" />
              <circle cx="180" cy="180" r="5" />
            </g>
          </svg>
        </div>

        {/* Floating Orbs - Berlin vibe */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-red-300" />
                <span className="text-red-200 font-medium">Berlin-Mitte • Kreuzberg • Prenzlauer Berg • Potsdamer Platz</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Salesforce Architekt
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-amber-200">
                  Freiberufler • Berlin
                </span>
              </h1>
              
              <p className="text-xl text-red-100 mb-8">
                Enterprise-Salesforce-Architektur für Berlins dynamische Wirtschaft. €900-1.300/Tag.
                DSGVO-konform. Skalierbare Lösungen für Startups, Mittelstand und Konzerne.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
               
              <Link
            to="/ContactFreelancePage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-900 hover:bg-red-50 rounded-xl font-medium transition-all shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Kostenloses Beratungsgespräch
                </Link>
                <a
                  href="tel:+493012345678"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  +49 30 12345678
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['CTA','DSGVO','ISO','BER'].map((badge, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-amber-500 border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                      {badge}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-red-200">Vertrauenspartner Berliner Unternehmen</span>
              </div>
            </motion.div>

            {/* Right Column - Startup Capital Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-4">Berlins Startup-Ökosystem</h2>
              
              <p className="text-sm text-red-200 mb-6">
                Deutschlands Startup-Hauptstadt mit über 2.500 aktiven Startups und 20+ Unicorns.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {startupStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-red-200">{stat.label}</div>
                    {stat.description && (
                      <div className="text-xs text-red-300/70">{stat.description}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-red-400" />
                  <p className="text-sm text-red-200">
                    Von der Seed-Phase bis zum Unicorn - ich helfe Berliner Startups, zu skalieren.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Berlin Districts */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-gray-500">Aktiv in ganz Berlin:</span>
            {berlinBezirke.map((bezirk, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-gray-700">{bezirk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Expertise für <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">Berliner Unternehmen</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <Icon className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <Icon className="w-8 h-8 text-red-600 mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Aktuelle <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">Berlin-Projekte</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-1">{project.client}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.project}</p>
                <p className="text-xs text-gray-500 mb-2">Dauer: {project.duration}</p>
                <p className="text-xs text-green-600 font-semibold">{project.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Rates */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Freiberufliche <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">Dienstleistungen & Preise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {service.rate}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-xs text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Häufig gestellte <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">Fragen</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-800 to-amber-800 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Bereit für Ihr Berliner Projekt?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihr Projekt bei einem Kaffee in Mitte oder einem Video-Call besprechen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
             
              <Link
            to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 hover:bg-red-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                Kostenloses Beratungsgespräch
              </Link>
              <Link
                to="/ContactFreelancePage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                <Mail className="w-4 h-4" />
                Anfrage senden
              </Link>
            </div>
            <p className="text-sm text-red-200 mt-6">
              Ich antworte innerhalb von 2 Stunden - Berliner Effizienz!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesforceArchitektFreiberuflerBerlin;