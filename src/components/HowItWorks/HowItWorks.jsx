import { FiArrowRight } from "react-icons/fi";
import how_img from "../../assets/images/how.jpg";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
              <div className="lg:flex-1">
                <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                  <span className="w-10 h-px bg-primary block" />
                  OUR PROCESS
                </div>
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                  How It Works
                </h2>
              </div>
              <div className="lg:w-[400px]">
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                  Explore how our website functions, how social media strategies
                  are implemented, and how everything works together to deliver
                  impactful marketing results.
                </p>
              </div>
            </div>
          </div>

          {/* Content - Split Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left - Links */}
            <div className="lg:w-[45%] flex flex-col justify-center gap-4 sm:gap-5">
              <Link
                to="/how-website-works?"
                className="group flex items-center justify-between bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-border-accent transition-all duration-500"
              >
                <div>
                  <span className="font-mono text-xs text-primary font-bold tracking-[3px] mb-2 block">
                    /01
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    How Website Works?
                  </h3>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <FiArrowRight className="text-text-secondary group-hover:text-bg-primary text-lg sm:text-xl transition-all duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>

              <Link
                to="/how-social-media-works?"
                className="group flex items-center justify-between bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-border-accent transition-all duration-500"
              >
                <div>
                  <span className="font-mono text-xs text-primary font-bold tracking-[3px] mb-2 block">
                    /02
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    How Social Media Works?
                  </h3>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <FiArrowRight className="text-text-secondary group-hover:text-bg-primary text-lg sm:text-xl transition-all duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[55%]">
              <div className="relative rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={how_img}
                  alt="How it works"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent"></div>
                
                {/* Glow border on hover */}
                <div className="absolute inset-0 border-2 border-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;