import React, { useState } from "react";

const industries = [
  {
    code: "POWER / THERMAL",
    number: "01 / 06",
    badge: "BOILER FEED · DM · CONDENSATE",
    title: "Power / Thermal Plants",
    description:
      "Boiler feed softening, demineralisation, dealkalisation and condensate polishing for power and thermal plant water treatment.",
    points: [
      "Softening & demineralisation",
      "Dealkalisation & condensate polishing",
    ],
    link: "Explore power / thermal",
    href: "/industries/power-thermal-plants",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WOLlWSaO3IoVpSdqieFOqzFqyCwDAm2HSruU__Eb2ZMlefXQjJ2LwMizE6SONJnrwRDD0eiKCVoTH49541zlKvG44zfl1ond9ZRUsbAJLNdjPdESjYk0BPKBKnt_M1SeGU1Sogu3AZMSIQTuXStp_j4F_iW55xDpIW9bCsiGjSJafwSSL1HzymYeM4ZOiFjr2oQjv8U__UW4LnMeOQGqBRLgTwXrrz1zVE5tM6nd9GLfhgGpd6YvxPeag",
    alt: "Industrial power and thermal plant water treatment application",
  },
  {
    code: "SUGAR PROCESSING",
    number: "02 / 06",
    badge: "DECOLOURISE · SOFTEN · DM",
    title: "Sugar Processing",
    description:
      "Ion exchange resin solutions for liquor decolourisation, softening and demineralisation across cane and refined sugar processing.",
    points: [
      "Liquor decolourisation",
      "Softening & demineralisation",
    ],
    link: "Explore sugar processing",
    href: "/industries/sugar-processing",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WSWc3ikXmUNZLW-PCtPZjYii19ON_9qmbqc4SuxpWF-xo4XBuDsr6ME0LsMiyumk1c9Ue7tpnwlqnUS72mpkXB0NALLzhSDVn2WK0TbUSEly5uRqYKuD88297Sw9IIAjXdJAqb_S5Vi-Msby9jPUlCTfhf3syknjULitXMKM5-XqpcDKXPF_Fkb6ohoeZ7GQhcQg7h0aTTnHi9T4pHPvlOlS5lpVfyvmydp3R3adyaUwQZ6ROctB5R5A",
    alt: "Sugar processing industrial water treatment application",
  },
  {
    code: "TEXTILE & DYE",
    number: "03 / 06",
    badge: "SOFTEN · DM · EFFLUENT",
    title: "Textile & Dye",
    description:
      "Soft water for consistent dyeing, demineralised boiler feed and effluent colour removal for textile and dyeing operations.",
    points: [
      "Soft water for consistent dyeing",
      "DM boiler feed & effluent colour removal",
    ],
    link: "Explore textile & dye",
    href: "/industries/textile-dye",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1U7RAm28SlNBiOwlZPr3cwQaKxYSksjP9_7RH_nh-YgCJqC2X0c0xfl2Pa64KVkRT--2L9jz2b84j_2JbnvoB8fierrV55oOmh4Qw9OTdInhrId8x08O-QS_8ehgfn0n4Bc4B9zcBtdRkNrxmJCGaTYYvGuVGKipXUnbO1MDK6MynCAvODy2mKLKJHz2GLrXrvm8T6VRN1gRZEQPgQD9xWkl5o1n1qT9-9gM7B8rR-LZPfSRD_tIoIsBoM",
    alt: "Textile dyeing and industrial water treatment application",
  },
  {
    code: "CHEMICAL",
    number: "04 / 06",
    badge: "DM · HEAVY METAL · ZLD",
    title: "Chemical & Intermediates",
    description:
      "Process demineralisation, softening, heavy-metal removal and ZLD applications for chemical and intermediate manufacturing.",
    points: [
      "Process demineralisation & softening",
      "Heavy-metal removal & ZLD",
    ],
    link: "Explore chemical industry",
    href: "/industries/chemical-intermediates",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WOLlWSaO3IoVpSdqieFOqzFqyCwDAm2HSruU__Eb2ZMlefXQjJ2LwMizE6SONJnrwRDD0eiKCVoTH49541zlKvG44zfl1ond9ZRUsbAJLNdjPdESjYk0BPKBKnt_M1SeGU1Sogu3AZMSIQTuXStp_j4F_iW55xDpIW9bCsiGjSJafwSSL1HzymYeM4ZOiFjr2oQjv8U__UW4LnMeOQGqBRLgTwXrrz1zVE5tM6nd9GLfhgGpd6YvxPeag",
    alt: "Chemical manufacturing industrial water treatment application",
  },
  {
    code: "PAPER & PULP",
    number: "05 / 06",
    badge: "SOFTEN · DM · POLISH",
    title: "Paper & Pulp",
    description:
      "Process water softening, demineralisation and condensate polishing for paper and pulp manufacturing operations.",
    points: [
      "Process water softening",
      "Demineralisation & condensate polishing",
    ],
    link: "Explore paper & pulp",
    href: "/industries/paper-pulp",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WSWc3ikXmUNZLW-PCtPZjYii19ON_9qmbqc4SuxpWF-xo4XBuDsr6ME0LsMiyumk1c9Ue7tpnwlqnUS72mpkXB0NALLzhSDVn2WK0TbUSEly5uRqYKuD88297Sw9IIAjXdJAqb_S5Vi-Msby9jPUlCTfhf3syknjULitXMKM5-XqpcDKXPF_Fkb6ohoeZ7GQhcQg7h0aTTnHi9T4pHPvlOlS5lpVfyvmydp3R3adyaUwQZ6ROctB5R5A",
    alt: "Paper and pulp manufacturing water treatment application",
  },
  {
    code: "FOOD & BEVERAGE",
    number: "06 / 06",
    badge: "SOFTEN · DEMIN · DECOLOUR",
    title: "Food & Beverage",
    description:
      "Softening, demineralisation, decolourisation and polishing applications for food and beverage water treatment.",
    points: [
      "Softening & demineralisation",
      "Decolourisation & polishing",
    ],
    link: "Explore food & beverage",
    href: "/industries/food-beverage",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1W7RAm28SlNBiOwlZPr3cwQaKxYSksjP9_7RH_nh-YgCJqC2X0c0xfl2Pa64KVkRT--2L9jz2b84j_2JbnvoB8fierrV55oOmh4Qw9OTdInhrId8x08O-QS_8ehgfn0n4Bc4B9zcBtdRkNrxmJCGaTYYvGuVGKipXUnbO1MDK6MynCAvODy2mKLKJHz2GLrXrvm8T6VRN1gRZEQPgQD9xWkl5o1n1qT9-9gM7B8rR-LZPfSRD_tIoIsBoM",
    alt: "Food and beverage water treatment application",
  },
];

