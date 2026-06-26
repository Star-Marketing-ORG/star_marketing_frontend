import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiUser, FiCode, FiSmile, FiTrendingUp } from "react-icons/fi";
import SEO from "../../components/SEO/SEO";
import founder_img from "../../assets/images/founder.jpeg";

const founderCards = [
  {
    icon: <FiUser className="text-xl" />,
    text: "Led by a young digital marketing expert in India",
  },
  {
    icon: <FiCode className="text-xl" />,
    text: "Customized web development and SEO solutions / app development and many more",
  },
  {
    icon: <FiSmile className="text-xl" />,
    text: "200+ happy clients in just 3.5 years",
  },
  {
    icon: <FiTrendingUp className="text-xl" />,
    text: "Proven results with data-driven strategies",
  },
];

const Founder = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Founder | Star Marketing - Visionary Leadership Behind Our Success"
        description="Meet the founder of Star Marketing — the visionary leader driving innovation, strategy, and excellence in digital marketing across India and the UK."
        keywords="Star marketing founder, company leadership, digital marketing leader, visionary entrepreneur, india marketing founder, uk digital expert"
        url={fullUrl}
      />

      {/* Hero Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-b border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
              <span className="w-10 h-px bg-primary block" />
              OUR FOUNDER
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
              Meet Our Founder
            </h1>
          </div>

          {/* Founder Intro */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 md:mb-20">
            
            {/* Left - Content */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading">
                Sohel Ali: From Passion to Purpose – The Story Behind Star Marketing
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                In the heart of Sikar, Rajasthan, a young visionary named Sohel
                Ali was born in 2001 with a deep-rooted passion for computers
                and technology. Unlike most, Sohel didn't just follow trends—he
                created his own path.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                In 2018, while most of his peers were still figuring out life,
                Sohel made a bold decision: he wanted to do something unique,
                something that would stand out. His journey began humbly as a
                sales executive at Hinduja Housing. The road wasn't smooth—he
                faced betrayal and fraud, but never gave up. These experiences
                only made his vision clearer and his determination stronger.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[45%]">
              <div className="rounded-3xl overflow-hidden border border-border-secondary h-[350px] sm:h-[400px] lg:h-[500px] group">
                <img
                  src={founder_img}
                  alt="Founder Sohel Ali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Full Story */}
          <div className="max-w-[900px]">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
              Soon, Sohel found himself working with HikeMe, a digital marketing
              agency, where he discovered his true calling. He dove deep into
              the world of digital marketing and web development, mastering
              strategies, platforms, and the art of client communication. It was
              here he realized that success isn't just about selling—it's about
              understanding the client's needs and building long-term
              relationships.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
              On 9th August 2022, Sohel turned his dreams into reality and
              founded Star Marketing, with a mission to redefine digital growth.
              Starting with just one client—Morchang Hotel in Sikar—the results
              were outstanding. One happy client turned into ten, and ten into
              hundreds.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
              Today, with 200+ clients across 3.5 years, Sohel Ali has built
              Star Marketing into one of the best digital marketing agencies in
              India. His approach is simple but powerful: treat every brand like
              it's your own. From SEO and social media marketing to web
              development services and branding, Star Marketing offers
              innovative solutions tailored to every client.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-8">
              Sohel's story is more than just a success tale—it's a testament to
              passion, perseverance, and purpose.
            </p>

            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
                Connect With Us
              </span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-16 md:mb-24">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Why Choose Star Marketing?
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Discover what sets us apart and why 200+ clients trust us with
                their digital growth.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-16 md:mb-20">
            {founderCards.map((card, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-8 hover:border-border-accent transition-all duration-500 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-all duration-500">
                  <span className="text-primary">{card.icon}</span>
                </div>
                <p className="font-primary text-sm sm:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Founder;