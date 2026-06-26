import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Star Marketing";
  }, []);

  return (
    <div className="bg-bg-primary min-h-screen flex items-center justify-center">
      <div className="px-5 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        <div className="max-w-[700px] mx-auto text-center">
          {/* Large 404 */}
          <h1 className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] font-extrabold leading-none font-heading mb-4">
            <span className="text-text-primary">4</span>
            <span className="text-primary">0</span>
            <span className="text-text-primary">4</span>
          </h1>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
            <span className="w-10 h-px bg-primary block" />
            PAGE NOT FOUND
            <span className="w-10 h-px bg-primary block" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary uppercase leading-tight mb-6 font-heading">
            Sorry, we couldn't find that page.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-4 font-semibold tracking-[2px] uppercase text-xs transition-all duration-300"
            >
              <span>Back to Home</span>
              <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-3 border border-border-secondary hover:border-primary text-text-primary hover:text-primary rounded-full px-8 py-4 font-semibold tracking-[2px] uppercase text-xs transition-all duration-300"
            >
              <span>Contact Us</span>
              <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
