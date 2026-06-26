import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { seoServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { seoApproachData } from "../../../assets/approachData/marketingApproachData";
import { seoServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import { seoBenefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";

import seoImg1 from "../../../assets/images/servicesImgs/marketingImgs/seoImgs/seoImg.jpg";

const Seo = () => {
  const title =
    "Boost your visibility and rank higher with powerful SEO strategies";
  const desc =
    "From technical audits to content optimization, we deliver tailored SEO solutions that drive organic traffic, improve search rankings, and generate long-term results for your business.";
  const smdesc = "SEO Service";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="SEO Services | Star Marketing - Rank Higher in India & UK"
        description="Boost your online visibility with Star Marketing's expert SEO services. We offer on-page SEO, off-page SEO, technical SEO, and local SEO tailored for businesses in India and the UK."
        keywords="SEO services, on-page SEO, off-page SEO, technical SEO, local SEO, search engine optimization, SEO agency India, SEO company UK, rank higher on Google"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={seoServiceData} />

      {/* CTA Button */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
              Get Started
            </span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <ServiceBanefits benefitsData={seoBenefitData} />

      {/* Stats Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={seoImg1}
                  alt="SEO services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right - Stats */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                PROVEN RESULTS
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-8 font-heading">
                SEO performance backed by data
              </h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  { number: "30%", label: "Average CTR for first organic result on Google" },
                  { number: "60%", label: "Of marketers say SEO generates the highest quality leads" },
                  { number: "70%", label: "Of online experiences begin with a search engine" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-bg-card border border-border-secondary rounded-3xl p-5 sm:p-6 hover:border-border-accent transition-all duration-500 group"
                  >
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-none mb-3 font-heading">
                      {stat.number}
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-primary group-hover:text-text-primary transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <Service approachData={seoApproachData} />

      {/* Service Options */}
      <ServiceOption serviceOption={seoServiceOption} />
    </div>
  );
};

export default Seo;