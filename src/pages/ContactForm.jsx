import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    label: "Email us",
    value: "lifts.works@gmail.com",
    icon: "✉",
  },
  {
    label: "Call us",
    value: "+91 9875991350",
    icon: "☎",
  },
  {
    label: "Visit us",
    value: "f-86-C, Phase 7, Sector 73, SAS N agar,Mohali, Punjab, India",
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form data submitted:', formData);
  //   // Add your backend submission tracking logic here
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917508560026";

    const text = `*New Contact Form Submission*

👤 Name: ${formData.firstName} ${formData.lastName}

📧 Email: ${formData.email}

🌍 Country: ${formData.country}

📝 Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.location.href = whatsappUrl;
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".contact-visual",
        { opacity: 0, x: 50, scale: 1.03 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info-row",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const inputClasses =
    "w-full bg-[#05070b] border border-gray-700 rounded-xl px-4 py-3.5 text-base text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200";

  const labelClasses = "text-sm font-semibold text-gray-300 tracking-wide";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0a0e14] px-4 py-20 text-white sm:px-6 sm:py-24 md:px-12"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Form */}
          <div className="contact-card lg:col-span-7 bg-gray-900/50 border border-gray-700 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
            <div className="space-y-4 mb-10">
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                <span className="h-px w-10 bg-cyan-400" />
                Connect
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Get in touch
              </h2>
              <p className="text-base text-gray-300 max-w-md leading-relaxed">
                Please fill in the form and our team will get back to you
                shortly with tailored vertical transportation solutions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Input Row Grid System */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  className={`${inputClasses} cursor-pointer appearance-none`}
                >
                  <option value="" disabled className="text-gray-500">
                    Choose country...
                  </option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="SG">Singapore</option>
                </select>
              </div>

              <div className="contact-field space-y-2">
                <label className={labelClasses}>
                  Tell us how we can help you *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide as many details as you can about your building transit requirements..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Custom Consent Checkbox */}
              <div className="contact-field flex items-start gap-3 pt-1">
                <div className="flex items-center h-5">
                  <input
                    id="agreed"
                    name="agreed"
                    type="checkbox"
                    required
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-600 bg-[#05070b] text-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:ring-offset-0"
                  />
                </div>
                <label
                  htmlFor="agreed"
                  className="text-sm text-gray-300 leading-relaxed select-none cursor-pointer"
                >
                  I would like to receive relevant content from Inne Elevator
                  including marketing messages via email.
                </label>
              </div>

              {/* Submit */}
              <div className="contact-field pt-2">
                {/* <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-[#05070b] font-bold text-base px-9 py-4 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
                >
                  Submit Request
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button> */}

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-[#05070b] font-bold text-base px-9 py-4 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
                >
                  Submit Request
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 leading-relaxed mt-8">
              Please notice, that when you submit this form, we will be
              collecting your personal data. For more information about personal
              data processing, please see our{" "}
              <a href="#privacy" className="text-cyan-400 hover:underline">
                Privacy Statements
              </a>
              .
            </p>
          </div>

          {/* Right Side: Visual + Contact Info */}
          <div className="contact-visual lg:col-span-5 flex flex-col gap-6">
            <div className="relative h-[320px] lg:h-[460px] w-full rounded-3xl overflow-hidden border border-gray-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Modern commercial office facade architecture"
                loading="lazy"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-[#0a0e14]/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h4 className="text-xl font-black uppercase tracking-wider text-white">
                  Inne<span className="text-cyan-400 font-light">lifts.</span>
                </h4>
                <p className="text-sm text-gray-300 mt-1.5">
                  Engineering premium mobility since 2001.
                </p>
              </div>
            </div>

            {/* Contact info cards */}
            <div className="contact-info-row grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="contact-info-item bg-gray-900/50 border border-gray-700 rounded-2xl p-5 flex flex-col gap-2.5 transition-all duration-300 hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-gray-100 break-words">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
