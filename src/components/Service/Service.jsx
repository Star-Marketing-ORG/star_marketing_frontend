import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const Service = ({ approachData }) => {
  const [activeCard, setActiveCard] = useState(null);
  const cards = approachData.approchCards;
  const totalCards = cards.length;

  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                WHAT WE DO
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                {approachData.title}
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                {approachData.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="max-w-[1400px] mx-auto">
          {totalCards === 3 && (
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <div className="w-full">
                <CardItem
                  item={cards[0]}
                  index={0}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                <CardItem
                  item={cards[1]}
                  index={1}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
                <CardItem
                  item={cards[2]}
                  index={2}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              </div>
            </div>
          )}

          {totalCards === 4 && (
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                <CardItem
                  item={cards[0]}
                  index={0}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
                <CardItem
                  item={cards[1]}
                  index={1}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                <CardItem
                  item={cards[2]}
                  index={2}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
                <CardItem
                  item={cards[3]}
                  index={3}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              </div>
            </div>
          )}

          {totalCards === 5 && (
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                <div className="md:col-span-2">
                  <CardItem
                    item={cards[0]}
                    index={0}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                </div>
                <div className="md:col-span-1">
                  <CardItem
                    item={cards[1]}
                    index={1}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                <CardItem
                  item={cards[2]}
                  index={2}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
                <CardItem
                  item={cards[3]}
                  index={3}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
                <CardItem
                  item={cards[4]}
                  index={4}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// Clean CardItem - Tailwind Classes Only
// ============================================
const CardItem = ({ item, index, activeCard, setActiveCard }) => {
  const isActive = activeCard === index;
  const hasActiveCard = activeCard !== null;

  return (
    <div
      className={`
        group relative rounded-3xl overflow-hidden cursor-pointer
        h-[350px] sm:h-[380px] lg:h-[450px] w-full
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        bg-bg-card border
        ${
          isActive
            ? "border-border-accent shadow-[0_20px_60px_-10px_rgba(38,113,254,0.1)]"
            : "border-border-secondary hover:border-border-accent"
        }
      `}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {/* Background Image */}
      {item.img && (
        <>
          <img
            src={item.img}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
              ${isActive ? "scale-110" : "scale-100 group-hover:scale-105"}
            `}
            loading="lazy"
          />
          {/* Overlay */}
          <div
            className={`
            absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${
              isActive
                ? "bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-bg-primary/20 backdrop-blur-[2px]"
                : hasActiveCard
                  ? "bg-gradient-to-t from-bg-primary/95 via-bg-primary/75 to-bg-primary/60 backdrop-blur-[8px]"
                  : "bg-gradient-to-t from-bg-primary/95 via-bg-primary/50 to-transparent group-hover:from-bg-primary/85 group-hover:via-bg-primary/60"
            }
          `}
          />
        </>
      )}

      {/* No Image Fallback */}
      {!item.img && (
        <div className="absolute inset-0 bg-bg-card">
          <div
            className={`
            absolute inset-0 transition-all duration-700
            ${isActive ? "bg-primary/10" : "bg-primary/5 group-hover:bg-primary/10"}
          `}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 z-10">
        {/* Line */}
        <div
          className={`
          h-0.5 bg-primary mb-6 transition-all duration-700
          ${isActive ? "w-20 opacity-100" : "w-12 opacity-50 group-hover:opacity-100"}
        `}
        />

        {/* Number */}
        <span
          className={`
          font-mono text-xs sm:text-sm font-bold tracking-[3px] mb-3 block transition-all duration-500
          ${isActive ? "text-primary" : "text-primary/70 group-hover:text-primary"}
        `}
        >
          {item.no}
        </span>

        {/* Title */}
        <h3
          className={`
          font-heading text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 transition-all duration-500 uppercase
          ${
            isActive
              ? "text-white"
              : hasActiveCard
                ? "text-text-secondary/50"
                : "text-text-primary group-hover:text-white"
          }
        `}
        >
          {item.title}
        </h3>

        {/* Description */}
        <div
          className={`
          overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isActive ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
        `}
        >
          <p className="font-primary text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Glow */}
      <div
        className={`
        absolute inset-0 transition-opacity duration-700 pointer-events-none
        bg-gradient-to-t from-primary/10 to-transparent
        ${isActive ? "opacity-100" : "opacity-0"}
      `}
      />
    </div>
  );
};

export default Service;
