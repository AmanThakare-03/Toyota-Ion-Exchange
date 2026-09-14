import React, { useState } from "react";

const customers = [
  "GAIL",
  "Indian Oil",
  "HPCL",
  "SAIL",
  "JSW Steel",
  "NPCIL",
  "NFL",
  "IFFCO",
  "Sun Pharma",
  "Pidilite",
  "Mahagenco",
  "RINL",
  "PSPCL",
  "CSPGCL",
  "Hindustan Platinum",
  "Polychem Industries",
  "Oceanic Solvents",
  "Steam House",
];

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our minimum order quantity is 25 litres, and we supply from 25 litres up to bulk quantities with no upper limit.",
  },
  {
    question: "How quickly will I get a response?",
    answer:
      "We reply to enquiries by email or WhatsApp, usually the same working day. Once a grade is confirmed, typical time from enquiry to dispatch is about a week.",
  },
  {
    question: "Can you match the resin I currently run?",
    answer:
      "Yes. Send the grade and operating conditions you run today and we will confirm the matching Toyota grade and attach its technical data sheet.",
  },
  {
    question: "Do you provide a technical data sheet?",
    answer:
      "Yes. Every grade is supplied with a technical data sheet covering bead size, total exchange capacity, sieve analysis and operating limits.",
  },
  {
    question: "Do you deliver, or do I collect from the plant?",
    answer:
      "Both. We deliver to your plant, or you can collect from the factory at GIDC Vapi — whichever suits you.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Vapi, Valsad, Daman, Silvassa, Surat and South Gujarat, and we supply to plants across India.",
  },
];

