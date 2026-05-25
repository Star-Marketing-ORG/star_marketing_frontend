import "./Projects.scss";

import Loader from "../../components/Loader/Loader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { useProjects } from "../../services/hooks/useHooks";

const Projects = () => {
  const { data, isLoading, isError, error, refetch } = useProjects();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="projects">
      <h2>Our Projects</h2>

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
        <div className="projects-cards">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={() => {
              setIsBeginning(false);
              setIsEnd(false);
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            speed={1000}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 2.7 },
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="projects-card">
                  <img src={item.image} alt="" />

                  <div className="projects-card-desc">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Arrows */}
          <div className="review-nav-buttons">
            <div
              className={`swiper-button-prev-custom ${
                isBeginning ? "disabled" : ""
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <GoArrowLeft />
            </div>
            <div
              className={`swiper-button-next-custom ${isEnd ? "disabled" : ""}`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <GoArrowRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
