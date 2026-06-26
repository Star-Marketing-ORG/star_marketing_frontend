import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import { marketingStrategyServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { marketingStrategyApproachData } from "../../../assets/approachData/marketingApproachData";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { marketingBanefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { marketingStrategyServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";

import markImg1 from "../../../assets/images/servicesImgs/marketingImgs/marImgs/mark1.jpg";
import markImg2 from "../../../assets/images/servicesImgs/marketingImgs/marImgs/mark2.jpg";

const Marketing = () => {
  const title = "Strategic marketing that drives growth and maximizes ROI";
  const desc =
    "We craft data-driven marketing strategies tailored to your goals—combining creativity, analytics, and channel expertise to help your brand attract, convert, and retain customers effectively.";
  const smdesc = "Marketing Strategy";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Marketing Strategy Services | Star Marketing - India & UK Experts"
        description="Star Marketing provides data-driven marketing strategy services to help businesses grow. From audience research to campaign planning, we craft powerful strategies for success in India and the UK."
        keywords="marketing strategy, brand strategy, digital marketing plan, campaign planning, audience research, go-to-market strategy, India marketing, UK marketing consultants"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={marketingStrategyServiceData} />

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
      <ServiceBanefits benefitsData={marketingBanefitData} />

      {/* Insights Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={markImg1}
                  alt="Marketing insights"
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
                Where do we get our marketing insights?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Our marketing strategies are driven by data from trusted,
                industry-leading platforms such as Google Analytics, SEMrush, and
                Meta Business Suite. We combine both first-party and third-party
                insights to ensure our campaigns are grounded in audience
                behaviour, trends, and performance analytics.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                All data we use is fully GDPR compliant, and we apply strict
                validation processes to ensure accuracy, relevance, and
                timeliness. This data-centric approach allows us to craft
                tailored marketing strategies that deliver measurable results
                and long-term impact for your brand.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <Service approachData={marketingStrategyApproachData} />

      {/* Service Options */}
      <ServiceOption serviceOption={marketingStrategyServiceOption} />

      {/* Strategy Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR STRATEGY
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                Elevating your brand with tailored marketing strategies
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Our marketing strategy services are designed to help businesses
                navigate the ever-changing digital landscape. We focus on
                building long-term value through targeted audience segmentation,
                positioning analysis, and brand messaging that resonates.
                Whether you're launching a new product, entering a new market,
                or refining your brand voice, our strategic approach ensures
                your marketing efforts deliver measurable impact.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-8">
                At Star Marketing, we blend creativity with performance data to
                shape strategies that not only attract attention but also drive
                real business growth. From campaign roadmaps to performance
                forecasting, we're here to guide your next move with confidence.
              </p>
              <div>
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
                    Get in Touch
                  </span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={markImg2}
                  alt="Marketing strategy"
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

export default Marketing;