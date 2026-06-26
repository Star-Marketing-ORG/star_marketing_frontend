const ServiceBanefits = ({ benefitsData }) => {
  // Normalize data - handle both data structures
  const title = benefitsData?.title || "";
  const cards = benefitsData?.items || benefitsData?.benefitItems || [];

  return (
    <div className="bg-bg-primary">
    <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
              <div className="lg:flex-1">
                <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                  <span className="w-10 h-px bg-primary block" />
                  BENEFITS
                </div>
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                  {title}
                </h2>
              </div>
              <div className="lg:w-[400px]">
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                  Discover how our strategic approach delivers measurable
                  results for your business growth.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-border-accent transition-all duration-500 group"
              >
                {/* Number */}
                <span className="font-mono text-sm text-primary font-bold tracking-[3px] mb-4 block">
                  /0{index + 1}
                </span>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-primary text-sm sm:text-base text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanefits;