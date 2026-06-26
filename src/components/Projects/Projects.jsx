import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { useProjects } from "../../services/hooks/useHooks";
import Loader from "../../components/Loader/Loader";
import ErrorState from "../ErrorState/ErrorState";

const Projects = () => {
  const { data, isLoading, isError, refetch } = useProjects();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR WORK
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Featured Projects
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Explore our latest work showcasing innovative solutions and
                creative excellence across diverse industries.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader />
          </div>
        ) : isError ? (
          <ErrorState onRetry={refetch} />
        ) : (
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
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                speed={800}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 1.2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 2, spaceBetween: 24 },
                  1280: { slidesPerView: 3, spaceBetween: 24 },
                }}
              >
                {data?.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="!h-[500px] sm:!h-[520px] lg:!h-[550px]"
                  >
                    <div className="bg-bg-card border border-border-secondary rounded-3xl overflow-hidden hover:border-border-accent transition-all duration-500 flex flex-col h-full group cursor-pointer">
                      {/* Image - Fixed height, always visible */}
                      <div className="relative h-48 sm:h-52 lg:h-56 flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        {/* Subtle bottom fade into content */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-bg-card to-transparent"></div>
                      </div>

                      {/* Content - Takes remaining space, scrolls if needed */}
                      <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-1 min-h-0">
                        {/* Number + Line */}
                        <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                          <span className="font-mono text-xs tracking-[3px] text-primary font-bold">
                            {item.category || `/0${index + 1}`}
                          </span>
                          <span className="flex-1 h-px bg-border-secondary"></span>
                        </div>

                        {/* Title - Fixed, always visible */}
                        <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-black text-text-primary leading-tight mb-3 flex-shrink-0 group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>

                        {/* Description - Scrolls if too long */}
                        <div className="overflow-y-auto flex-1 min-h-0 pr-1 custom-scrollbar">
                          <p className="font-primary text-sm sm:text-base text-text-secondary leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom accent line on hover */}
                      <div className="h-[2px] bg-primary opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex-shrink-0" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 mt-10 lg:mt-14">
              <button
                className={`swiper-button-prev-custom w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-secondary flex items-center justify-center text-text-secondary transition-all duration-300 group
                  ${
                    isBeginning
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:border-primary hover:text-primary hover:bg-primary/10"
                  }`}
                disabled={isBeginning}
              >
                <GoArrowLeft className="text-lg sm:text-xl group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                className={`swiper-button-next-custom w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-secondary flex items-center justify-center text-text-secondary transition-all duration-300 group
                  ${
                    isEnd
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:border-primary hover:text-primary hover:bg-primary/10"
                  }`}
                disabled={isEnd}
              >
                <GoArrowRight className="text-lg sm:text-xl group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
