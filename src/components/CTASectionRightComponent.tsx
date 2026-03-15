import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAButton {
  text: string;
  link: string;
  primary?: boolean;
  icon?: React.ReactNode;
}

interface CTASectionRightProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  backgroundGradient?: string;
  textColor?: string;
  accentColor?: string;
  className?: string;
}

const CTASectionRight = ({
  title,
  description,
  buttons,
  backgroundGradient = "from-blue-900 to-indigo-900",
  textColor = "text-white",
  accentColor = "text-blue-200",
  className = "",
}: CTASectionRightProps) => {
  return (
    <section className={`relative bg-gradient-to-r ${backgroundGradient} ${textColor} overflow-hidden ${className}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-right" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-right)" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container-wide py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column - Text */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {title}
            </h2>
            <p className={`text-lg ${accentColor} mb-0`}>
              {description}
            </p>
          </div>

          {/* Right Column - Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            {buttons.map((button, index) => (
              button.primary ? (
                <Link
                  key={index}
                  to={button.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  {button.icon && <span>{button.icon}</span>}
                  {button.text}
                  {!button.icon && <ArrowRight className="w-4 h-4" />}
                </Link>
              ) : (
                <Link
                  key={index}
                  to={button.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  {button.icon && <span>{button.icon}</span>}
                  {button.text}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASectionRight;