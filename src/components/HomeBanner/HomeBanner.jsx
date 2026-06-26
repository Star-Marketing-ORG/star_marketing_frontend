import Loader from "../../components/Loader/Loader";
import { useCompanyCards } from "../../services/hooks/useHooks";
import ErrorState from "../ErrorState/ErrorState";

function HomeBanner() {
  const { data, isLoading, isError, refetch } = useCompanyCards();

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero Split Section */}
      <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:min-h-screen">
        {/* Left Side */}
        <div className="relative px-2 py-16 sm:px-5 sm:py-20 md:px-15 md:py-20 flex flex-col justify-center border-b border-border-secondary md:border-b-0 md:border-r md:border-border-secondary">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 sm:gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold my-4 md:mb-8">
            <span className="w-6 sm:w-8 md:w-10 h-px bg-primary block" />
            DIGITAL STUDIO
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] text-text-primary uppercase">
            We design
            <span className="block outline-text">products</span>
            that matter
          </h1>
        </div>

        {/* Right Side */}
        <div className="px-2 py-10 sm:px-8 sm:py-12 md:px-10 md:py-20 flex flex-col justify-center gap-10">
          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
            We partner with ambitious brands to create digital experiences that
            drive real results. From strategy to execution, we bring your vision
            to life with cutting-edge design and technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            <div className="bg-bg-card border border-border-primary p-5 sm:p-6 md:p-8 rounded hover:border-primary transition-all duration-300">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary leading-none">
                200<span className="text-primary">+</span>
              </div>
              <p className="text-xs uppercase tracking-[2px] text-text-secondary mt-2 md:mt-3">
                Projects Launched
              </p>
            </div>
            <div className="bg-bg-card border border-border-primary p-5 sm:p-6 md:p-8 rounded hover:border-primary transition-all duration-300">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary leading-none">
                98<span className="text-primary">%</span>
              </div>
              <p className="text-xs uppercase tracking-[2px] text-text-secondary mt-2 md:mt-3">
                Client Retention
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Text Marquee */}
      <div className="bg-primary py-5 md:py-6 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {[
            "Brand Strategy",
            "UI/UX Design",
            "Web Development",
            "Mobile Apps",
            "Digital Marketing",
          ].map((item) => (
            <span key={item}>
              <span className="text-sm sm:text-base md:text-lg font-bold text-bg-primary uppercase tracking-[2px] mx-4 sm:mx-6 md:mx-8">
                {item}
              </span>
              <span className="text-xs text-bg-primary/30 mx-4 sm:mx-6 md:mx-8">
                ●
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="px-2 sm:px-5 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-2 sm:gap-3 text-primary text-xs sm:text-sm uppercase tracking-[4px] font-semibold mb-12 sm:mb-16 md:mb-20">
          <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
          Our Approach
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12">
          {[
            {
              index: "/01",
              title: "Strategy First",
              text: "Every project begins with deep research and strategic thinking. We analyze your market, understand your users, and define clear objectives before writing a single line of code.",
            },
            {
              index: "/02",
              title: "Design Driven",
              text: "Beautiful aesthetics meet functional design. Our team crafts pixel-perfect interfaces that don't just look stunning but deliver exceptional user experiences across all devices.",
            },
            {
              index: "/03",
              title: "Results Focused",
              text: "We measure success through tangible outcomes. From conversion rates to user engagement, every solution we build is optimized for performance and growth.",
            },
          ].map((item, i, arr) => (
            <div
              key={item.index}
              className="flex-1 flex flex-col md:flex-row gap-8 md:gap-0"
            >
              <div className="flex-1">
                <div className="text-base font-mono text-primary mb-6 font-bold">
                  {item.index}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {item.text}
                </p>
              </div>
              {i < arr.length - 1 && (
                <div className="w-full md:w-px h-px md:h-auto md:min-h-[150px] bg-border-secondary mx-0 md:mx-8 lg:mx-10 my-8 md:my-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
