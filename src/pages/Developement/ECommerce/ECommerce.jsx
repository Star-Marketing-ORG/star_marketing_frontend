import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { ecommerceServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { ecommerceDevelopmentApproachData } from "../../../assets/approachData/devApprochData";

import ecImg from "../../../assets/images/servicesImgs/devImgs/ecImgs/ecImg.jpg";

const ECommerce = () => {
  const title =
    "Launch high-converting eCommerce platforms that drive sales and scale";
  const desc =
    "We build seamless, secure, and user-friendly online stores optimized for performance—designed to grow your brand and deliver a smooth shopping experience across all devices.";
  const smdesc = "eCommerce Development";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="E-commerce Development | Star Marketing - Scalable Online Stores for India & UK"
        description="Star Marketing builds powerful, scalable e-commerce websites tailored to your brand. From Shopify to custom solutions, we deliver conversion-focused online stores for businesses in India and the UK."
        keywords="ecommerce website development, Shopify experts India, WooCommerce stores, online shop design, ecommerce developers UK, custom online store, scalable ecommerce platform, ecommerce UX design"
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
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Future-Ready eCommerce Solutions
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                At Star Marketing, we craft custom eCommerce experiences
                designed to drive sales, streamline operations, and scale with
                your business. Our bespoke platforms go beyond cookie-cutter
                templates — we develop purpose-built online stores that reflect
                your brand and deliver a frictionless shopping journey.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                From secure payment gateway integration to inventory management
                and personalised user flows, every element is engineered for
                performance and conversion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <ServiceSlider serviceData={ecommerceServiceData} />

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

      {/* Approach Section */}
      <Service approachData={ecommerceDevelopmentApproachData} />

      {/* Support Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                ONGOING SUPPORT
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                Holistic eCommerce Support for Sustainable Growth
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                At Star Marketing, we don't just build eCommerce websites — we
                become your long-term growth partner. Our holistic approach means
                we support your business at every stage, from intuitive UX design
                and mobile app development to brand identity, performance
                marketing, and beyond.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-8">
                Our cross-functional team brings together specialists in
                eCommerce SEO, paid media, graphic design, content marketing, and
                analytics to create a powerful ecosystem around your store.
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
                  src={ecImg}
                  alt="eCommerce development"
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

export default ECommerce;