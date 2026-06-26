import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { howitWorkdata, workBanefitData } from "../../../assets/workData";
import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

const WorksPage2 = () => {
  const title = "How Social Media Can Solve the Lead Generation Problem";
  const desc =
    "At Star Marketing, we help businesses like yours use social platforms strategically to turn followers into loyal customers.";
  const smdesc = "How it Works";

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Lead Generation with Social Media | Star Marketing Solutions"
        description="Struggling to generate quality leads? Discover how social media marketing can drive results with targeting, engagement, and conversion strategies."
        keywords="social media lead generation, Facebook ads, Instagram marketing, generate leads online, WhatsApp marketing, business growth, Star Marketing"
        url={fullUrl}
      />

      {/* Banner */}
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      {/* Intro */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-b border-border-secondary">
        <div className="max-w-[900px]">
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
            Generating quality leads is one of the biggest challenges for any
            business. Traditional methods like cold calling and email blasts
            often fall short. That's where social media comes in—a powerful and
            cost-effective way to attract, engage, and convert potential
            customers.
          </p>
        </div>
      </div>

      {/* Service Options */}
      <ServiceOption serviceOption={howitWorkdata} />

      {/* Benefits */}
      <ServiceBanefits benefitsData={workBanefitData} />

      {/* Real Example */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-bg-card border border-border-secondary rounded-3xl p-8 sm:p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              {/* Left - Stat */}
              <div className="lg:w-[40%] text-center lg:text-left">
                <div className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-primary leading-none font-heading mb-4">
                  300<span className="text-accent-green">%</span>
                </div>
                <p className="text-text-secondary font-primary text-lg">
                  increase in leads in one month
                </p>
              </div>

              {/* Right - Content */}
              <div className="lg:w-[60%]">
                <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                  <span className="w-10 h-px bg-primary block" />
                  REAL RESULTS
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight mb-6 font-heading">
                  How Star Marketing Generates Leads
                </h2>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                  One of our clients, a real estate agent, increased leads by
                  combining Facebook and WhatsApp campaigns we created. By
                  combining visual ads with targeted messaging, we helped them
                  turn social followers into real buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage2;
