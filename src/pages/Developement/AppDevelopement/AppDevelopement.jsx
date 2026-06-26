import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { appDevelopmentServiceData } from "../../../assets/serviceSliderData/devSliderData";

import adImg from "../../../assets/images/servicesImgs/devImgs/appDevImgs/ad.jpg";
import adImg2 from "../../../assets/images/servicesImgs/devImgs/appDevImgs/ad2.jpg";

const AppDevelopement = () => {
  const title = "Turn your vision into powerful mobile apps that users love";
  const desc =
    "We design and develop intuitive, high-performance mobile applications for iOS and Android—built to engage users and scale with your business goals.";
  const smdesc = "Mobile App Development";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="App Development | Star Marketing - Android & iOS Solutions for India & UK"
        description="Star Marketing offers cutting-edge mobile app development services for Android and iOS platforms. We build performance-driven, user-friendly apps tailored to your business needs across India and the UK."
        keywords="mobile app development, android app development, iOS app developers, cross-platform apps, custom mobile solutions, app development India, UK mobile app agency, business apps"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Intro Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-b border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Custom App Development Solutions
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                A tailored mobile application empowers businesses to meet their
                unique operational needs while delivering exceptional user
                experiences. Unlike off-the-shelf apps, custom solutions offer
                full control over functionality, user flows, system integration,
                and performance.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                At Star Marketing, our skilled app developers craft powerful iOS
                and Android applications using React Native, Flutter, and .NET
                MAUI — building fast, reliable, and user-focused mobile
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <ServiceSlider serviceData={appDevelopmentServiceData} />

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

      {/* Excellence Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={adImg}
                  alt="App development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                QUALITY FIRST
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight mb-6 font-heading">
                Driven by Excellence at Every Step
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                At Star Marketing, we don't just build apps — we craft digital
                experiences that are user-driven and business-focused. Our
                development process is transparent and collaborative, keeping
                you involved from wireframes to final launch.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Every line of code is written with precision. Backed by a
                certified Quality Management System, we conduct rigorous testing,
                performance checks, and quality assurance to ensure your app
                launches bug-free, secure, and ready to scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                ONGOING SUPPORT
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight mb-6 font-heading">
                End-to-End Support for Your App Journey
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                At Star Marketing, we don't stop at building apps — we provide
                comprehensive, long-term support to help your digital product
                succeed in the market. As a full-spectrum digital agency, we
                offer strategic services beyond development, including branding,
                marketing, and user acquisition support.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-8">
                Curious about how our holistic, collaborative approach sets us
                apart? Visit our Digital Partner page to explore how we drive
                lasting impact.
              </p>
              <div>
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
                    Your Digital Partner
                  </span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={adImg2}
                  alt="App support"
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

export default AppDevelopement;