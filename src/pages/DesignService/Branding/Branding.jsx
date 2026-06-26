import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { brandingServiceData } from "../../../assets/serviceSliderData/serviceSliderData";

import bimg from "../../../assets/images/servicesImgs/designImgs/brandingimgs/bimg.jpg";

const Branding = () => {
  const title = "Build a brand that stands out and speaks volumes";
  const desc =
    "We craft distinctive brand identities that reflect your vision, connect with your audience, and create lasting impact across digital and print platforms.";
  const smdesc = "Branding";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Branding Services | Star Marketing - Build a Powerful Brand Identity in India & UK"
        description="Elevate your brand with Star Marketing's expert branding services including brand strategy, identity design, logo creation, and brand messaging. Trusted by businesses in India and the UK to craft unforgettable brand experiences."
        keywords="branding agency India, brand identity design, logo and branding UK, brand strategy experts, creative branding solutions, rebranding services, brand development, visual identity, business branding India, UK brand consultants"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={brandingServiceData} />


      {/* Building a Brand Section */}
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
                Building a Brand That Lasts
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Your brand is more than just a logo — it's the complete identity
                of your business and the first impression you leave with your
                audience.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Effective branding builds trust, creates recognition, and
                emotionally connects with your target audience. Our branding
                experts work with you to define your brand's voice, values, and
                visual identity, ensuring every touchpoint communicates a
                consistent and compelling message. From brand strategy and naming
                to logo design and brand guidelines, we craft identities that are
                memorable, authentic, and built to grow with your business.
                Whether you're starting fresh or rebranding, we'll help you tell
                your story with clarity and confidence.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[55%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={bimg}
                  alt="Branding service"
                  className="w-full h-full object-bottom object-cover group-hover:scale-105 transition-transform duration-700"
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

export default Branding;