const resinOptions = [
  "Cation Exchange Resin",
  "Anion Exchange Resin",
  "Mixed Bed Resin",
  "Water Softener Resin",
  "DM Plant Resin",
  "Not sure — please advise",
];

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-3 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${
        light ? "text-[#DF9B42]" : "text-[#B27B34]"
      }`}
    >
      <span
        className={`h-px w-8 ${
          light ? "bg-[#DF9B42]" : "bg-[#B27B34]"
        }`}
      />
      <span>{children}</span>
    </div>
  );
}

function Arrow() {
  return <span className="text-[#DF9B42]">→</span>;
}

function ContactInfoCard({
  number,
  label,
  title,
  children,
  accent = false,
}) {
  return (
    <div
      className={`group relative border p-6 transition-all duration-300 hover:-translate-y-1 ${
        accent
          ? "border-[#B27B34] bg-[#061729] text-white"
          : "border-[#DAE7F1] bg-white"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <div
          className={`font-mono text-[10px] tracking-[0.18em] ${
            accent ? "text-[#DF9B42]" : "text-[#B27B34]"
          }`}
        >
          {number} / {label}
        </div>

        <div
          className={`flex h-8 w-8 items-center justify-center border ${
            accent
              ? "border-[#49677F] text-[#DF9B42]"
              : "border-[#DAE7F1] text-[#B27B34]"
          }`}
        >
          <span className="text-lg">+</span>
        </div>
      </div>

      <h3
        className={`mb-3 font-serif text-2xl font-semibold ${
          accent ? "text-white" : "text-[#0A2C4B]"
        }`}
      >
        {title}
      </h3>

      <div
        className={`text-sm leading-7 ${
          accent ? "text-[#B8C9D8]" : "text-[#52667D]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function DetailBlock({ title, children }) {
  return (
    <div className="border-l-2 border-[#B27B34] bg-white p-6">
      <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#0A2C4B]">
        {title}
      </h3>

      <div className="text-sm leading-7 text-[#52667D]">
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] text-[#1B2740]">

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .font-display {
          font-family: "EB Garamond", serif;
        }

        .font-tech {
          font-family: "JetBrains Mono", monospace;
        }

        .blueprint-grid {
          background-color: #F6F9FC;
          background-image:
            linear-gradient(rgba(24,104,168,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(24,104,168,.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .technical-lines {
          background-color: #061729;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .marquee-track {
          animation: marquee 38s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>


      {/* =====================================================
          HERO
          HEADER REMOVED
      ====================================================== */}

      <main>

        <section className="blueprint-grid border-b border-[#DAE7F1]">
          <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#71849A]">
              <a href="/" className="hover:text-[#B27B34]">
                Home
              </a>

              <span>/</span>

              <span className="text-[#0A2C4B]">
                Contact Us
              </span>
            </div>


            <div className="grid items-center gap-10 lg:grid-cols-7 xl:gap-14">

              {/* LEFT */}
              <div className="lg:col-span-4">

                <SectionLabel>
                  Contact // Toyota Chemical Industries
                </SectionLabel>

                <h1 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-[#0A2C4B] sm:text-5xl lg:text-[64px]">
                  Contact Ion Exchange Resin{" "}
                  <span className="font-display italic font-medium text-[#1868A8]">
                    Manufacturers.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-[#52667D] sm:text-base">
                  Have questions about our products or need technical
                  assistance? Our team is here to help you find the right ion
                  exchange resin for your plant. Send us the grade and
                  operating conditions you run today, and we will confirm the
                  matching Toyota grade — usually the same working day.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="#enquiry"
                    className="inline-flex items-center justify-center gap-3 bg-[#061729] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#1868A8]"
                  >
                    Send An Enquiry
                    <Arrow />
                  </a>

                  <a
                    href="tel:+912602432021"
                    className="inline-flex items-center justify-center gap-3 border border-[#B27B34] bg-white px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
                  >
                    Call +91 260 2432021
                  </a>

                </div>

              </div>


              {/* RIGHT IMAGE */}
              <div className="lg:col-span-3">

                <div className="relative border border-[#B7CBDD] bg-white p-2 shadow-[0_18px_50px_rgba(6,42,94,.10)]">

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0A2C4B]">

                    <img
                      src="/images/contact-factory.jpg"
                      alt="Toyota Chemical Industries factory"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A2C4B] via-[#1868A8] to-[#061729]">

                      <div className="text-center">
                        <div className="font-mono text-[10px] tracking-[0.2em] text-[#DF9B42]">
                          IMAGE PLACEHOLDER
                        </div>

                        <div className="mt-2 font-display text-2xl italic text-white">
                          Toyota Chemical Industries
                        </div>

                        <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[#B8C9D8]">
                          GIDC Vapi // Gujarat
                        </div>
                      </div>

                    </div>

                    <div className="absolute left-4 top-4 bg-[#061729]/90 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#DF9B42]">
                      Direct // Factory Support
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between border-t border-white/20 pt-3 font-mono text-[8px] uppercase tracking-[0.12em] text-white">
                      <span>Toyota Chemical Industries</span>
                      <span>Vapi // Gujarat</span>
                    </div>

                  </div>
                </div>

              </div>

            </div>


            {/* STATS */}
            <div className="mt-10 grid border border-[#DAE7F1] bg-white sm:grid-cols-2 lg:grid-cols-4">

              {[
                ["Heritage", "Since 1972"],
                ["Expertise", "Ion Exchange"],
                ["Location", "Vapi, Gujarat"],
                ["Response", "Direct Support"],
              ].map(([label, value], index) => (

                <div
                  key={label}
                  className={`px-6 py-5 ${
                    index !== 0
                      ? "border-t sm:border-l sm:border-t-0 lg:border-l"
                      : ""
                  } border-[#DAE7F1]`}
                >

                  <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#B27B34]">
                    {label}
                  </div>

                  <div className="mt-2 font-display text-xl font-semibold text-[#0A2C4B]">
                    {value}
                  </div>

                </div>

              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            CONTACT CHANNELS
        ====================================================== */}

        <section className="bg-white">

          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <SectionLabel>
                  Contact Channels // Direct Support
                </SectionLabel>

                <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
                  Talk directly with our team.
                </h2>

              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#7B8DA1]">
                Sales · Technical · Application · Supply
              </div>

            </div>


            <div className="grid gap-5 md:grid-cols-3">

              <ContactInfoCard
                number="01"
                label="Sales"
                title="Sales Enquiries"
              >

                <p>
                  For product enquiries, quotations, grade selection and
                  commercial requirements.
                </p>

                <a
                  href="mailto:info@toyotachemicals.co.in"
                  className="mt-4 block font-mono text-[11px] font-bold text-[#1868A8]"
                >
                  info@toyotachemicals.co.in
                </a>

                <a
                  href="mailto:info@toyotachemicals.co.in"
                  className="mt-4 inline-flex bg-[#061729] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white"
                >
                  Email Sales →
                </a>

              </ContactInfoCard>


              <ContactInfoCard
                number="02"
                label="Technical"
                title="Technical Support"
                accent
              >

                <p>
                  Share your feedwater analysis, current resin specification
                  or plant requirements with our technical team.
                </p>

                <div className="mt-4 font-mono text-[10px] font-bold text-[#DF9B42]">
                  APPLICATION SUPPORT
                </div>

                <a
                  href="#enquiry"
                  className="mt-4 inline-flex border border-[#536F85] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white"
                >
                  Discuss Your Application →
                </a>

              </ContactInfoCard>


              <ContactInfoCard
                number="03"
                label="Phone"
                title="Call Our Team"
              >

                <p>
                  Speak directly with our team for urgent requirements,
                  product information or order assistance.
                </p>

                <a
                  href="tel:+912602432021"
                  className="mt-4 block font-mono text-[11px] font-bold text-[#1868A8]"
                >
                  +91 260 2432021
                </a>

                <a
                  href="tel:+912602432021"
                  className="mt-4 inline-flex bg-[#061729] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white"
                >
                  Call Now →
                </a>

              </ContactInfoCard>

            </div>

          </div>

        </section>


        {/* =====================================================
            ENQUIRY
        ====================================================== */}

        <section
          id="enquiry"
          className="blueprint-grid border-y border-[#DAE7F1]"
        >

          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

            <div className="grid gap-8 lg:grid-cols-7">

              {/* FORM */}

              <div className="lg:col-span-4">

                <SectionLabel>
                  Send An Enquiry // Get In Touch
                </SectionLabel>

                <h2 className="font-display text-4xl font-semibold leading-tight text-[#0A2C4B] sm:text-5xl">
                  Tell us what you need.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52667D]">
                  Complete the form below and provide as much application
                  information as possible. This helps our team understand your
                  requirement and respond more effectively.
                </p>


                <form
                  onSubmit={handleSubmit}
                  className="mt-8 border border-[#DAE7F1] bg-white p-5 shadow-[0_14px_40px_rgba(6,42,94,.06)] sm:p-7"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
                      >
                        Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
                      >
                        Email *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
                      >
                        Phone / WhatsApp *
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91"
                        className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
                      />
                    </div>


                    <div>
                      <label
                        htmlFor="product"
                        className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
                      >
                        Resin Of Interest
                      </label>

                      <select
                        id="product"
                        name="product"
                        defaultValue=""
                        className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
                      >

                        <option value="">
                          Select a category
                        </option>

                        {resinOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}

                      </select>
                    </div>


                    <div>
                      <label
                        htmlFor="location"
                        className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
                      >
                        Plant Location
                      </label>

                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="City / GIDC estate"
                        className="w-full border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm outline-none focus:border-[#B27B34]"
                      />
                    </div>

                  </div>


                  <div className="mt-5">

                    <label
                      htmlFor="message"
                      className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0A2C4B]"
                    >
                      Grade & Operating Conditions *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us the grade you currently run and your operating conditions (flow, capacity, application)."
                      className="w-full resize-y border border-[#DAE7F1] bg-[#F9FBFD] px-4 py-3 text-sm leading-6 outline-none focus:border-[#B27B34]"
                    />

                  </div>


                  <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-[#71849A]">

                    <input
                      type="checkbox"
                      required
                      name="consent"
                      className="mt-1 accent-[#B27B34]"
                    />

                    <span>
                      I agree to be contacted about this enquiry. See our{" "}
                      <a
                        href="/privacy-policy"
                        className="font-semibold text-[#1868A8] underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>

                  </label>


                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-3 bg-[#061729] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#B27B34]"
                  >
                    {formSent
                      ? "Enquiry Ready ✓"
                      : "Send Enquiry →"}
                  </button>


                  {formSent && (
                    <div className="mt-4 border border-[#B27B34] bg-[#FFF9F0] px-4 py-3 font-mono text-[9px] uppercase tracking-wider text-[#7A5627]">
                      Form UI is ready. Connect the submit handler to your
                      backend or email service.
                    </div>
                  )}

                </form>

              </div>


              {/* DETAILS */}

              <div className="lg:col-span-3">

                <div className="space-y-4">

                  <div className="border border-[#DAE7F1] bg-white p-6">

                    <SectionLabel>
                      Company Information
                    </SectionLabel>

                    <h3 className="font-display text-3xl font-semibold text-[#0A2C4B]">
                      Toyota Chemical Industries
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#52667D]">
                      Toyota Chemical Industries Pvt. Ltd. contact information,
                      factory location, marketing office and direct enquiry
                      channels.
                    </p>

                  </div>


                  <DetailBlock title="Factory">

                    <strong className="text-[#0A2C4B]">
                      Toyota Chemical Industries Pvt. Ltd.
                    </strong>

                    <br />

                    Plot No. 100, Vapi–Silvassa Road,
                    <br />
                    GIDC Vapi, Gujarat 396195, India
                    <br />

                    <a
                      href="tel:+912602432021"
                      className="font-mono text-xs font-bold text-[#1868A8]"
                    >
                      +91 260 2432021
                    </a>

                    <br />

                    <a
                      href="mailto:info@toyotachemicals.co.in"
                      className="font-mono text-xs font-bold text-[#1868A8]"
                    >
                      info@toyotachemicals.co.in
                    </a>

                  </DetailBlock>


                  <DetailBlock title="Marketing Office">

                    Extn 1.2, Sidhpura Co-Op Ind. Estate,
                    Gaiwadi,
                    <br />
                    S.V. Road, Goregaon (W),
                    Mumbai 400 104
                    <br />

                    <a
                      href="tel:+912249678234"
                      className="font-mono text-xs font-bold text-[#1868A8]"
                    >
                      022-4967 8234
                    </a>

                    <br />

                    <a
                      href="mailto:mumbai@toyotachemicals.co.in"
                      className="font-mono text-xs font-bold text-[#1868A8]"
                    >
                      mumbai@toyotachemicals.co.in
                    </a>

                  </DetailBlock>


                  <DetailBlock title="Business Hours">

                    <strong className="text-[#0A2C4B]">
                      Monday – Saturday
                    </strong>

                    <br />

                    9:30 AM – 6:30 PM IST

                    <br />

                    <strong className="text-[#0A2C4B]">
                      Sunday
                    </strong>{" "}
                    · Closed

                  </DetailBlock>


                  <DetailBlock title="Service Area">

                    Vapi, Valsad, Daman, Silvassa, Surat and South Gujarat —
                    and supply across India.

                  </DetailBlock>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MAP
        ====================================================== */}

        <section className="bg-[#EEF4F9]">

          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

            <div className="mb-8">

              <SectionLabel>
                Factory Location // GIDC Vapi
              </SectionLabel>

              <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
                Find us in Vapi, Gujarat.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52667D]">
                Toyota Chemical Industries Pvt. Ltd. factory is located at
                Plot No. 100, Vapi–Silvassa Road, GIDC Vapi, Gujarat 396195,
                India.
              </p>

            </div>


            <div className="relative overflow-hidden border border-[#B7CBDD] bg-white p-2">

              <iframe
                title="Toyota Chemical Industries GIDC Vapi"
                src="https://maps.google.com/maps?q=20.3594162,72.9252245&z=14&output=embed"
                loading="lazy"
                className="h-[380px] w-full border-0 sm:h-[460px]"
              />

              <div className="pointer-events-none absolute left-6 top-6 bg-[#061729]/95 px-4 py-3">

                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#DF9B42]">
                  GIDC VAPI
                </div>

                <div className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white">
                  Gujarat // India
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECHNICAL CTA
        ====================================================== */}

        <section className="technical-lines relative overflow-hidden">

          <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

            <div className="grid gap-10 lg:grid-cols-7 lg:items-center">

              <div className="lg:col-span-4">

                <SectionLabel light>
                  Technical Consultation // Application Support
                </SectionLabel>

                <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Have a resin problem to{" "}
                  <span className="italic text-[#DF9B42]">
                    solve?
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B8C9D8]">
                  Send us the operating conditions you are working with. Our
                  technical team can help evaluate resin type, ionic form,
                  capacity and application suitability.
                </p>

              </div>


              <div className="lg:col-span-3">

                <div className="border border-[#49677F] bg-[#061729]/80 p-6">

                  <div className="border-b border-[#49677F] pb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    Application Support
                  </div>

                  {[
                    ["Grade Selection", "Support"],
                    ["Grade Matching", "Available"],
                    ["TDS / COA", "Available"],
                    ["Bulk Requirements", "Direct"],
                  ].map(([name, value]) => (

                    <div
                      key={name}
                      className="flex items-center justify-between border-b border-[#304B61] py-4 last:border-b-0"
                    >

                      <span className="font-mono text-[9px] text-[#B8C9D8]">
                        {name}
                      </span>

                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#DF9B42]">
                        {value}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FAQ
        ====================================================== */}

        <section id="faq" className="bg-white">

          <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:py-20">

            <div className="text-center">

              <SectionLabel>
                FAQ // Contact Support
              </SectionLabel>

              <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#71849A]">
                Quick answers to common questions about enquiries, resin
                matching, minimum order quantity, technical data and delivery.
              </p>

            </div>


            <div className="mx-auto mt-10 max-w-4xl">

              {faqs.map((faq, index) => (

                <details
                  key={faq.question}
                  open={index === 0}
                  className="group border-b border-[#DAE7F1] py-5"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl font-semibold text-[#0A2C4B]">

                    <span>{faq.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#DAE7F1] font-mono text-sm text-[#B27B34] transition group-open:rotate-45">
                      +
                    </span>

                  </summary>

                  <p className="max-w-3xl pt-4 text-sm leading-7 text-[#64778D]">
                    {faq.answer}
                  </p>

                </details>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CUSTOMERS
        ====================================================== */}

        <section className="border-t border-[#DAE7F1] bg-white py-14">

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

            <SectionLabel>
              Customer Trust // Industrial Partners
            </SectionLabel>

            <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
              Trusted across Indian industry.
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#71849A]">
              A selection of the organisations we supply ion exchange resins
              to across power, oil & gas, steel, fertiliser, pharmaceutical
              and chemical sectors.
            </p>

          </div>


          <div className="mt-8 overflow-hidden border-y border-[#DAE7F1] bg-[#F6F9FC] py-5">

            <div className="marquee-track flex w-max">

              {[...customers, ...customers].map(
                (customer, index) => (

                  <div
                    key={`${customer}-${index}`}
                    className="mr-3 flex h-20 w-[180px] items-center justify-center border border-[#DAE7F1] bg-white px-5"
                  >

                    <span className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#0A2C4B]">
                      {customer}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="technical-lines relative overflow-hidden border-t border-[#173D5A]">

          <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">

            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">

              <div>

                <SectionLabel light>
                  Start A Conversation // Direct Support
                </SectionLabel>

                <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  Ready to discuss your requirement?
                </h2>

                <p className="mt-2 max-w-2xl text-sm text-[#B8C9D8]">
                  Contact our team for resin selection, technical guidance,
                  quotations and industrial supply requirements.
                </p>

              </div>


              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

                <a
                  href="mailto:info@toyotachemicals.co.in"
                  className="bg-[#B27B34] px-8 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white"
                >
                  Email Us
                </a>

                <a
                  href="tel:+912602432021"
                  className="border border-[#6A8499] px-8 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white"
                >
                  Call Us
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER REMOVED */}

    </div>
  );
}