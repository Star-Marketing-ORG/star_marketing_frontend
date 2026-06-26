import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  const words =
    "We strongly believe in the power of creativity and forward thinking";
  const wordsArray = words.split(" "); // Convert to array of words
  const halfIndex = Math.ceil(wordsArray.length / 2);
  const firstHalf = wordsArray.slice(0, halfIndex).join(" ");
  const secondHalf = wordsArray.slice(halfIndex).join(" ");

  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-8 md:mb-12">
            <span className="w-10 h-px bg-primary block" />
            ABOUT US
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            {/* Heading */}
            <div className="lg:flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary uppercase leading-[1] font-heading max-w-[900px] mx-auto">
                {firstHalf} <span className="outline-text">{secondHalf}</span>
              </h1>
            </div>

            {/* Description */}
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Star Marketing specialises in a full range of digital services
                for businesses. We have a dynamic group of exceptionally
                talented individuals who are all driven by a shared passion for
                what we do.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5 lg:gap-6 mt-16 md:mt-24">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "200+", label: "Projects Delivered" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border-primary rounded-3xl p-6 sm:p-8 hover:border-border-accent transition-all duration-500 group"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-none mb-3 font-heading">
                  {stat.number}
                </div>
                <p className="text-xs uppercase tracking-[3px] text-text-secondary font-primary group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
