import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";

const ServiceSlider = ({ serviceData }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const title = serviceData?.title || "";
  const desc = serviceData?.desc || "";
  const cards = serviceData?.items || serviceData?.serviceCards || [];

  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        
        {/* Header */}
        <div className="max-w-[1400px] mx-auto mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                SERVICES
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                {title}
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                {desc}
              </p>
            </div>
          </div>
        </div>

        {/* Cards Slider */}
        <div className="max-w-[1400px] mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              slidesPerGroup={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              navigation={{
                prevEl: ".service-button-prev-custom",
                nextEl: ".service-button-next-custom",
              }}
              speed={800}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2.5, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
              }}
            >
              {cards.map((item, index) => (
                <SwiperSlide key={index} className="!h-[350px] sm:!h-[380px] lg:!h-[400px]">
                  <div className="bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-border-accent transition-all duration-500 flex flex-col h-full group">
                    
                    {/* Line */}
                    <div className="h-[3px] w-12 bg-primary rounded-full mb-6 group-hover:w-16 transition-all duration-500 flex-shrink-0" />

                    {/* Number */}
                    <span className="font-mono text-xs sm:text-sm text-primary/80 font-bold tracking-[4px] mb-4 block flex-shrink-0">
                      /0{index + 1}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300 leading-tight flex-shrink-0">
                      {item.title}
                    </h3>

                    {/* Description - Scrollable if too long */}
                    <div className="flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
                      <p className="font-primary text-sm sm:text-base text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-10 lg:mt-14">
            <button
              className={`service-button-prev-custom w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-secondary flex items-center justify-center text-text-secondary transition-all duration-300 group
                ${isBeginning
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-primary hover:text-primary hover:bg-primary/10"
                }`}
              disabled={isBeginning}
            >
              <GoArrowLeft className="text-lg sm:text-xl group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              className={`service-button-next-custom w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-secondary flex items-center justify-center text-text-secondary transition-all duration-300 group
                ${isEnd
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-primary hover:text-primary hover:bg-primary/10"
                }`}
              disabled={isEnd}
            >
              <GoArrowRight className="text-lg sm:text-xl group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;