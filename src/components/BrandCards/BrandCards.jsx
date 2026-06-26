import { useEffect, useState, useRef } from "react";
import Loader from "../../components/Loader/Loader";
import { useCompanyCards } from "../../services/hooks/useHooks";
import ErrorState from "../ErrorState/ErrorState";

const BrandCards = () => {
  const { data, isLoading, isError, refetch } = useCompanyCards();
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = (e) => setIsMobile(e.matches);

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Smooth auto-scroll on mobile
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current || !data?.length) return;

    const container = scrollContainerRef.current;
    let animationFrame;
    const scrollSpeed = 1;

    const scroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    const pauseScroll = () => cancelAnimationFrame(animationFrame);
    const resumeScroll = () => {
      animationFrame = requestAnimationFrame(scroll);
    };

    container.addEventListener("mouseenter", pauseScroll);
    container.addEventListener("mouseleave", resumeScroll);
    container.addEventListener("touchstart", pauseScroll);
    container.addEventListener("touchend", resumeScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", pauseScroll);
      container.removeEventListener("mouseleave", resumeScroll);
      container.removeEventListener("touchstart", pauseScroll);
      container.removeEventListener("touchend", resumeScroll);
    };
  }, [isMobile, data]);

  // Double for infinite scroll
  const doubledData = data ? [...data, ...data] : [];

  return (
    <div className="bg-bg-primary">
      <div className="">
        {/* Partners Header */}
        <div className="border-y border-border-secondary py-6 md:py-8 mb-8 sm:mb-12 md:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-[4px] text-text-secondary font-primary">
            Technologies We Work With
          </span>
        </div>

        {/* Cards Container */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader />
          </div>
        ) : isError ? (
          <ErrorState onRetry={refetch} />
        ) : (
          <>
            {/* Desktop Grid - ALL cards */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border-secondary rounded-3xl overflow-hidden">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-bg-primary aspect-square flex items-center justify-center p-8 sm:p-10 md:p-12 relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300"></div>
                  <img
                    src={item.image}
                    alt={`Technology partner ${index + 1}`}
                    className="w-3/5 h-3/5 object-contain brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 relative z-10"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Mobile - ALL cards scrolling */}
            <div
              ref={scrollContainerRef}
              className="flex md:hidden gap-[1px] bg-border-secondary overflow-x-hidden rounded-3xl"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {doubledData.map((item, index) => (
                <div
                  key={index}
                  className="bg-bg-primary aspect-square flex items-center justify-center p-6 relative group cursor-pointer flex-shrink-0"
                  style={{ width: "45vw", maxWidth: "180px" }}
                >
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300"></div>
                  <img
                    src={item.image}
                    alt={`Technology partner ${index + 1}`}
                    className="w-3/5 h-3/5 object-contain brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 relative z-10"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BrandCards;
