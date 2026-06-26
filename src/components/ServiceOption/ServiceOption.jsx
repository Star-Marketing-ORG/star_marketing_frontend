import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceOption = ({ serviceOption }) => {
  const [openIndex, setOpenIndex] = useState(0);

  // Normalize data
  const title = serviceOption?.title || "";
  const desc = serviceOption?.desc || "";
  const items = serviceOption?.items || serviceOption?.serviceOptionItems || [];

  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-t border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-12 sm:mb-16 md:mb-24">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                SERVICE OPTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                {title}
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed font-primary">
                {desc}
              </p>
            </div>
          </div>

          {/* ============ MOBILE ACCORDION ============ */}
          <div className="lg:hidden flex flex-col gap-3">
            {items.map((item, index) => {
              const isActive = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden
                    ${
                      isActive
                        ? "bg-bg-card border-border-accent shadow-[0_0_30px_-5px_rgba(38,113,254,0.1)]"
                        : "bg-transparent border-transparent hover:bg-bg-card/50 hover:border-border-secondary"
                    }
                  `}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenIndex(isActive ? -1 : index)}
                    className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left"
                  >
                    <span
                      className={`font-mono text-xl sm:text-2xl font-bold transition-colors duration-500 flex-shrink-0
                        ${isActive ? "text-primary" : "text-text-muted"}
                      `}
                    >
                      {`0${index + 1}`}
                    </span>
                    <h3
                      className={`font-heading text-sm sm:text-base font-bold transition-colors duration-500 flex-1
                        ${isActive ? "text-text-primary" : "text-text-muted"}
                      `}
                    >
                      {item.title}
                    </h3>
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl text-text-secondary flex-shrink-0"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Accordion Content - Shows below clicked item */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 sm:pb-6 pt-0">
                          {/* Watermark Number */}
                          <span className="font-mono text-6xl sm:text-7xl text-primary/5 font-bold leading-none block mb-4">
                            {`0${index + 1}`}
                          </span>

                          {/* Description */}
                          <p className="font-primary text-sm sm:text-base text-text-secondary leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ============ DESKTOP TABS + CONTENT ============ */}
          <div className="hidden lg:flex gap-8 lg:gap-12 items-stretch">
            
            {/* Left - Number Tabs */}
            <div className="lg:w-[35%]">
              <div className="flex flex-col gap-3 sm:gap-4">
                {items.map((item, index) => {
                  const isActive = openIndex === index;

                  return (
                    <button
                      key={index}
                      onClick={() => setOpenIndex(index)}
                      className={`group flex items-center gap-4 p-5 sm:p-6 rounded-3xl border transition-all duration-500 text-left
                        ${
                          isActive
                            ? "bg-bg-card border-border-accent shadow-[0_0_30px_-5px_rgba(38,113,254,0.1)]"
                            : "border-transparent hover:bg-bg-card hover:border-border-secondary"
                        }
                      `}
                    >
                      <span
                        className={`font-mono text-3xl sm:text-4xl font-bold transition-colors duration-500
                          ${isActive ? "text-primary" : "text-text-muted group-hover:text-text-secondary"}
                        `}
                      >
                        {`0${index + 1}`}
                      </span>
                      <h3
                        className={`font-heading text-base sm:text-lg font-bold transition-colors duration-500
                          ${isActive ? "text-text-primary" : "text-text-muted group-hover:text-text-secondary"}
                        `}
                      >
                        {item.title}
                      </h3>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right - Content Panel */}
            <div className="lg:w-[65%] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={openIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-bg-card border border-border-secondary rounded-3xl p-8 sm:p-10 lg:p-12 w-full flex flex-col justify-center min-h-[300px] sm:min-h-[350px]"
                >
                  {/* Watermark Number */}
                  <span className="font-mono text-8xl sm:text-9xl text-primary/5 font-bold leading-none block mb-6">
                    {`0${openIndex + 1}`}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                    {items[openIndex]?.title}
                  </h3>

                  {/* Description */}
                  <p className="font-primary text-base sm:text-lg text-text-secondary leading-relaxed">
                    {items[openIndex]?.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOption;