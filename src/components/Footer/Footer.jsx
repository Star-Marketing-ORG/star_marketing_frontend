import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-bg-primary border-t border-border-secondary">
      {/* Large CTA Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-24 border-b border-border-secondary">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading mb-8">
            Let's create
            <span className="block outline-text">something great</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-4 font-semibold tracking-[2px] uppercase text-xs transition-all duration-300"
            >
              <span>Start a Project</span>
              <FiArrowUpRight className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2 border border-border-secondary hover:border-primary text-text-primary hover:text-primary rounded-full px-8 py-4 font-semibold tracking-[2px] uppercase text-xs transition-all duration-300"
            >
              <span>Book a Consultation</span>
              <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left - Brand + Address */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary font-heading mb-6">
                Star Marketing
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-primary text-lg flex-shrink-0 mt-0.5" />
                  <p className="text-text-secondary font-primary text-sm leading-relaxed">
                    Near by Fatima masjid Fathepur road,
                    <br />
                    Sikar, 332001, Rajasthan
                  </p>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <FiPhone className="text-primary text-lg flex-shrink-0" />
                  <a
                    href="tel:+918209326351"
                    className="text-text-secondary group-hover:text-primary transition-colors duration-300 font-primary text-sm"
                  >
                    +91 8209326351
                  </a>
                  <FiArrowUpRight className="text-xs text-primary opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <FiMail className="text-primary text-lg flex-shrink-0" />
                  <a
                    href="mailto:Hr@wingstarmarketing.com"
                    className="text-text-secondary group-hover:text-primary transition-colors duration-300 font-primary text-sm"
                  >
                    Hr@wingstarmarketing.com
                  </a>
                  <FiArrowUpRight className="text-xs text-primary opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Right - Links Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* Services */}
                <div>
                  <h4 className="text-xs text-primary uppercase tracking-[3px] font-bold mb-5 font-primary">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { label: "Web Design", to: "/design/web-design" },
                      {
                        label: "Web Development",
                        to: "/development/web-development",
                      },
                      {
                        label: "Marketing Strategy",
                        to: "/marketing/marketing-strategy",
                      },
                      { label: "SEO", to: "/marketing/seo" },
                      { label: "Branding", to: "/design/branding" },
                      { label: "Graphic Design", to: "/design/graphic-design" },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.to}
                          className="text-text-secondary hover:text-primary transition-colors duration-300 font-primary text-sm inline-flex items-center gap-1 group/link"
                        >
                          {item.label}
                          <FiArrowUpRight className="text-xs opacity-0 group-hover/link:opacity-100 -translate-y-1 translate-x-1 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-xs text-primary uppercase tracking-[3px] font-bold mb-5 font-primary">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { label: "About Us", to: "/about-us" },
                      { label: "Founder's Message", to: "/founder" },
                      { label: "Contact Us", to: "/contact-us" },
                      { label: "Star Studio", to: "#" },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.to}
                          className="text-text-secondary hover:text-primary transition-colors duration-300 font-primary text-sm inline-flex items-center gap-1 group/link"
                        >
                          {item.label}
                          <FiArrowUpRight className="text-xs opacity-0 group-hover/link:opacity-100 -translate-y-1 translate-x-1 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social */}
                <div>
                  <h4 className="text-xs text-primary uppercase tracking-[3px] font-bold mb-5 font-primary">
                    Connect
                  </h4>
                  <ul className="space-y-3">
                    {[
                      {
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/company/star-marketings/",
                      },
                      {
                        label: "Instagram",
                        href: "https://www.instagram.com/star_marketings",
                      },
                      {
                        label: "Facebook",
                        href: "https://www.facebook.com/share/1EVxbiNFbH/",
                      },
                    ].map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-primary transition-colors duration-300 font-primary text-sm inline-flex items-center gap-1 group/link"
                        >
                          {item.label}
                          <FiArrowUpRight className="text-xs opacity-0 group-hover/link:opacity-100 -translate-y-1 translate-x-1 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-12 mt-12 border-t border-border-secondary">
            <p className="text-text-muted text-xs font-primary">
              © {new Date().getFullYear()} Star Marketing. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/terms-and-conditions"
                className="text-text-muted hover:text-text-secondary transition-colors duration-300 text-xs font-primary"
              >
                Terms & Conditions
              </Link>
              <span className="text-border-secondary text-xs">|</span>
              <Link
                to="/privacy-policy"
                className="text-text-muted hover:text-text-secondary transition-colors duration-300 text-xs font-primary"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
