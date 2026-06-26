import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FiPlus, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import { useServices } from "../../services/hooks/useHooks";
import {
  designData,
  developmentData,
  marketingData,
} from "../../assets/navData";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const { data: servicesData } = useServices();
  const marketingNewData = servicesData?.marketing || [];
  const developmentNewData = servicesData?.development || [];
  const designNewData = servicesData?.design || [];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", to: "/", hasDropdown: false },
    { label: "About", to: "/about-us", hasDropdown: false },
    {
      label: "Design",
      hasDropdown: true,
      data: designData,
      newData: designNewData,
    },
    {
      label: "Development",
      hasDropdown: true,
      data: developmentData,
      newData: developmentNewData,
    },
    {
      label: "Marketing",
      hasDropdown: true,
      data: marketingData,
      newData: marketingNewData,
    },
    { label: "Founder", to: "/founder", hasDropdown: false },
  ];

  // Fixed isActive - works for Home, About, Founder
  const isActive = (to) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname === to || location.pathname.startsWith(to + "/");
  };

  const isDropdownActive = (item) => {
    if (!item.hasDropdown) return false;
    const allLinks = [
      ...(item.data?.submenu || []).map((s) => s.link),
      ...(item.newData || []).map(
        (s) =>
          `/service/${s.selectedService}/${s.bannerSection.serviceName}/${s._id}`,
      ),
    ];
    return allLinks.some((link) => location.pathname === link);
  };

  const getAllSubLinks = (item) => {
    const staticLinks = item.data?.submenu || [];
    const apiLinks = (item.newData || []).map((s) => ({
      title: s.bannerSection.serviceName,
      link: `/service/${s.selectedService}/${s.bannerSection.serviceName}/${s._id}`,
    }));
    return [...staticLinks, ...apiLinks];
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? "bg-bg-primary/90 backdrop-blur-xl border-b border-border-secondary"
            : "bg-transparent"
        }`}
      >
        <div className="px-5 sm:px-8 md:px-15 lg:px-20">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[72px] sm:h-[80px]">
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Star Marketing"
                className="h-8 sm:h-10 w-auto"
                loading="lazy"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-0">
              {navItems.map((item, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && (
                    <span className="w-px h-5 bg-border-secondary mx-3" />
                  )}

                  <li
                    className="relative list-none"
                    ref={item.hasDropdown ? dropdownRef : null}
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(i)}
                    onMouseLeave={() =>
                      item.hasDropdown && setOpenDropdown(null)
                    }
                  >
                    {item.hasDropdown ? (
                      <div>
                        <span
                          className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 font-primary cursor-pointer select-none py-2
                            ${
                              isDropdownActive(item) || openDropdown === i
                                ? "text-primary"
                                : "text-text-secondary hover:text-text-primary"
                            }`}
                        >
                          <span className="text-xs tracking-[2px] uppercase">
                            {item.label}
                          </span>
                          <FiPlus
                            className={`text-[10px] transition-all duration-300 ${
                              openDropdown === i
                                ? "rotate-45 text-primary"
                                : "text-text-tertiary"
                            }`}
                          />
                        </span>

                        <div
                          className={`absolute top-full left-0 transition-all duration-200 z-50
                            ${
                              openDropdown === i
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible translate-y-1"
                            }`}
                        >
                          <div className="h-3" />

                          <div className="bg-bg-card border border-border-secondary rounded-2xl p-2 min-w-[260px] shadow-2xl shadow-black/20">
                            {item.data.submenu.map((sub, idx) => {
                              const active = location.pathname === sub.link;
                              return (
                                <Link
                                  key={idx}
                                  to={sub.link}
                                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group/link
                                    ${
                                      active
                                        ? "bg-primary/5 text-primary"
                                        : "text-text-secondary hover:text-text-primary hover:bg-bg-primary"
                                    }`}
                                >
                                  <span className="font-primary text-sm">
                                    {sub.title}
                                  </span>
                                  <FiArrowRight
                                    className={`text-xs transition-all duration-300
                                    ${
                                      active
                                        ? "opacity-100"
                                        : "opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0"
                                    }`}
                                  />
                                </Link>
                              );
                            })}
                            {item.newData?.length > 0 && (
                              <div className="border-t border-border-secondary mt-2 pt-2">
                                {item.newData?.map((service, idx) => {
                                  const link = `/service/${service.selectedService}/${service.bannerSection.serviceName}/${service._id}`;
                                  const active = location.pathname === link;
                                  return (
                                    <Link
                                      key={`new-${idx}`}
                                      to={link}
                                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group/link
                                        ${
                                          active
                                            ? "bg-primary/5 text-primary"
                                            : "text-text-secondary hover:text-text-primary hover:bg-bg-primary"
                                        }`}
                                    >
                                      <span className="font-primary text-sm">
                                        {service.bannerSection.serviceName}
                                      </span>
                                      <FiArrowRight
                                        className={`text-xs transition-all duration-300
                                        ${
                                          active
                                            ? "opacity-100"
                                            : "opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0"
                                        }`}
                                      />
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.to}
                        className={`text-xs tracking-[2px] uppercase font-medium transition-all duration-300 font-primary
                          ${
                            isActive(item.to)
                              ? "text-primary"
                              : "text-text-secondary hover:text-text-primary"
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/contact-us"
                className={`hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold tracking-[2px] uppercase text-xs transition-all duration-300
                  ${
                    isActive("/contact-us")
                      ? "bg-primary text-white"
                      : "border border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
              >
                Contact
                <FiArrowRight className="text-xs" />
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  setMobileSubmenu(null);
                }}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border-secondary text-text-primary hover:border-primary hover:text-primary transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <FiX className="text-lg" />
                ) : (
                  <div className="flex flex-col gap-[3px] items-center">
                    <span className="flex gap-[3px]">
                      <span className="w-[3px] h-[3px] rounded-full bg-current" />
                      <span className="w-[3px] h-[3px] rounded-full bg-current" />
                      <span className="w-[3px] h-[3px] rounded-full bg-current" />
                    </span>
                    <span className="flex gap-[3px]">
                      <span className="w-[3px] h-[3px] rounded-full bg-current" />
                      <span className="w-[3px] h-[3px] rounded-full bg-current" />
                      <span className="w-[3px] h-[3px] rounded-full bg-current" />
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - same as before */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ top: "72px" }}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className="absolute inset-0 bg-bg-primary overflow-y-auto">
          <div className="px-5 py-6">
            <div className="flex flex-col">
              {navItems.map((item, i) => (
                <div key={i}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileSubmenu(mobileSubmenu === i ? null : i)
                        }
                        className="w-full flex items-center justify-between py-4 text-text-primary font-primary text-base font-medium"
                      >
                        <span className="text-sm tracking-[2px] uppercase">
                          {item.label}
                        </span>
                        <FiChevronDown
                          className={`text-base transition-transform duration-300 ${
                            mobileSubmenu === i
                              ? "rotate-180 text-primary"
                              : "text-text-tertiary"
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileSubmenu === i ? "max-h-[500px] pb-3" : "max-h-0"
                        }`}
                      >
                        <div className="space-y-0 pl-4 border-l-2 border-border-secondary ml-3">
                          {getAllSubLinks(item).map((sub, idx) => {
                            const active = location.pathname === sub.link;
                            return (
                              <Link
                                key={idx}
                                to={sub.link}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-3 text-sm font-primary transition-colors duration-300
                                  ${
                                    active
                                      ? "text-primary font-medium"
                                      : "text-text-secondary hover:text-text-primary"
                                  }`}
                              >
                                {sub.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-4 text-sm tracking-[2px] uppercase font-primary font-medium transition-colors duration-300
                        ${
                          isActive(item.to)
                            ? "text-primary"
                            : "text-text-primary hover:text-primary"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {i < navItems.length - 1 && (
                    <div className="h-px bg-border-secondary" />
                  )}
                </div>
              ))}

              <div className="pt-8">
                <Link
                  to="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-full px-6 py-3.5 font-semibold tracking-[2px] uppercase text-sm transition-all duration-300"
                >
                  Contact Us
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;