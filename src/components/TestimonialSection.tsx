import { Link } from "react-router-dom";
import { Quote, Star, ArrowLeft, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const TestimonialAuthoritySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Jeet is one of the most knowledgeable Salesforce architects I've worked with. His ability to see the big picture while diving into technical details is rare.",
      author: "Sarah Chen",
      role: "CTO at CloudScale",
      image: "SC",
      linkedin: "#",
      rating: 5,
      type: "Client"
    },
    {
      quote: "The training program Jeet designed transformed how our team approaches Salesforce development. Our productivity increased by 40% within 3 months.",
      author: "Michael Rodriguez",
      role: "VP Engineering at TechFlow",
      image: "MR",
      linkedin: "#",
      twitter: "#",
      rating: 5,
      type: "Enterprise Client"
    },
    {
      quote: "As a fellow architect, I constantly refer to Jeet's insights on system design. His content has helped me avoid common pitfalls in large-scale implementations.",
      author: "David Kumar",
      role: "Lead Architect at InnovateNow",
      image: "DK",
      linkedin: "#",
      rating: 5,
      type: "Peer"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white">
      <div className="container-wide section-padding">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Stats & Recognition */}
          <div className="lg:col-span-5">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full">
              Trusted by Industry Leaders
            </span>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-6">
              What peers and clients say about working with me
            </h2>
            
            <div className="space-y-6">
              {/* Recognition Badges */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white"></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">50+</span> trusted by leading companies
                </div>
              </div>

              {/* Rating Summary */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4.9</div>
                  <div className="text-xs text-gray-500">out of 5</div>
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Based on 100+ reviews</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-xs text-gray-500">Years architecting</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-xs text-gray-500">Projects delivered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 text-6xl text-blue-200 opacity-50">"</div>
              
              {/* Testimonial Card */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
                
                {/* Type Badge */}
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-6">
                  {testimonials[activeIndex].type} Testimonial
                </span>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[activeIndex].image}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonials[activeIndex].author}</div>
                      <div className="text-sm text-gray-500">{testimonials[activeIndex].role}</div>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-2">
                    {testimonials[activeIndex].linkedin && (
                      <a href={testimonials[activeIndex].linkedin} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {testimonials[activeIndex].twitter && (
                      <a href={testimonials[activeIndex].twitter} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAuthoritySection;