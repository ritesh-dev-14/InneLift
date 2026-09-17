import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    label: "Email us",
    value: "inne.lifts@gmail.com",
    href: "mailto:inne.lifts@gmail.com",
    icon: "✉",
  },
  {
    label: "Call us",
    value: ["+91 98759 91350", "+91 81238 13000"],
    hrefs: ["tel:+919875991350", "tel:+918123813000"],
    icon: "☎",
  },
  {
    label: "Visit us",
    value: [
      "F-86-C, Phase 7, Sector 73, SAS Nagar, Mohali, Punjab, India",
      "Plot No. 36A, MW Area, Industrial Area Phase I, Chandigarh, 160002",
    ],
    icon: "📍",
  },
];

const ContactForm = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "917508560026";
    const text = `*New Contact Form Submission*\n\n👤 Name: ${formData.firstName} ${formData.lastName}\n\n📧 Email: ${formData.email}\n\n🌍 Country: ${formData.country}\n\n📝 Message:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-field",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-visual",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-info-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info-row",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const inputClasses =
    "w-full bg-[#05070b]/80 border border-white/10 rounded-xl px-4 py-3.5 text-base text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200";

  const labelClasses = "text-xs font-semibold uppercase tracking-wider text-gray-300";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#0a0e14] px-4 py-24 text-white sm:px-6 md:px-12 lg:py-32"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Side: Form Card */}
          <div className="contact-card lg:col-span-7 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1523]/90 via-[#0b1019]/95 to-[#070a10]/95 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-10">
            <div className="mb-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                <span className="h-px w-8 bg-cyan-400" />
                Connect
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Get in touch
              </h2>
              <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                Tell us about your building profile and our team will help you with a tailored vertical transportation solution.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="contact-field space-y-2">
                  <label className={labelClasses}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={inputClasses}
                  />
                </div>

                <div className="contact-field space-y-2">
                  <label className={labelClasses}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="contact-field space-y-2">
                <label className={labelClasses}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className={inputClasses}
                />
              </div>

              <div className="contact-field space-y-2">
                <label className={labelClasses}>Select Country *</label>
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className={`${inputClasses} cursor-pointer`}
                >
                  <option value="" disabled className="bg-[#05070b] text-gray-500">
                    Choose country...
                  </option>
                  <option value="IN" className="bg-[#05070b]">India</option>
                  <option value="US" className="bg-[#05070b]">United States</option>
                  <option value="AE" className="bg-[#05070b]">United Arab Emirates</option>
                  <option value="SG" className="bg-[#05070b]">Singapore</option>
                </select>
              </div>

              <div className="contact-field space-y-2">
                <label className={labelClasses}>Tell us how we can help you *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide details about your building transit requirements..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="contact-field flex items-start gap-3 pt-1">
                <input
                  id="agreed"
                  name="agreed"
                  type="checkbox"
                  required
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-600 bg-[#05070b] text-cyan-400 focus:ring-cyan-400/30"
                />
                <label
                  htmlFor="agreed"
                  className="cursor-pointer select-none text-xs leading-relaxed text-gray-300 sm:text-sm"
                >
                  I would like to receive relevant content from Inne Elevator including marketing messages via email.
                </label>
              </div>

              <div className="contact-field pt-3">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 text-base font-bold text-[#05070b] shadow-[0_10px_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 active:scale-[0.98] sm:w-auto"
                >
                  Submit Request
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </form>

            <p className="mt-8 text-xs leading-relaxed text-gray-500">
              Please note that when you submit this form, we collect your personal data. For more information, please see our{" "}
              <a href="#privacy" className="text-cyan-400 hover:underline">
                Privacy Statement
              </a>
              .
            </p>
          </div>

          {/* Right Side: Visual Image & Contact Details */}
          <div className="contact-visual lg:col-span-5 space-y-6">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1120] shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Modern commercial office architecture"
                loading="lazy"
                className="h-full w-full object-cover opacity-75 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09121d] via-[#09121d]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8">
                <h4 className="text-2xl font-black uppercase tracking-wider text-white">
                  Inne<span className="text-cyan-400 font-light">lifts.</span>
                </h4>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  Engineering premium mobility since 2001.
                </p>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="contact-info-row space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="contact-info-item rounded-2xl border border-white/10 bg-[#0e1522]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(34,211,238,0.1)]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-base text-cyan-300">
                      {item.icon}
                    </div>

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                      {item.label}
                    </p>

                    {Array.isArray(item.value) ? (
                      <div className="space-y-1.5 text-xs sm:text-sm font-medium text-gray-200">
                        {item.value.map((line, index) =>
                          item.hrefs ? (
                            <a
                              key={line}
                              href={item.hrefs[index]}
                              className="block text-left transition-colors hover:text-cyan-300"
                            >
                              {line}
                            </a>
                          ) : (
                            <span key={line} className="block text-left text-gray-300">
                              {line}
                            </span>
                          )
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-xs sm:text-sm font-medium text-gray-200 transition-colors hover:text-cyan-300"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;