const pillars = [
  {
    number: "01 / HERITAGE",
    badge: "EST. 1972",
    title: "Since 1972",
    text:
      "Toyota Chemical Industries has supplied ion exchange resins across Indian industry since 1972 from Vapi, Gujarat.",
  },
  {
    number: "02 / QUALITY SYSTEMS",
    badge: "AUDITED",
    title: "ISO 9001 & 14001",
    text:
      "Our manufacturing facility operates with ISO 9001:2015 and ISO 14001:2015 quality and environmental management systems.",
  },
  {
    number: "03 / DISPATCH AGILITY",
    badge: "FLEXIBLE",
    title: "25 L to bulk",
    text:
      "Supply starts from 25 litres and scales to full industrial requirements, supporting trial charges, top-ups and complete resin changes.",
  },
  {
    number: "04 / DATA TRANSPARENCY",
    badge: "TDS",
    title: "TDS with every grade",
    text:
      "Technical data is available for every grade, including bead size, capacity and sieve analysis for application-specific selection.",
  },
];

const faqs = [
  {
    q: "1. Which industries do you serve?",
    a:
      "Toyota Chemical Industries serves power and thermal plants, sugar processing, textile and dye, chemical and intermediates, paper and pulp, and food and beverage applications.",
  },
  {
    q: "2. Which resin duties are covered across these industries?",
    a:
      "The industry applications include softening, demineralisation, dealkalisation, condensate polishing, liquor decolourisation, effluent colour removal, heavy-metal removal and ZLD-related duties.",
  },
  {
    q: "3. Can you recommend a resin grade for our application?",
    a:
      "Yes. Share your water problem, operating conditions and current resin details, and the requirement can be mapped to the appropriate AGRION resin grade.",
  },
  {
    q: "4. What information is available with the resin grades?",
    a:
      "A technical data sheet is available for each grade, covering relevant specifications such as bead size, exchange capacity and sieve analysis.",
  },
  {
    q: "5. What is the minimum supply quantity?",
    a:
      "Supply is available from 25 litres through bulk industrial requirements, depending on the application and plant requirement.",
  },
];

