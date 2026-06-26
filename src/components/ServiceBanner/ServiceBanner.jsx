const ServiceBanner = ({ smdesc, title, desc }) => {
  const words = title.split(" ");
  const halfIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, halfIndex).join(" ");
  const secondHalf = words.slice(halfIndex).join(" ");

  return (
    <div className=" border-b border-border-secondary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          {/* Eyebrow - Centered */}
          <div className="flex items-center gap-3 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold my-5 uppercase">
            {smdesc}
            <span className="w-6 h-0.5 rounded-2xl bg-primary flex-shrink-0" />
          </div>

          {/* Title - Centered */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary uppercase leading-[1] font-heading mb-8 md:mb-10 max-w-[900px] ">
            {firstHalf} <span className="outline-text">{secondHalf}</span>
          </h1>

          {/* Description - Centered with lines */}
          <div className="flex items-center justify-center gap-4 max-w-[600px]">
           
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
