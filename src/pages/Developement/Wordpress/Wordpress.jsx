import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import BrandCards from "../../../components/BrandCards/BrandCards";
import { testingServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { wordpressDevelopmentApproachData } from "../../../assets/approachData/devApprochData";
import { wordpressServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";

import wpImg from "../../../assets/images/servicesImgs/devImgs/wordpressImgs/wpImg.jpg";
import wpImg2 from "../../../assets/images/servicesImgs/devImgs/wordpressImgs/wpImg2.jpg";

const Wordpress = () => {
  const title =
    "Custom WordPress solutions tailored for performance and flexibility";
  const desc =
    "From theme customization to full-scale development, we build responsive, SEO-friendly WordPress websites that are easy to manage and built to grow with your business.";
  const smdesc = "WordPress Development";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="WordPress Development Services | Star Marketing - India & UK Experts"
        description="Star Marketing offers custom WordPress development services including theme design, plugin integration, SEO optimization, and eCommerce solutions. Serving businesses across India & the UK."
        keywords="wordpress development, wordpress experts, custom wordpress site, wordpress SEO, wordpress agency India, UK wordpress developers, wordpress theme design, plugin development"
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
                Tailored WordPress Solutions for Scalable Growth
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Our custom WordPress solutions are designed to meet your unique
                business goals while maintaining the flexibility and performance
                your brand demands.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                With full control over design, functionality, and
                integrations—from plugins and APIs to payment gateways—our
                custom approach delivers a smooth user experience and sets the
                foundation for future scalability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <ServiceSlider serviceData={testingServiceData} />

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
      <Service approachData={wordpressDevelopmentApproachData} />

      {/* Expert Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={wpImg2}
                  alt="WordPress development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR EXPERTISE
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase  font-extrabold text-text-primary leading-tight mb-6 font-heading">
                Expert WordPress Development & Ongoing Support
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                At Star Marketing, we specialise in delivering high-quality
                WordPress solutions tailored to your brand and business goals.
                From custom themes and plugin development to SEO optimisation
                and responsive design, we ensure your website not only looks
                exceptional but also performs seamlessly across all devices.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                We also offer managed WordPress hosting, routine maintenance,
                and security updates to keep your site fast, secure, and
                dependable. Whether you're building a new WordPress site or
                looking to elevate an existing one, our team provides end-to-end
                support to help you grow confidently online.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Options */}
      <ServiceOption serviceOption={wordpressServiceOption} />


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
                Reliable & Ongoing WordPress Support
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                We provide end-to-end WordPress support designed to keep your
                website secure, stable, and running at peak performance. From
                regular updates and plugin management to advanced security
                monitoring and performance tuning, our support ensures your site
                stays ahead of the curve.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Whether you're facing technical challenges or simply need peace
                of mind, our dedicated team is here to deliver fast, reliable
                solutions. With Star Marketing as your WordPress partner, you
                can focus on growing your business while we handle the rest.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={wpImg}
                  alt="WordPress support"
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

export default Wordpress;