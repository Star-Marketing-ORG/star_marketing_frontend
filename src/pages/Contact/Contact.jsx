import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiSend, FiMail, FiMapPin } from "react-icons/fi";
import toast from "react-hot-toast";
import SEO from "../../components/SEO/SEO";
import axios from "axios";
import { baseUrl } from "../../main";

const Contact = () => {
  const location = useLocation();
  const conBaseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${conBaseUrl}${location.pathname}`;

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    projectType: "",
    projectDescription: "",
    budget: "",
    heardAboutUs: "",
    privacyAccepted: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phoneNumber) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.privacyAccepted) {
      toast.error("Please accept the privacy policy to continue.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/contact/new-contact`, {
        name: formData.name,
        businessName: formData.businessName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        projectType: formData.projectType,
        projectDescription: formData.projectDescription,
        budget: formData.budget,
        heardAboutUs: formData.heardAboutUs,
      });

      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phoneNumber: "",
          projectType: "",
          projectDescription: "",
          budget: "",
          heardAboutUs: "",
          privacyAccepted: false,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg-primary">
      <SEO
        title="Contact Us | Star Marketing - India & UK Digital Marketing Agency"
        description="Get in touch with Star Marketing for SEO, branding, web development, social media marketing, and more. Reach out to our teams in India or the UK today!"
        keywords="contact Star marketing, seo agency contact, digital marketing help, talk to experts, marketing agency India, UK marketing contact, web design consultation"
        url={fullUrl}
      />

      {/* Header */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-b border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold my-6">
                <span className="w-10 h-px bg-primary block" />
                GET IN TOUCH
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Want to discuss a project?
              </h1>
            </div>
            <div className="lg:w-[400px]">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-primary">
                Tell us a little about your project and one of our team will be
                in touch with you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28 border-b border-border-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="lg:w-[40%]">
              <div className="flex flex-col gap-4 sm:gap-5">
                {[
                  {
                    label: "General Enquiries",
                    email: "Hr@wingstarmarketing.com",
                    icon: <FiMail />,
                  },
                  {
                    label: "Support Enquiries",
                    email: "Hr@wingstarmarketing.com",
                    icon: <FiMail />,
                  },
                  {
                    label: "Interested in joining the team?",
                    email: "Hr@wingstarmarketing.com",
                    icon: <FiMail />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-8 hover:border-border-accent transition-all duration-500 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500">
                      <span className="text-primary">{item.icon}</span>
                    </div>
                    <p className="font-primary text-sm text-text-tertiary mb-1">
                      {item.label}
                    </p>
                    <p className="font-primary text-base text-text-primary font-medium">
                      {item.email}
                    </p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8">
                {[
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/star-marketings/",
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/star_marketings",
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/share/1EVxbiNFbH/",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-300 font-primary"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:w-[60%]">
              <form
                onSubmit={handleSubmit}
                className="bg-bg-card border border-border-secondary rounded-3xl p-6 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-text-primary font-medium font-primary">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-bg-secondary border border-border-secondary rounded-xl px-4 py-3 text-text-primary font-primary text-sm focus:border-primary/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-text-primary font-medium font-primary">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="bg-bg-secondary border border-border-secondary rounded-xl px-4 py-3 text-text-primary font-primary text-sm focus:border-primary/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-text-primary font-medium font-primary">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="bg-bg-secondary border border-border-secondary rounded-xl px-4 py-3 text-text-primary font-primary text-sm focus:border-primary/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-text-primary font-medium font-primary">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="0123456789"
                      required
                      className="bg-bg-secondary border border-border-secondary rounded-xl px-4 py-3 text-text-primary font-primary text-sm focus:border-primary/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-text-primary font-medium font-primary">
                      Type of Project *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="bg-bg-secondary border border-border-secondary rounded-xl px-4 py-3 text-text-primary font-primary text-sm focus:border-primary/50 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Please Select</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Software Application">
                        Software Application
                      </option>
                      <option value="Full Stack Application">
                        Full Stack Application
                      </option>
                      <option value="App Application">App Application</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-text-primary font-medium font-primary">
                      How much is your budget? *
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="bg-bg-secondary border border-border-secondary rounded-xl px-4 py-3 text-text-primary font-primary text-sm focus:border-primary/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Project Description */}
                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label className="text-sm text-text-primary font-medium font-primary">
                      Tell us about your project *
                    </label>
                    <p className="text-xs text-text-tertiary font-primary">
                      Please include any details you feel would be beneficial
                      for us to know, including scope, timelines, budget, any
                      integrations, etc.
                    </p>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Please detail your requirements here..."
                      required
                      rows={5}
                      className="bg-bg-secondary border border-border-secondary rounded-xl px-4 py-3 text-text-primary font-primary text-sm focus:border-primary/50 focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Heard About Us */}
                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label className="text-sm text-text-primary font-medium font-primary">
                      How did you hear about us?{" "}
                      <span className="text-text-muted">(Optional)</span>
                    </label>
                    <select
                      name="heardAboutUs"
                      value={formData.heardAboutUs}
                      onChange={handleChange}
                      className="bg-bg-secondary border border-border-secondary rounded-xl px-4 py-3 text-text-primary font-primary text-sm focus:border-primary/50 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Please Select</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-3 mt-6 p-4 bg-bg-secondary rounded-2xl border border-border-primary">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    required
                    className="mt-0.5 accent-primary"
                  />
                  <div>
                    <p className="text-xs text-text-secondary font-primary leading-relaxed mb-2">
                      In order to submit your details to us, please provide
                      consent to the terms of our{" "}
                      <Link
                        to="/privacy-policy"
                        className="text-primary hover:underline"
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                    <p className="text-xs text-text-tertiary font-primary leading-relaxed">
                      This provides all the information regarding data
                      protection and Star Marketing, and may be updated from
                      time to time, so please check this regularly for updates.
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full group flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-4 font-semibold tracking-[3px] uppercase text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <span>Submit Details</span>
                      <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-2 sm:px-8 md:px-15 lg:px-20 py-16 sm:py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-16 md:mb-20">
            <div className="lg:flex-1">
              <div className="flex items-center gap-4 text-primary text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] font-semibold mb-6">
                <span className="w-10 h-px bg-primary block" />
                OUR LOCATION
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary uppercase leading-[0.9] font-heading">
                Find Us
              </h2>
            </div>
            <div className="lg:w-[400px]">
              <div className="flex items-center gap-3 text-text-secondary font-primary">
                <FiMapPin className="text-primary text-xl flex-shrink-0" />
                <span className="text-base sm:text-lg">
                  Sikar, Rajasthan, India
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.79089995395!2d75.1301399!3d27.630992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca576786a6641%3A0x450f964f532a504d!2sStar%20marketing!5e0!3m2!1sen!2sin!4v1744467099740!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
