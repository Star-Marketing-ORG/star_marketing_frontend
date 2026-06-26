import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="bg-bg-primary">
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-16 md:mb-24">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR STORY
              </div>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                We're the Holistic Plus+ Digital Agency
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 font-primary">
                At Star Marketing, we are a dynamic team of skilled digital
                marketing professionals dedicated to crafting customized
                marketing strategies. Our expertise lies in helping clients
                connect with their target audience, achieve their business goals,
                and maximize their online presence.
              </p>
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 border border-border-secondary rounded-full px-8 py-4 text-text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <span className="text-sm font-semibold tracking-[3px] uppercase font-primary">
                  Your Digital Partner
                </span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
              </Link>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {[
              {
                title: "Innovation",
                desc: "Staying ahead of industry trends with cutting-edge strategies and creative solutions.",
              },
              {
                title: "Dedication",
                desc: "Committed to delivering exceptional results and unwavering support for our clients.",
              },
              {
                title: "Growth",
                desc: "Helping businesses maximize their online presence and achieve meaningful goals.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border-primary rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-border-accent transition-all duration-500 group"
              >
                <span className="font-mono text-sm text-primary font-bold tracking-[3px] mb-4 block">
                  /0{index + 1}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-primary text-sm sm:text-base text-text-secondary leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;