import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import BrandCards from "../../../components/BrandCards/BrandCards";
import { graphicServiceData } from "../../../assets/serviceSliderData/serviceSliderData";

import gdpImg from "../../../assets/images/servicesImgs/designImgs/graphicDesignImgs/gdp.jpg";

const GraphicDesign = () => {
  const title =
    "Bring your brand to life with impactful and modern graphic design";
  const desc =
    "As a full-service digital agency, we deliver high-quality visuals—from branding to marketing assets—that resonate with your audience and elevate your brand identity.";
  const smdesc = "Graphic Design";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Graphic Design Services | Star Marketing - Logos, Branding & Creatives India & UK"
        description="Star Marketing delivers professional graphic design solutions including logo creation, brand identity, social media creatives, brochures, and banners. Serving businesses in India and the UK with impactful visual storytelling."
        keywords="graphic design India, branding design UK, logo design, social media creatives, visual branding, brochure design, flyer design, poster design, creative agency India, london graphic designers, mumbai design agency, brand identity design"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={graphicServiceData} />

      {/* CTA Button */}
      <div className="px-5 sm:px-8 md:px-15 lg:px-20 pb-16 sm:pb-20 md:pb-28">
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

      {/* Design That Speaks Section */}
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
                Design That Speaks Your Brand
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Graphic design is more than just aesthetics — it's a powerful
                communication tool that shapes how your audience perceives your
                brand.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                From color palettes to typography, every design element plays a
                role in telling your story and influencing user behavior. Our
                graphic designers craft visuals that are not only eye-catching but
                purposeful — aligning with your brand values and resonating with
                your target audience. Whether it's a logo, marketing material, or
                social media content, we create designs that make a lasting
                impression. We work collaboratively with your team to ensure every
                visual touchpoint is consistent, impactful, and strategically
                designed to elevate your brand.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[55%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={gdpImg}
                  alt="Graphic design"
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

export default GraphicDesign;