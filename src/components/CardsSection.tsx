import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // or your preferred icon library

// If you're using Font Awesome instead, you can import like this:
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardsSection = () => {
  const cards = [
    {
      id: "insights",
      title: "Insights",
      description: "Articles on Salesforce architecture, platform design, integrations, and building systems that scale.",
      link: "/insights",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "videos",
      title: "Videos",
      description: "Architecture talks, platform discussions, and deep dives into Salesforce system design.",
      link: "/videos",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "learn",
      title: "Learn",
      description: "Structured learning resources for Salesforce professionals building expertise in architecture and development.",
      link: "/learn",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: "advisory",
      title: "Advisory",
      description: "Architecture consulting and strategic guidance for organizations implementing and scaling Salesforce.",
      link: "/advisory",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#1B4F8A] to-[#1F5E9C]">
      <div className="container-wide section-padding">
        
        {/* 4-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link
              key={card.id}
              to={card.link}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 
                       hover:bg-white/10 hover:shadow-xl hover:-translate-y-1 
                       transition-all duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="text-white/80 group-hover:text-white transition-colors duration-300 mb-4">
                {card.icon}
              </div>

              {/* Title with arrow that appears on hover */}
              <h3 className="text-2xl font-display font-semibold text-white mb-3 flex items-center gap-2">
                {card.title}
                <ArrowRight 
                  className="w-5 h-5 opacity-0 -translate-x-2 
                           group-hover:opacity-100 group-hover:translate-x-0 
                           transition-all duration-300 ease-in-out" 
                />
              </h3>

              {/* Description */}
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CardsSection;