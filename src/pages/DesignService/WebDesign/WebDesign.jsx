import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { webServiceData } from "../../../assets/serviceSliderData/serviceSliderData";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import { FiArrowRight } from "react-icons/fi";

import webdImg from "../../../assets/images/servicesImgs/designImgs/webDesignImgs/webd.jpg";

const WebDesign = () => {
  const title =
    "Elevate your online presence with stunning and strategic web design";
  const desc =
    "We craft visually striking, user-focused websites that not only look amazing but drive results—customized for your brand, your audience, and your goals.";
  const smdesc = "Web Design";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="">
      <SEO
        title="Website Design Services | Star Marketing - Creative, Modern, Responsive Web Design in India & UK"
        description="Star Marketing specializes in high-converting, SEO-optimized website design services. We build responsive, user-friendly, and custom websites tailored for businesses in India and the UK. Get your professional web presence with Star today."
        keywords="website design India, website design UK, responsive web design, custom web development, business website, UI UX design, professional website, creative web design, mobile-friendly websites, sikar web agency, london web designers, mumbai website developers"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={webServiceData} />

      {/* Crafting Section - Split Layout */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left - Content */}
            <div className="lg:w-[45%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR APPROACH
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                Crafting Exceptional Web Experiences
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                A great website goes beyond just looking good — it should be
                intuitive, goal-driven, and built with your audience in mind.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Every design choice influences how a user interacts with your
                brand, from the structure of your navigation to the placement of
                calls to action. Our approach to web design focuses on creating
                user-first digital experiences that are both visually compelling
                and functionally seamless. By combining strategic layout,
                thoughtful content, and responsive design, we ensure your
                visitors are guided toward key actions that drive real results.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[55%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={webdImg}
                  alt="Web design"
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

export default WebDesign;