const customers = [
  "GAIL",
  "Indian Oil",
  "HPCL",
  "NPCIL",
  "Reliance",
  "Tata Power",
  "IFFCO",
  "JSW Steel",
  "NFL",
  "SAIL",
  "Pidilite",
  "Mahagenco",
  "RINL",
  "Sun Pharma",
  "Oceanic Solvents",
  "Hindustan Platinum",
  "Polychem Industries",
  "Steam House",
  "CSPGCL",
  "PSPCL",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#B27B34]">
      <span className="h-px w-8 bg-[#B27B34]" />
      {children}
    </div>
  );
}

function IndustryCard({ item }) {
  return (
    <article className="group overflow-hidden border border-[#DAE7F1] bg-white shadow-[0_16px_32px_-8px_rgba(10,44,75,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(10,44,75,0.12)]">
      <div className="relative h-64 overflow-hidden bg-[#061729]">
        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061729]/85 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 flex w-[calc(100%-40px)] items-center justify-between font-mono text-[10px] tracking-widest text-white">
          <span className="border border-white/30 bg-[#061729]/70 px-3 py-2 backdrop-blur-sm">
            {item.code}
          </span>

          <span>{item.number}</span>
        </div>

        <span className="absolute bottom-5 left-5 border border-[#DF9B42]/50 bg-[#061729]/80 px-3 py-2 font-mono text-[9px] font-bold tracking-[0.14em] text-[#DF9B42] backdrop-blur-sm">
          {item.badge}
        </span>
      </div>

      <div className="p-7">
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#0A2C4B] transition-colors group-hover:text-[#1868A8]">
          {item.title}
        </h3>

        <p className="min-h-[76px] text-sm leading-6 text-slate-600">
          {item.description}
        </p>

        <div className="my-6 border-y border-[#DAE7F1] py-4">
          {item.points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-slate-600"
            >
              <span className="h-1.5 w-1.5 bg-[#B27B34]" />
              {point}
            </div>
          ))}
        </div>

        <a
          href={item.href}
          className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#1868A8] transition hover:text-[#B27B34]"
        >
          {item.link}
          <span className="text-base transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

