import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../../../components/SEO/SEO";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { dataAnalyticsReportingServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { analyticApproachData } from "../../../assets/approachData/marketingApproachData";
import { dataAnalyticsServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";

import anaImg from "../../../assets/images/servicesImgs/marketingImgs/anaImgs/anaImg.jpg";
import anaImg2 from "../../../assets/images/servicesImgs/marketingImgs/anaImgs/anaImg2.jpg";

const Analytics = () => {
  const title = "Unlock actionable insights with data analytics and reporting";
  const desc =
    "We transform raw data into clear, strategic insights—delivering custom dashboards, performance reports, and analytics that guide smarter decisions and drive measurable business outcomes.";
  const smdesc = "Data Analytics & Reporting";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Data Analytics & Reporting Services | Star Marketing - India & UK"
        description="Unlock powerful insights with Star Marketing's data analytics and reporting solutions. We track KPIs, analyze campaign performance, and deliver actionable reports to fuel smarter marketing decisions."
        keywords="data analytics services, marketing reporting, campaign performance, business intelligence, KPI tracking, marketing analytics India, UK data insights, digital marketing reports"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Service Cards */}
      <ServiceSlider serviceData={dataAnalyticsReportingServiceData} />

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

      {/* Analytics Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={anaImg2}
                  alt="Data analytics"
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
                Data Analytics & Reporting That Drives Growth
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                In today's digital landscape, data is more than just numbers —
                it's the foundation for impactful decision-making. Our Data
                Analytics and Reporting services turn raw metrics into
                actionable insights, helping you understand user behavior,
                campaign performance, and business trends.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                From tracking website traffic and conversion rates to monitoring
                social media engagement and paid ad performance, we provide
                comprehensive analytics solutions. Our team leverages
                industry-leading tools to ensure accuracy, clarity, and
                relevance in every report.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                We don't just deliver reports — we offer strategic
                interpretations. Whether you're aiming to optimize marketing
                ROI, refine customer journeys, or identify growth opportunities,
                our data-driven approach ensures your decisions are backed by
                reliable insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <Service approachData={analyticApproachData} />

      {/* Service Options */}
      <ServiceOption serviceOption={dataAnalyticsServiceOption} />

      {/* Dashboards Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={anaImg}
                  alt="Custom dashboards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                CUSTOM SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold text-text-primary leading-tight mb-6 font-heading">
                Integrated Analytics & Custom Dashboards
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                Unlock the full potential of your marketing data with integrated
                reporting solutions powered by Looker Studio. At Star Marketing,
                we build dynamic, easy-to-navigate dashboards that centralise
                metrics from all your digital channels—delivering performance
                insights in one place.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Our bespoke reporting tools go beyond surface-level stats.
                Designed to align with your unique KPIs, they simplify complex
                data into visually rich, actionable reports. Whether you're
                monitoring campaign efficiency or uncovering growth
                opportunities, our integrated analytics provide the clarity
                needed to refine your strategy and drive measurable
                results—without the need for endless spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;