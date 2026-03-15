import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAButton {
  text: string;
  link: string;
  primary?: boolean;
  icon?: React.ReactNode;
}

interface CTASectionLeftProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  bgColor?: string;
  accentColor?: string;
  className?: string;
}

const CTASectionLeft = ({
  title,
  description,
  buttons,
  bgColor = "bg-gray-50",
  accentColor = "text-gray-600",
  className = "",
}: CTASectionLeftProps) => {
  return (
    <section className={`${bgColor} ${className}`}>
      <div className="container-wide py-20 md:py-24">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
          {/* Right Column - Text (appears on right in desktop) */}
          <div className="max-w-xl text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className={`text-lg ${accentColor} leading-relaxed`}>
              {description}
            </p>
          </div>

          {/* Left Column - Buttons (appears on left in desktop) */}
          <div className="flex flex-col sm:flex-row gap-4">
            {buttons.map((button, index) => (
              button.primary ? (
                <Link
                  key={index}
                  to={button.link}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all duration-300"
                >
                  <span>{button.text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <Link
                  key={index}
                  to={button.link}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-all duration-300"
                >
                  {button.icon && <span className="mr-1">{button.icon}</span>}
                  <span>{button.text}</span>
                  {!button.icon && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASectionLeft;