import { Link } from "react-router-dom";
import { 
  Mic, Calendar, MapPin, Users, Award, BookOpen, 
  ArrowRight, ExternalLink, Video 
} from "lucide-react";

const SpeakingAuthoritySection = () => {
  const speakingEvents = [
    {
      title: "Keynote: The Future of Salesforce Architecture",
      event: "Dreamforce 2024",
      date: "Sep 2024",
      location: "San Francisco, CA",
      type: "Keynote",
      attendees: "2000+",
      link: "#"
    },
    {
      title: "Building Scalable Multi-Cloud Solutions",
      event: "TrailblazerDX",
      date: "Mar 2024",
      location: "Virtual",
      type: "Technical Workshop",
      attendees: "500+",
      link: "#"
    },
    {
      title: "Enterprise Architecture Patterns",
      event: "World Tour NYC",
      date: "Jun 2024",
      location: "New York, NY",
      type: "Breakout Session",
      attendees: "300+",
      link: "#"
    }
  ];

  const publications = [
    {
      title: "Architecting for Scale: A Salesforce Guide",
      publisher: "TechCrunch",
      date: "2024",
      type: "Featured Article"
    },
    {
      title: "The Evolution of Salesforce Development",
      publisher: "CIO Review",
      date: "2023",
      type: "Cover Story"
    },
    {
      title: "Best Practices in Multi-Cloud Strategy",
      publisher: "VentureBeat",
      date: "2023",
      type: "Expert Opinion"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide section-padding">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Mic className="w-4 h-4" />
            <span>Thought Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Recognized voice in the Salesforce community
          </h2>
          <p className="text-gray-600 text-lg">
            Regular speaker at industry conferences and contributor to leading publications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Speaking Engagements */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Speaking</h3>
              <Link to="/speaking" className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-4">
              {speakingEvents.map((event, i) => (
                <a
                  key={i}
                  href={event.link}
                  className="block group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Date Badge */}
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="text-sm font-bold text-blue-600">{event.date.split(' ')[0]}</div>
                      <div className="text-xs text-gray-500">{event.date.split(' ')[1]}</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {event.type}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Users className="w-3 h-3" /> {event.attendees}
                        </span>
                      </div>

                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h4>
                      
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">{event.event}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {event.location}
                        </span>
                      </div>
                    </div>

                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            {/* Video Preview */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full">
                  <Video className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Watch my Dreamforce 2024 keynote</div>
                  <div className="text-xs text-gray-500">Scalable Architecture in Practice</div>
                </div>
                <Link to="/watch" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Watch now →
                </Link>
              </div>
            </div>
          </div>

          {/* Publications & Recognition */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Featured Publications</h3>
              <Link to="/publications" className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-4">
              {publications.map((pub, i) => (
                <div key={i} className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                          {pub.type}
                        </span>
                        <span className="text-xs text-gray-400">{pub.date}</span>
                      </div>

                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {pub.title}
                      </h4>
                      
                      <div className="text-sm text-gray-500">
                        {pub.publisher}
                      </div>
                    </div>

                    <Award className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Recognition Badge */}
            <div className="mt-6 p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-100">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-amber-600" />
                <span className="font-bold text-gray-900">2024 Community Impact Award</span>
              </div>
              <p className="text-sm text-gray-600">
                Recognized by Salesforce for outstanding contributions to the architect community through speaking, mentoring, and content creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingAuthoritySection;