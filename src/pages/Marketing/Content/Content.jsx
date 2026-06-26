import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { contentMarketingServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { contentMarketingApproachData } from "../../../assets/approachData/marketingApproachData";
import { contentMarketingServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";

import cImg1 from "../../../assets/images/servicesImgs/marketingImgs/contentImgs/contentImg.jpg";
import cImg2 from "../../../assets/images/servicesImgs/marketingImgs/contentImgs/contentImg2.jpg";

const Content = () => {
  const title =
    "Fuel your brand with strategic content that informs, engages, and converts";
  const desc =
    "As a content marketing agency, we create high-impact blogs, videos, and campaigns tailored to your audience—driving organic growth, building authority, and boosting customer loyalty across every channel.";
  const smdesc = "Content Marketing";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Content Marketing Services | Star Marketing - India & UK"
        description="Star Marketing crafts powerful content strategies to boost engagement, drive traffic, and convert leads. From blogs to branded content, we help your business grow with words that work."
        keywords="content marketing, blog writing, content strategy, branded content, digital storytelling, SEO content, marketing agency India, UK content experts"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={contentMarketingServiceData} />

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

      {/* Power of Content Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={cImg2}
                  alt="Content marketing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                WHY CONTENT
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                The power of content marketing
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Content sits at the heart of every successful marketing
                strategy. Whether you're aiming to boost your social media
                engagement, strengthen your SEO efforts, or educate your
                audience, great content drives meaningful connections.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Effective content doesn't happen by chance — it's backed by
                research, strategy, and a deep understanding of your audience's
                needs. Our team crafts data-driven content plans built on
                keyword analysis, competitive insights, and user intent to
                ensure your message lands where it matters most.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                From blog articles and website copy to social media posts,
                brochures, and more, we produce high-quality, original content
                tailored to your brand. We can also help refine and optimise
                your existing content to unlock hidden SEO opportunities and
                enhance overall performance.
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
                BY THE NUMBERS
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight font-heading">
                Content marketing statistics
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mt-6">
                Whatever your business goals and marketing tactics are, content
                is always at the centre. Having a clear, attainable, and
                data-driven strategy that allows your business to publish
                valuable content regularly can help skyrocket your marketing
                performance.
              </p>
            </div>

            {/* Right - Stats Cards */}
            <div className="lg:w-[55%]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  { number: "30%", label: "Increase in brand awareness with consistent content marketing" },
                  { number: "60%", label: "Of marketers say content marketing generates demand and leads" },
                  { number: "90%", label: "Of organizations use content to drive their marketing strategy" },
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
      <Service approachData={contentMarketingApproachData} />

      {/* Service Options */}
      <ServiceOption serviceOption={contentMarketingServiceOption} />

      {/* Strategic Content Section */}
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
                Strategic content that drives impact
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Achieving success with content marketing means more than simply
                creating content — it requires a well-planned, data-driven
                strategy that spans multiple channels. From whitepapers and
                guest articles to video content and podcasts, we help you engage
                the right audiences at every touchpoint.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                We collaborate closely with your team to ensure your content
                strategy aligns with your business goals—whether it's increasing
                brand visibility, generating leads, or establishing thought
                leadership. Our approach blends in-depth market research,
                creative content development, and intelligent distribution
                backed by cutting-edge tools and AI-powered insights to maximise
                your reach and return on investment.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={cImg1}
                  alt="Content strategy"
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

export default Content;