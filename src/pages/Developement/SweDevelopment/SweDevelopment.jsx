import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { softwareDevelopmentServiceData } from "../../../assets/serviceSliderData/devSliderData";

import sweImg from "../../../assets/images/servicesImgs/devImgs/sweImgs/sweImg.jpg";

const SweDevelopment = () => {
  const title =
    "Custom software solutions built to solve real business challenges";
  const desc =
    "From web apps to enterprise platforms, we develop scalable, secure, and high-performing software tailored to your unique needs and growth goals.";
  const smdesc = "Software Development";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Software Development Services | Star Marketing - Custom Solutions for Businesses India & UK"
        description="Star Marketing offers end-to-end software development services including SaaS platforms, enterprise software, mobile and desktop apps. Partner with us for scalable and secure software tailored to your business needs across India and the UK."
        keywords="custom software development, SaaS solutions, enterprise software India, software company UK, business software, mobile app development, desktop software, scalable software solutions, software engineers"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={softwareDevelopmentServiceData} />

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

      {/* Solutions Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={sweImg}
                  alt="Software development"
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
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight mb-6 font-heading uppercase">
                End-to-End Software Development Solutions
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                At Star Marketing, we deliver comprehensive software development
                services tailored to solve complex business challenges. Our
                expert developers work across a variety of languages and
                platforms, including JavaScript, Python, C#, and Ruby, building
                scalable applications with cutting-edge frameworks like React,
                Node.js, and .NET. Whether you're launching a SaaS product,
                automating operations, or creating a custom enterprise tool —
                we turn your vision into functional, future-ready software.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Beyond development, we specialise in seamless system integration
                and full API development to ensure all your platforms work
                together harmoniously. Every solution undergoes thorough testing,
                security checks, and performance optimization led by our QA and
                DevOps specialists. From strategy and architecture to launch and
                maintenance, our goal is to deliver reliable, secure, and
                scalable software that empowers your business to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweDevelopment;