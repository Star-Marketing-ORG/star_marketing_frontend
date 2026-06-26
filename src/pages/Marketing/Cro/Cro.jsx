import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import { croServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { croApproachData } from "../../../assets/approachData/marketingApproachData";

import croImg from "../../../assets/images/servicesImgs/marketingImgs/reportingImgs/croImg.jpg";

const Cro = () => {
  const title =
    "Turn traffic into revenue with smart conversion rate optimization";
  const desc =
    "We analyze user behavior, test strategically, and optimize every element of your digital experience—boosting conversions, lowering bounce rates, and increasing ROI without increasing ad spend.";
  const smdesc = "Conversion Rate Optimisation";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Conversion Rate Optimisation (CRO) Services | Star Marketing - India & UK"
        description="Maximize your website's potential with Star Marketing's CRO services. We optimize user experience, design, and funnels to convert more visitors into loyal customers across India and the UK."
        keywords="conversion rate optimisation, CRO services, boost conversions, website optimization, UX design, landing page optimization, digital growth, India CRO, UK marketing agency"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={croServiceData} />

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

      {/* Why CRO Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={croImg}
                  alt="Conversion rate optimisation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                WHY CRO
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                Why CRO marketing matters
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                CRO plays a vital role in maximizing the value of your website
                traffic. Whether your goal is to increase sales, generate leads,
                or encourage user actions, conversion rate optimization ensures
                your site is working smarter to achieve results.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Successful CRO is driven by insights, user behavior patterns,
                and continuous testing. Our team focuses on understanding how
                users interact with your site and uses that knowledge to
                fine-tune key elements for better performance and higher
                conversions.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                From refining landing pages and improving call-to-actions to
                simplifying user journeys, we deliver customized CRO strategies
                that support your growth. We also revisit existing pages to
                uncover hidden opportunities for better engagement and improved
                results.
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
                PROVEN IMPACT
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight font-heading">
                The impact of CRO
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mt-6">
                If you're looking to grow your business by increasing sales and
                revenue, then conversion rate optimisation is a crucial step to
                success.
              </p>
            </div>

            {/* Right - Stats Cards */}
            <div className="lg:w-[55%]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  { number: "30%", label: "Average increase in conversions after CRO implementation" },
                  { number: "60%", label: "Of companies say CRO is key to their digital growth strategy" },
                  { number: "90%", label: "Of visitors leave a site without taking desired action" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-bg-card border border-border-secondary rounded-3xl p-5 sm:p-6 hover:border-border-accent transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-none font-heading">
                        {stat.number}
                      </div>
                      <FiTrendingUp className="text-accent-green text-xl sm:text-2xl flex-shrink-0" />
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
      <Service approachData={croApproachData} />
    </div>
  );
};

export default Cro;