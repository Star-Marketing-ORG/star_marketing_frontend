import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { supportAndMaintenanceServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { supportAndMaintenanceApproachData } from "../../../assets/approachData/devApprochData";

import supportImg from "../../../assets/images/servicesImgs/devImgs/supportImgs/suImg.jpg";

const Support = () => {
  const title =
    "Keep your digital products running smoothly with expert support & maintenance";
  const desc =
    "From regular updates to performance monitoring and issue resolution, we provide ongoing support to ensure your website, app, or software stays secure, efficient, and up-to-date.";
  const smdesc = "Support & Maintenance";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Support & Maintenance | Star Marketing - Ongoing Website & App Care India & UK"
        description="Star Marketing provides reliable support and maintenance services for websites and mobile apps. Ensure your digital platforms stay secure, updated, and fully optimized with our expert team in India and the UK."
        keywords="website support, app maintenance, technical support, digital platform upkeep, website care plans, mobile app support, maintenance agency India, UK web support services"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Intro Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-b border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Dedicated Support & Maintenance Solutions
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Your digital product doesn't end at launch — that's where ongoing
                support becomes critical. Our tailored Support & Maintenance
                services ensure your platform stays secure, updated, and running
                at peak performance.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Unlike off-the-shelf solutions, our custom support plans are
                designed around your unique business needs, with flexible service
                levels, proactive improvements, and seamless integration with
                your existing infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <ServiceSlider serviceData={supportAndMaintenanceServiceData} />

      {/* CTA Button */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
              Get Support
            </span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>
      </div>

      {/* Approach Section */}
      <Service approachData={supportAndMaintenanceApproachData} />

      {/* Support Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                ONGOING CARE
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                End-to-End Support & Maintenance for Your Digital Solutions
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                At Star Marketing, we believe long-term success comes from
                consistent care and attention. Our holistic Support & Maintenance
                services go far beyond simple fixes — we offer proactive
                monitoring, regular updates, security patching, performance
                optimization, and on-demand troubleshooting to keep your systems
                running smoothly.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Whether it's a custom-built website, mobile app, or enterprise
                software, our experienced team ensures stability, speed, and
                security through every stage of your digital journey. With access
                to over 100 specialists across development, design, SEO, and
                marketing, we deliver integrated support that evolves with your
                business needs.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-8">
                Want to learn more about how our all-in-one support approach can
                drive long-term reliability and performance?
              </p>
              <div>
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
                    Your Digital Partner
                  </span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={supportImg}
                  alt="Support and maintenance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;