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
  bgColor?: string;
  accentColor?: string;
  className?: string;
}

const CTASectionRight = ({
  title,
  description,
  buttons,
  bgColor = "bg-white",
  accentColor = "text-gray-600",
  className = "",
}: CTASectionRightProps) => {
  return (
    <section className={`${bgColor} ${className}`}>
      <div className="container-wide py-20 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Column - Text */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className={`text-lg ${accentColor} leading-relaxed`}>
              {description}
            </p>
          </div>

          {/* Right Column - Buttons */}
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
                  {button.icon && <span>{button.icon}</span>}
                  <span>{button.text}</span>
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