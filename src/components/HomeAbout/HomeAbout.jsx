import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useReviews } from "../../services/hooks/useHooks";
import BrandCards from "../BrandCards/BrandCards";
import ErrorState from "../ErrorState/ErrorState";

const HomeAbout = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const { data, isLoading, isError, refetch } = useReviews();

  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        {/* About Section */}
        <div className="max-w-[1400px] mx-auto mb-20 md:mb-28">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                ABOUT US
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Allow us to introduce ourselves...
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 font-primary">
                Star Marketing is a specialist digital agency offering expert
                support across every area of the digital landscape. Find out
                more about who we are, our values and culture, our history, and
                the incredible team behind everything we offer our clients.
              </p>
              <Link
                to="/about-us"
                className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
                  Learn More
                </span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Cards */}
        <BrandCards />

        {/* Reviews Section */}
        <div className="max-w-[1400px] mx-auto mt-20 md:mt-28">
          <div className="mb-16 md:mb-24">
            <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
              <div className="lg:flex-1">
                <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                  <span className="w-10 h-px bg-primary block" />
                  TESTIMONIALS
                </div>
                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                  What Our Clients Say
                </h2>
              </div>
              <div className="lg:w-[400px]">
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                  We pride ourselves on the strength of our relationships.
                  Here's what some of our clients have to say.
                </p>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader />
            </div>
          ) : isError ? (
            <ErrorState onRetry={refetch} />
          ) : (
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
                    className="!h-[380px] sm:!h-[400px] lg:!h-[520px]"
                  >
                    <div className="bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-border-accent transition-all duration-500 flex flex-col h-full group">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0 mb-6">
                        <span className="font-mono text-6xl sm:text-7xl text-primary/10 leading-none block">
                          "
                        </span>
                      </div>

                      {/* Review Text - Scrollable if long */}
                      <div className="flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar mb-6">
                        <p className="font-primary text-base sm:text-lg text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Profile - Fixed at bottom */}
                      <div className="flex items-center gap-4 pt-6 border-t border-border-primary flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-border-secondary group-hover:border-primary/30 transition-all duration-300"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-heading text-sm font-bold text-text-primary">
                            {item.name}
                          </p>
                          {item.role && (
                            <p className="font-primary text-xs text-text-tertiary">
                              {item.role}
                            </p>
                          )}
                        </div>

                        {/* Stars */}
                        <div className="ml-auto flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-primary text-xs">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

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
    </div>
  );
};

export default HomeAbout;
