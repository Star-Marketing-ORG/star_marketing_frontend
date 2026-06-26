const AboutMission = () => {
  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Main Heading */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading max-w-[900px]">
              Delivering high quality services to each and every client
            </h2>
          </div>

          {/* Cards Container */}
          <div className="relative">
            
            {/* Mission Card */}
            <div className="bg-bg-card border border-border-secondary rounded-3xl p-5 sm:p-10 lg:p-14 hover:border-border-accent transition-all duration-500 mb-6 sm:mb-8 lg:mb-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                
                {/* Number + Label */}
                <div className="lg:w-[30%]">
                  <span className="font-mono text-6xl sm:text-7xl lg:text-8xl text-primary/10 font-bold leading-none block mb-4">
                    01
                  </span>
                  <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold">
                    <span className="w-10 h-px bg-primary block" />
                    OUR MISSION
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-[70%]">
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
                    Every brand has the potential to shine brilliantly
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary mb-4">
                    At Star Marketing, we believe that every brand has the
                    potential to shine brilliantly in its own unique way.
                    Founded on the principles of innovation, creativity, and
                    dedication.
                  </p>
                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                    We embarked on a mission to help businesses of all sizes
                    reach for the stars and beyond.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card - Same size, overlapping up */}
            <div className="bg-bg-card border border-border-secondary rounded-3xl p-5 sm:p-10 lg:p-14 hover:border-border-accent transition-all duration-500 lg:-mt-6 relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                
                {/* Number + Label */}
                <div className="lg:w-[30%]">
                  <span className="font-mono text-6xl sm:text-7xl lg:text-8xl text-primary/10 font-bold leading-none block mb-4">
                    02
                  </span>
                  <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold">
                    <span className="w-10 h-px bg-primary block" />
                    OUR VISION
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-[70%]">
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
                    Comprehensive strategies for unique needs
                  </h3>
                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                    We create comprehensive strategies and project plans that
                    are carefully designed to meet the unique needs of each
                    client, ensuring all aspects of your business goals have
                    been addressed. From the initial planning stages through to
                    the successful execution of each step, we offer full support
                    and guidance throughout the entire process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;