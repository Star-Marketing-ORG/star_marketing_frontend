import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { paidSocialMediaServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { socialMediaApproachData } from "../../../assets/approachData/marketingApproachData";
import { socialMediaServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import { socialMediaAdvertisingBenefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";

import smImg from "../../../assets/images/servicesImgs/marketingImgs/socialImgs/socialImg.jpg";

const Social = () => {
  const title =
    "Drive engagement and conversions with paid social media campaigns";
  const desc =
    "We craft strategic, creative ad campaigns across platforms like Instagram, Facebook, and LinkedIn—designed to reach your ideal audience and deliver measurable results at every stage of the funnel.";
  const smdesc = "Paid Social";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Social Media Marketing | Star Marketing - Boost Your Brand in India & UK"
        description="Engage and grow your audience with Star Marketing's expert social media marketing services. We manage campaigns on Instagram, Facebook, LinkedIn, and more for impactful brand presence."
        keywords="social media marketing, Instagram marketing, Facebook ads, LinkedIn strategy, social media agency, brand awareness, SMM India, SMM UK, digital marketing"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={paidSocialMediaServiceData} />

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
      <ServiceBanefits benefitsData={socialMediaAdvertisingBenefitData} />

      {/* Strategy Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={smImg}
                  alt="Social media marketing"
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
                How do we power our social media strategies?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Our social media strategies are built on a strong foundation of
                insights sourced from leading analytics and listening tools such
                as Brandwatch, Sprout Social, and native platform data like Meta
                Insights and Twitter Analytics. These platforms allow us to
                gather both first-party and third-party data to guide every
                content decision, campaign, and engagement strategy.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                All insights we use are GDPR compliant and verified for
                accuracy, relevance, and timeliness. Our team carefully analyses
                audience behavior, platform trends, and performance metrics to
                ensure that your social media presence not only resonates with
                your audience but also drives meaningful results across channels
                like Instagram, LinkedIn, Facebook, and X.
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
                THE POWER OF SOCIAL
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight font-heading">
                The power of social media
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mt-6">
                Social media is the most-used marketing channel, with over
                two-thirds of the world's population being active on at least
                one social platform.
              </p>
            </div>

            {/* Right - Stats Cards */}
            <div className="lg:w-[55%]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  { number: "5.17B", label: "Active social media users in 2024" },
                  { number: "7", label: "Different social media platforms used per person on average" },
                  { number: "3B", label: "Monthly active users on Facebook in 2024" },
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
      <Service approachData={socialMediaApproachData} />

      {/* Service Options */}
      <ServiceOption serviceOption={socialMediaServiceOption} />
    </div>
  );
};

export default Social;