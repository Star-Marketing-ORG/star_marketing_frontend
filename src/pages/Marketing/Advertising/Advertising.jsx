import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { paidAdvertisingServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { paidAdvertisingApproachData } from "../../../assets/approachData/marketingApproachData";
import { paidAdvertisingServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import { paidAdvertisingBenefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";

import adImg from "../../../assets/images/servicesImgs/marketingImgs/advertisingImgs/adImg.jpg";

const Advertising = () => {
  const title = "Maximize your ROI with data-driven paid advertising campaigns";
  const desc =
    "We create and manage targeted ad strategies across Google, Meta, and more—designed to attract the right audience, increase conversions, and scale your growth efficiently.";
  const smdesc = "Paid Advertising";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Paid Advertising Services | Star Marketing - PPC Experts India & UK"
        description="Maximize your ROI with Star Marketing's expert paid advertising solutions. We manage Google Ads, Facebook Ads, Instagram Ads, and more to drive targeted traffic in India & the UK."
        keywords="paid advertising, PPC services, Google Ads, Facebook Ads, Instagram Ads, online advertising, digital ads India, paid marketing UK, advertising agency"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={paidAdvertisingServiceData} />

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
      <ServiceBanefits benefitsData={paidAdvertisingBenefitData} />

      {/* Strategy Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={adImg}
                  alt="Paid advertising"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                DATA DRIVEN
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                How do we drive our paid advertising strategies?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Our paid advertising strategies are powered by data from
                top-tier ad platforms and analytics tools, including Google Ads,
                Meta Business Suite, and programmatic networks. By utilizing
                both first-party and third-party insights, we craft targeted
                campaigns that maximize ROI and reach the right audience at the
                right time.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Every campaign is built on a foundation of accurate,
                GDPR-compliant data. Our specialists continuously monitor
                performance metrics, A/B testing results, and audience behaviors
                to refine and optimize your ads. This ensures your budget is
                spent efficiently while driving measurable results across
                search, social, and display networks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Title */}
            <div className="lg:w-[45%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                PROVEN RESULTS
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight font-heading">
                Why is paid advertising so important?
              </h2>
            </div>

            {/* Right - Stats Cards */}
            <div className="lg:w-[55%]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  { number: "30%", label: "Average increase in conversion rates with targeted paid campaigns" },
                  { number: "60%", label: "Of marketers say PPC generates the highest quality leads" },
                  { number: "70%", label: "Of online experiences begin with a paid or organic search result" },
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
      <Service approachData={paidAdvertisingApproachData} />

      {/* Service Options */}
      <ServiceOption serviceOption={paidAdvertisingServiceOption} />
    </div>
  );
};

export default Advertising;