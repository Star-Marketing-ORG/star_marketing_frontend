import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import work_img1 from "../../../assets/images/workImgs/work_img1.jpg";
import work_img2 from "../../../assets/images/workImgs/work_img2.jpg";
import work_img3 from "../../../assets/images/workImgs/work_img3.jpg";

const WorksPage1 = () => {
  const title =
    "How a Website Can Empower Your Business, Education, and Travel Goals";
  const desc =
    "Discover how a well-crafted website can drive business growth, enable effective online learning, and simplify travel planning—by providing accessibility, automation, and personalized user experiences across industries.";
  const smdesc = "How it Works";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  const sections = [
    {
      eyebrow: "FOR BUSINESS",
      title: "Websites in Business: Build and Grow Your Brand",
      desc: "A professional website acts as your digital storefront—open 24/7. It helps you:",
      list: [
        "Showcase your products and services",
        "Collect leads and customer inquiries",
        "Build credibility with reviews, portfolios, and testimonials",
        "Run marketing campaigns and promotions",
        "Accept online payments or bookings",
      ],
      example: "Example: A small real estate business can list properties, gather client details, and even schedule property visits—all through a website.",
      image: work_img1,
      reverse: false,
    },
    {
      eyebrow: "FOR EDUCATION",
      title: "Websites in Education and Training: Teach and Inspire",
      desc: "With e-learning on the rise, your website can become a virtual classroom:",
      list: [
        "Offer online courses and workshops",
        "Provide video tutorials, quizzes, and downloadable materials",
        "Manage student registrations and track progress",
        "Build a learning community",
      ],
      example: "Example: A coaching institute can manage its entire learning system online, increasing reach and reducing operational cost.",
      image: work_img2,
      reverse: true,
    },
    {
      eyebrow: "FOR TRAVEL",
      title: "Websites in Travel: Inspire and Convert",
      desc: "The travel industry thrives on inspiration and convenience. A website helps you:",
      list: [
        "Display destinations with photos, videos, and itineraries",
        "Allow online booking and payment",
        "Share travel tips and blogs",
        "Collect feedback and testimonials",
      ],
      example: "Example: A travel agency can show packages, accept bookings, and provide instant customer support—all from one place.",
      image: work_img3,
      reverse: false,
    },
  ];

  return (
    <div className="bg-bg-primary">
      <SEO
        title="How a Website Empowers Business, Education & Travel | Star Marketing"
        description="Discover how a website can transform your business, enhance education delivery, and drive travel success. Star Marketing builds result-driven websites for real growth in every industry."
        keywords="business website, education website, travel website, website for business, e-learning website, travel agency website, online branding, digital presence, website benefits, Star Marketing"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Intro */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-b border-border-secondary">
        <div className="max-w-[900px]">
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
            In today's digital age, having a website isn't just an option—it's a
            necessity. Whether you're running a business, offering training and
            education, or managing travel services, a website helps you reach
            more people, build trust, and grow your brand. At Star Marketing, we
            help you build a strong online presence that delivers real results.
          </p>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-b border-border-secondary"
        >
          <div className="max-w-[1400px] mx-auto">
            <div
              className={`flex flex-col gap-8 lg:gap-16 ${
                section.reverse
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              
              {/* Content */}
              <div className="lg:w-[50%] flex flex-col justify-center">
                <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                  <span className="w-10 h-px bg-primary block" />
                  {section.eyebrow}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight mb-6 font-heading">
                  {section.title}
                </h2>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-6">
                  {section.desc}
                </p>
                <ul className="space-y-3 mb-6">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-text-secondary font-primary text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-bg-card border border-border-secondary rounded-2xl p-5">
                  <p className="text-text-secondary font-primary text-sm italic">
                    {section.example}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-[50%]">
                <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksPage1;