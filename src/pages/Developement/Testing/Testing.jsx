import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { testingServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { testingApproachData } from "../../../assets/approachData/devApprochData";

import testImg from "../../../assets/images/servicesImgs/devImgs/testingImgs/test.jpg";

const Testing = () => {
  const title =
    "Ensure flawless performance with thorough and reliable testing";
  const desc =
    "We offer end-to-end testing services—from functionality and usability to performance and security—ensuring your digital products deliver a seamless and bug-free user experience.";
  const smdesc = "Testing";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Website & App Testing | Star Marketing - Quality Assurance Experts India & UK"
        description="Ensure flawless user experiences with Star Marketing's comprehensive testing services. We provide website and mobile app testing, QA audits, performance testing, and bug resolution across India and the UK."
        keywords="website testing, app testing, quality assurance, QA services, performance testing, bug fixing, UI/UX testing, QA agency India, UK testing experts"
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
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Custom Testing Solutions for Quality Assurance
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Our tailored testing solutions are designed to ensure your
                digital products meet the highest standards of performance,
                security, and reliability. Unlike off-the-shelf approaches, our
                testing services are customized to align with your unique
                infrastructure and business goals.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Whether you're building a website, mobile app, or enterprise
                platform, our team conducts comprehensive testing—from
                functionality and compatibility to load and security
                testing—ensuring a seamless and bug-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <ServiceSlider serviceData={testingServiceData} />

      {/* CTA Button */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 pb-16 sm:pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
              Start Testing
            </span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>
      </div>

      {/* Approach Section */}
      <Service approachData={testingApproachData} />

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
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                End-to-End Support for Your Testing Process
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                At Star Marketing, we offer comprehensive testing support that
                goes beyond traditional methods. Our team ensures your digital
                platforms, applications, and systems function seamlessly across
                all user scenarios. Whether you're launching a new product or
                refining an existing one, our testing services are designed to
                deliver performance, accuracy, and reliability.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-8">
                Working with us means tapping into a network of over 100 experts
                across design, SEO, video, branding, and more. From user
                experience testing to load and performance analysis, we tailor
                every solution to match your unique business needs—ensuring
                smooth functionality, optimal speed, and complete confidence in
                every launch.
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
                  src={testImg}
                  alt="Testing and QA"
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

export default Testing;
