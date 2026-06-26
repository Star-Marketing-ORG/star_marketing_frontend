import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import { webDevelopmentServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { webDevelopmentApproachData } from "../../../assets/approachData/devApprochData";
import { webParagraphData } from "../../../assets/paraData/paraData";

import wdImg from "../../../assets/images/servicesImgs/devImgs/webDevImgs/wdImg1.jpg";

const WebDevelopment = () => {
  const title =
    "Build fast, scalable websites that turn ideas into digital experiences";
  const desc =
    "We develop high-performance, responsive websites using modern technologies—engineered to grow with your business and deliver seamless user experiences.";
  const smdesc = "Web Development";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Web Development Services | Star Marketing - Scalable Websites & Web Apps India & UK"
        description="Star Marketing delivers high-performance web development services including responsive websites, custom web applications, CMS integration, and e-commerce solutions. Trusted by brands in India and the UK for digital transformation."
        keywords="web development India, custom website UK, responsive websites, e-commerce development, CMS solutions, frontend backend development, scalable web apps, website development company, professional web developers"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={webDevelopmentServiceData} />

      {/* CTA Button */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
              Start Your Project
            </span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>
      </div>

      {/* Approach Section - Using your Service component */}
      <Service approachData={webDevelopmentApproachData} />

      {/* Features Section - Split Layout */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-16 md:mb-24">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR EXPERTISE
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                {webParagraphData.title}
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                From frontend to backend, we deliver complete development
                solutions tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Content - Image Right + List Left */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - List */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {webParagraphData.paragraphDataItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-7 hover:border-border-accent transition-all duration-500 group"
                  >
                    <span className="font-mono text-xs text-primary font-bold tracking-[3px] mb-3 block">
                      /0{index + 1}
                    </span>
                    <h4 className="font-heading text-base sm:text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="font-primary text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-full min-h-[400px] group sticky top-28">
                <img
                  src={wdImg}
                  alt="Web development"
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

export default WebDevelopment;