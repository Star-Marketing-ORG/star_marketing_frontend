import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Loader from "../../components/Loader/Loader";
import { usePartnerCards } from "../../services/hooks/useHooks";
import ErrorState from "../ErrorState/ErrorState";

const Partner = () => {
  const { data, isLoading, isError, refetch } = usePartnerCards();

  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR PARTNERS
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Associate Partners
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Proud to collaborate with industry-leading partners who share
                our vision for digital excellence.
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
                modules={[Autoplay]}
                spaceBetween={1}
                slidesPerView={1}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={3000}
                loop={true}
                breakpoints={{
                  0: { slidesPerView: 2, spaceBetween: 1 },
                  480: { slidesPerView: 2, spaceBetween: 1 },
                  768: { slidesPerView: 2, spaceBetween: 1 },
                  1024: { slidesPerView: 3, spaceBetween: 1 },
                  1280: { slidesPerView: 3, spaceBetween: 1 },
                }}
                className="bg-border-secondary"
              >
                {data?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-bg-primary aspect-[3/2] flex items-center justify-center p-6 sm:p-8 lg:p-10 relative group cursor-pointer">
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

                      <img
                        src={item.image}
                        alt={`Partner ${index + 1}`}
                        className="w-3/4 h-3/4 object-contain brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partner;