function Industries() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#F6F9FC] text-[#0A2C4B] antialiased selection:bg-[#B27B34] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .font-serif {
          font-family: "EB Garamond", serif;
        }

        .font-mono {
          font-family: "JetBrains Mono", monospace;
        }

        .bg-tech-blueprint {
          background-size: 36px 36px;
          background-image:
            linear-gradient(to right, rgba(10,44,75,.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10,44,75,.04) 1px, transparent 1px);
        }

        .technical-lines {
          background-image:
            linear-gradient(
              90deg,
              rgba(255,255,255,.07) 1px,
              transparent 1px
            );
          background-size: 32px 100%;
        }

        .marquee-track {
          animation: marquee 28s linear infinite;
          width: max-content;
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

      <main>
        {/* BREADCRUMB */}
        <div className="mx-auto max-w-[1440px] px-5 pt-7 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">
            <a
              href="/"
              className="transition hover:text-[#1868A8]"
            >
              Home
            </a>

            <span>/</span>

            <span className="text-[#0A2C4B]">
              Industries
            </span>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#DAE7F1] bg-white pb-16 pt-12 lg:pb-20 lg:pt-14">
          <div className="pointer-events-none absolute inset-0 bg-tech-blueprint" />

          <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 border border-[#DAE7F1] bg-white/80 px-3 py-2 font-mono text-[9px] font-bold tracking-[0.16em] text-[#1868A8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B27B34]" />
                INDUSTRIES // APPLICATION PORTFOLIO
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight text-[#0A2C4B] sm:text-6xl lg:text-[72px]">
                Ion Exchange Resins{" "}
                <span className="font-serif font-medium italic text-[#1868A8]">
                  for Every Industry
                </span>{" "}
                We Serve
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
                From power-plant boiler feed to sugar decolourisation,
                textile dyeing to chemical process water — the AGRION resins
                and the water problems they solve, sector by sector.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
                Manufactured by Toyota Chemical Industries in Vapi, Gujarat
                since 1972.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#consultation-strip"
                  className="bg-[#0A2C4B] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#1868A8]"
                >
                  Discuss your requirement →
                </a>

                <a
                  href="#industry-portfolio"
                  className="border border-[#0A2C4B] bg-white px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A2C4B] transition hover:bg-[#F6F9FC]"
                >
                  Browse sectors
                </a>
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-2 border-y border-[#DAE7F1] sm:grid-cols-4">
                {[
                  ["Sectors", "6 Industries"],
                  ["Heritage", "50+ Years"],
                  ["Portfolio", "Full Resin Range"],
                  ["Supply", "25 L to Bulk"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-r border-[#DAE7F1] px-4 py-5 first:pl-0 last:border-r-0"
                  >
                    <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#B27B34]">
                      {label}
                    </div>

                    <div className="mt-2 text-xs font-bold text-[#0A2C4B]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden border border-[#0A2C4B]/10 bg-[#061729] shadow-[0_24px_48px_-12px_rgba(10,44,75,0.12)]">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WOLlWSaO3IoVpSdqieFOqzFqyCwDAm2HSruU__Eb2ZMlefXQjJ2LwMizE6SONJnrwRDD0eiKCVoTH49541zlKvG44zfl1ond9ZRUsbAJLNdjPdESjYk0BPKBKnt_M1SeGU1Sogu3AZMSIQTuXStp_j4F_iW55xDpIW9bCsiGjSJafwSSL1HzymYeM4ZOiFjr2oQjv8U__UW4LnMeOQGqBRLgTwXrrz1zVE5tM6nd9GLfhgGpd6YvxPeag"
                  alt="Industrial ion exchange resin application"
                  className="h-[430px] w-full object-cover opacity-90 lg:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061729] via-transparent to-[#061729]/10" />

                <div className="absolute left-5 top-5 border border-white/25 bg-[#061729]/70 px-3 py-2 font-mono text-[9px] font-bold tracking-wider text-white backdrop-blur-sm">
                  6 INDUSTRY APPLICATIONS
                </div>

                <div className="absolute bottom-20 right-5 border border-[#DF9B42]/50 bg-[#061729]/70 px-3 py-2 font-mono text-[9px] font-bold tracking-wider text-[#DF9B42] backdrop-blur-sm">
                  AGRION ION EXCHANGE RESINS
                </div>

                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 border-t border-white/15 bg-[#061729]/80 backdrop-blur-sm">
                  <div className="p-4 font-mono text-[8px] uppercase tracking-wider text-slate-300">
                    POWER · SUGAR · TEXTILE
                  </div>

                  <div className="border-l border-white/15 p-4 text-right font-mono text-[8px] uppercase tracking-wider text-[#DF9B42]">
                    CHEMICAL · PAPER · FOOD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRY PORTFOLIO */}
        <section
          id="industry-portfolio"
          className="relative border-b border-[#DAE7F1] bg-[#F6F9FC] py-20 lg:py-24"
        >
          <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <SectionLabel>
                  INDUSTRY APPLICATIONS // SECTOR-WISE WATER SOLUTIONS
                </SectionLabel>

                <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
                  One Supplier, Every Industry
                </h2>
              </div>

              <p className="max-w-md font-mono text-[10px] uppercase leading-5 tracking-wider text-slate-500">
                MATCHING AGRION RESINS TO EACH INDUSTRY'S WATER PROBLEM
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((item) => (
                <IndustryCard
                  key={item.code}
                  item={item}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="relative overflow-hidden border-b border-[#DAE7F1] bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>
                WHY TOYOTA CHEMICAL // INDUSTRIAL SUPPLY
              </SectionLabel>

              <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
                The same resins, matched to each industry's water
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Different industries face different water problems — but they
                draw on the same core of cation, anion and mixed bed chemistry.
                Each industry can be mapped to the AGRION grades and technical
                data relevant to its application.
              </p>
            </div>

            <div className="grid border-l border-t border-[#DAE7F1] sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <article
                  key={pillar.number}
                  className="group border-b border-r border-[#DAE7F1] p-7 transition hover:bg-[#F6F9FC] lg:p-8"
                >
                  <div className="mb-10 flex items-center justify-between font-mono text-[9px] font-bold tracking-wider text-slate-400">
                    <span>{pillar.number}</span>

                    <span className="text-[#B27B34]">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="mb-5 h-10 w-10 border border-[#B27B34]/40 bg-[#B27B34]/5" />

                  <h3 className="mb-3 text-2xl font-bold text-[#0A2C4B]">
                    {pillar.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {pillar.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-b border-[#DAE7F1] bg-[#F6F9FC] py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="mb-12 text-center">
              <SectionLabel>
                INDUSTRY KNOWLEDGE BASE
              </SectionLabel>

              <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="border-t border-[#DAE7F1] bg-white">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="border-b border-[#DAE7F1]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left lg:px-8"
                    >
                      <span className="text-base font-bold text-[#0A2C4B] lg:text-lg">
                        {faq.q}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border border-[#DAE7F1] font-mono text-lg text-[#B27B34] transition ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-7 pr-16 text-sm leading-7 text-slate-600 lg:px-8 lg:pr-20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="consultation-strip"
          className="relative overflow-hidden border-b border-[#DAE7F1] bg-gradient-to-r from-[#061729] via-[#0A2C4B] to-[#061729] py-14 text-white lg:py-16"
        >
          <div className="technical-lines absolute inset-0 opacity-60" />

          <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
            <div>
              <div className="mb-3 font-mono text-[9px] font-bold tracking-[0.18em] text-[#DF9B42]">
                INDUSTRY REQUIREMENT // DIRECT FACTORY SUPPORT
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don't see your industry?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Tell us your water problem. We’ll map it to the right AGRION
                grade and application.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@toyotachemicals.co.in"
                className="bg-[#B27B34] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#DF9B42]"
              >
                Send an enquiry
              </a>

              <a
                href="https://wa.me/919898701010"
                target="_blank"
                rel="noreferrer"
                className="border border-white/30 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>

        {/* CUSTOMERS */}
        <section className="overflow-hidden border-b border-[#DAE7F1] bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
            <SectionLabel>
              OUR CUSTOMERS // TRUSTED ACROSS INDIAN INDUSTRY
            </SectionLabel>

            <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2C4B] sm:text-4xl">
                  Industry-wide supply experience
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
                  Toyota Chemical Industries supplies ion exchange resins
                  across diverse industrial water-treatment applications.
                </p>
              </div>
            </div>
          </div>

          <div className="border-y border-[#DAE7F1] bg-[#F6F9FC] py-5">
            <div className="marquee-track flex gap-3 px-3">
              {[...customers, ...customers].map(
                (customer, index) => (
                  <div
                    key={`${customer}-${index}`}
                    className="flex h-16 min-w-[150px] items-center justify-center border border-[#DAE7F1] bg-white px-5 font-mono text-[10px] font-bold tracking-wider text-[#0A2C4B] transition hover:border-[#B27B34] hover:text-[#B27B34]"
                  >
                    {customer}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Industries;