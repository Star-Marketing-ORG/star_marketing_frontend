import "./Partner.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Loader from "../../components/Loader/Loader";
import { usePartnerCards } from "../../services/hooks/useHooks";

const Partner = () => {
  const { data, isLoading, isError, error, refetch } = usePartnerCards();

  return (
    <div className="partner">
      <h2>Associate Partner</h2>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div className="error">
          <div className="error-desc dif-err">
            <h3>❌ Failed to load cards</h3>
            <p>Try refreshing the page or check your connection.</p>
          </div>
        </div>
      ) : (
        <div className="partner-slider-cards">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={1000}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              480: { slidesPerView: 2.3 },
              768: { slidesPerView: 3.5 },
              1024: { slidesPerView: 3.5 },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="partner-slider-card">
                  <img src={item.image} alt="brand-image" loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Partner;
