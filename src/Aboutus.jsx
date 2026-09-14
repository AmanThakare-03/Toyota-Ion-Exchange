// import React, { useState } from "react";
// import { Link } from "react-router";

// const industries = [
//   "Power Generation",
//   "Oil & Gas",
//   "Pharmaceuticals",
//   "Chemical Processing",
//   "Steel & Metals",
//   "Fertilizers",
//   "Food & Beverage",
//   "Water Treatment",
// ];

// const strengths = [
//   {
//     number: "01 / QUALITY",
//     badge: "QUALITY FIRST",
//     title: "Quality First",
//     text: "Quality is at the core of our manufacturing approach. We focus on consistent product performance, controlled processes and reliable ion exchange resin quality.",
//   },
//   {
//     number: "02 / CUSTOMER",
//     badge: "CUSTOMER FOCUS",
//     title: "Customer Focus",
//     text: "We understand customer requirements and support them with dependable products, responsive communication and solutions suited to their operating needs.",
//   },
//   {
//     number: "03 / INNOVATION",
//     badge: "CONTINUOUS",
//     title: "Innovation",
//     text: "Continuous improvement and technical development help us strengthen our products and manufacturing capabilities for changing industrial requirements.",
//   },
//   {
//     number: "04 / EXPERIENCE",
//     badge: "SINCE 1972",
//     title: "Industry Experience",
//     text: "More than five decades of experience in chemical manufacturing and ion exchange resin technology have helped us build strong technical and application knowledge.",
//   },
// ];

// const milestones = [
//   {
//     year: "1972",
//     title: "The Beginning",
//     text: "Toyota Chemical Industries began its journey in 1972 with a focus on chemical manufacturing and industrial applications.",
//   },
//   {
//     year: "1995",
//     title: "Resin Manufacturing",
//     text: "The company expanded its capabilities and strengthened its focus on ion exchange resin manufacturing for industrial and water-treatment applications.",
//   },
//   {
//     year: "2024",
//     title: "ISO Certification",
//     text: "Strengthened quality systems with ISO certification, supporting a more structured approach to manufacturing and quality management.",
//   },
//   {
//     year: "2024",
//     title: "Expansion",
//     text: "Expanded manufacturing capabilities to support growing customer requirements and the continued development of ion exchange resin solutions.",
//   },
// ];

// const directors = [
//   {
//     name: "Manoj G Oza",
//     role: "BOARD OF DIRECTOR",
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
//   },
//   {
//     name: "Kumar S Oza",
//     role: "BOARD OF DIRECTOR",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
//   },
//   {
//     name: "Pariksheet M Oza",
//     role: "BOARD OF DIRECTOR",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
//   },
// ];

// const customers = [
//   "GAIL",
//   "Indian Oil",
//   "HPCL",
//   "NPCIL",
//   "Reliance",
//   "Tata Power",
//   "IFFCO",
//   "JSW Steel",
//   "NFL",
//   "SAIL",
//   "Pidilite",
//   "Mahagenco",
// ];

// const faqs = [
//   {
//     question: "When was Toyota Chemical Industries established?",
//     answer:
//       "Toyota Chemical Industries began its journey in 1972 and has developed more than five decades of experience in chemical manufacturing and ion exchange resin technology.",
//   },
//   {
//     question: "What does Toyota Chemical Industries manufacture?",
//     answer:
//       "Toyota Chemical Industries manufactures ion exchange resins and provides resin solutions for water treatment and industrial process applications.",
//   },
//   {
//     question: "Where is Toyota Chemical Industries located?",
//     answer:
//       "Toyota Chemical Industries operates from GIDC Vapi, Gujarat, India, an important industrial region supporting chemical and manufacturing activities.",
//   },
//   {
//     question: "Which industries do you serve?",
//     answer:
//       "Our products and solutions support industries including power generation, oil and gas, pharmaceuticals, chemicals, steel, fertilizers, food and beverage and water treatment.",
//   },
//   {
//     question: "How can I contact Toyota Chemical Industries?",
//     answer:
//       "You can contact our team through the Contact Us page to discuss your ion exchange resin requirements, application needs or technical queries.",
//   },
// ];

// function SectionLabel({ children }) {
//   return (
//     <div className="mb-4 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#B27B34]">
//       <span className="h-px w-8 bg-[#B27B34]" />
//       {children}
//     </div>
//   );
// }

// function About() {
//   const [openFaq, setOpenFaq] = useState(null);

//   return (
//     <div className="min-h-screen bg-[#F6F9FC] text-[#0A2C4B] antialiased selection:bg-[#B27B34] selection:text-white">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

//         html {
//           scroll-behavior: smooth;
//         }

//         body {
//           margin: 0;
//           font-family: "Plus Jakarta Sans", sans-serif;
//         }

//         .font-serif {
//           font-family: "EB Garamond", serif;
//         }

//         .font-mono {
//           font-family: "JetBrains Mono", monospace;
//         }

//         .bg-tech-blueprint {
//           background-size: 36px 36px;
//           background-image:
//             linear-gradient(
//               to right,
//               rgba(10,44,75,.04) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               to bottom,
//               rgba(10,44,75,.04) 1px,
//               transparent 1px
//             );
//         }

//         .technical-lines {
//           background-image:
//             linear-gradient(
//               90deg,
//               rgba(255,255,255,.07) 1px,
//               transparent 1px
//             );
//           background-size: 32px 100%;
//         }

//         .blueprint-dark {
//           background-image:
//             linear-gradient(
//               rgba(255,255,255,.055) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255,255,255,.055) 1px,
//               transparent 1px
//             );
//           background-size: 34px 34px;
//         }

//         .marquee-track {
//           animation: marquee 28s linear infinite;
//           width: max-content;
//         }

//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }

//         .faq-answer {
//           display: grid;
//           grid-template-rows: 0fr;
//           transition: grid-template-rows 0.3s ease;
//         }

//         .faq-answer.open {
//           grid-template-rows: 1fr;
//         }

//         .faq-answer-inner {
//           overflow: hidden;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .marquee-track {
//             animation: none;
//           }

//           .faq-answer {
//             transition: none;
//           }
//         }
//       `}</style>

//       <main>
//         {/* =========================
//             BREADCRUMB
//         ========================== */}
//         <div className="mx-auto max-w-[1440px] px-5 pt-7 lg:px-8">
//           <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">
//             <Link
//               to="/"
//               className="transition-colors hover:text-[#1868A8]"
//             >
//               Home
//             </Link>

//             <span>/</span>

//             <span className="text-[#0A2C4B]">About Us</span>
//           </div>
//         </div>

//         {/* =========================
//             HERO
//         ========================== */}
//         <section className="relative overflow-hidden border-b border-[#DAE7F1] bg-white pb-16 pt-12 lg:pb-20 lg:pt-14">
//           <div className="pointer-events-none absolute inset-0 bg-tech-blueprint" />

//           <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
//             <div className="lg:col-span-7">
//               <div className="mb-5 inline-flex items-center gap-2 border border-[#DAE7F1] bg-white/80 px-3 py-2 font-mono text-[9px] font-bold tracking-[0.16em] text-[#1868A8]">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#B27B34]" />
//                 ABOUT // TOYOTA CHEMICAL INDUSTRIES
//               </div>

//               <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight text-[#0A2C4B] sm:text-6xl lg:text-[72px]">
//                 Ion Exchange Resin
//                 <span className="font-serif font-medium italic text-[#1868A8]">
//                   {" "}Manufacturers in India
//                 </span>
//               </h1>

//               <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
//                 Since 1972, Toyota Chemical Industries has been developing
//                 and manufacturing chemical solutions with a strong focus on
//                 ion exchange resin technology, quality and industrial
//                 performance.
//               </p>

//               <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
//                 With more than five decades of experience, we support
//                 customers across water treatment and critical industrial
//                 applications with dependable products and technical
//                 understanding.
//               </p>

//               <div className="mt-9 flex flex-wrap gap-3">
//                 <a
//                   href="#our-story"
//                   className="bg-[#0A2C4B] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#1868A8]"
//                 >
//                   Discover Our Story →
//                 </a>

//                 <Link
//                   to="/contact"
//                   className="border border-[#0A2C4B] bg-white px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A2C4B] transition hover:bg-[#F6F9FC]"
//                 >
//                   Contact Us
//                 </Link>
//               </div>

//               <div className="mt-12 grid max-w-3xl grid-cols-2 border-y border-[#DAE7F1] sm:grid-cols-4">
//                 <div className="border-r border-[#DAE7F1] px-4 py-5 first:pl-0">
//                   <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#B27B34]">
//                     Heritage
//                   </div>
//                   <div className="mt-2 text-xs font-bold text-[#0A2C4B]">
//                     Since 1972
//                   </div>
//                 </div>

//                 <div className="border-r border-[#DAE7F1] px-4 py-5">
//                   <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#B27B34]">
//                     Expertise
//                   </div>
//                   <div className="mt-2 text-xs font-bold text-[#0A2C4B]">
//                     Ion Exchange
//                   </div>
//                 </div>

//                 <div className="border-r border-[#DAE7F1] px-4 py-5">
//                   <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#B27B34]">
//                     Location
//                   </div>
//                   <div className="mt-2 text-xs font-bold text-[#0A2C4B]">
//                     Vapi, Gujarat
//                   </div>
//                 </div>

//                 <div className="px-4 py-5 last:pr-0">
//                   <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#B27B34]">
//                     Experience
//                   </div>
//                   <div className="mt-2 text-xs font-bold text-[#0A2C4B]">
//                     50+ Years
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-5">
//               <div className="relative overflow-hidden border border-[#0A2C4B]/10 bg-[#061729] shadow-[0_24px_48px_-12px_rgba(10,44,75,0.12)]">
//                 <img
//                   src="https://images.unsplash.com/photo-1581093458791-9d42e3c9b6c4?auto=format&fit=crop&w=1200&q=85"
//                   alt="Industrial chemical manufacturing facility"
//                   className="h-[430px] w-full object-cover opacity-90 lg:h-[500px]"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#061729] via-transparent to-[#061729]/10" />

//                 <div className="absolute left-5 top-5 border border-white/25 bg-[#061729]/70 px-3 py-2 font-mono text-[9px] font-bold tracking-wider text-white backdrop-blur-sm">
//                   ESTABLISHED // 1972
//                 </div>

//                 <div className="absolute bottom-20 right-5 border border-[#DF9B42]/50 bg-[#061729]/70 px-3 py-2 font-mono text-[9px] font-bold tracking-wider text-[#DF9B42] backdrop-blur-sm">
//                   INDUSTRIAL CHEMISTRY
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 border-t border-white/15 bg-[#061729]/80 backdrop-blur-sm">
//                   <div className="p-4 font-mono text-[8px] uppercase tracking-wider text-slate-300">
//                     TOYOTA CHEMICAL INDUSTRIES
//                   </div>

//                   <div className="border-l border-white/15 p-4 text-right font-mono text-[8px] uppercase tracking-wider text-[#DF9B42]">
//                     VAPI // GUJARAT
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             OUR STORY
//         ========================== */}
//         <section
//           id="our-story"
//           className="relative border-b border-[#DAE7F1] bg-[#F6F9FC] py-20 lg:py-24"
//         >
//           <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
//             <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
//               <div className="lg:col-span-7">
//                 <SectionLabel>
//                   OUR STORY // COMPANY HERITAGE
//                 </SectionLabel>

//                 <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
//                   More than five decades of
//                   <span className="font-serif italic font-medium text-[#1868A8]">
//                     {" "}chemical expertise.
//                   </span>
//                 </h2>

//                 <p className="mt-6 text-base leading-7 text-slate-600">
//                   Toyota Chemical Industries started its journey in 1972 and
//                   has built its identity through decades of experience in
//                   chemical manufacturing and industrial applications.
//                 </p>

//                 <p className="mt-5 text-base leading-7 text-slate-600">
//                   Over the years, the company developed its expertise in ion
//                   exchange resin technology and strengthened its capabilities
//                   to serve water treatment and process industries.
//                 </p>

//                 <p className="mt-5 text-base leading-7 text-slate-600">
//                   From our manufacturing base in Vapi, Gujarat, we continue
//                   to focus on quality, customer requirements and continuous
//                   improvement while building long-term relationships with our
//                   customers and partners.
//                 </p>

//                 <Link
//                   to="/products/cationanion"
//                   className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#1868A8] transition hover:text-[#B27B34]"
//                 >
//                   Explore Our Products
//                   <span className="text-base">→</span>
//                 </Link>
//               </div>

//               <div className="lg:col-span-5">
//                 <div className="border border-[#DAE7F1] bg-white p-8 shadow-[0_18px_40px_-15px_rgba(10,44,75,0.10)]">
//                   <div className="mb-8 flex items-center justify-between border-b border-[#DAE7F1] pb-5">
//                     <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#B27B34]">
//                       COMPANY PROFILE
//                     </span>

//                     <span className="font-mono text-[9px] text-slate-400">
//                       TC / 1972
//                     </span>
//                   </div>

//                   <div className="space-y-6">
//                     <div>
//                       <div className="font-mono text-[8px] uppercase tracking-widest text-slate-400">
//                         Established
//                       </div>

//                       <div className="mt-1 text-3xl font-bold text-[#0A2C4B]">
//                         1972
//                       </div>
//                     </div>

//                     <div className="border-t border-[#DAE7F1] pt-6">
//                       <div className="font-mono text-[8px] uppercase tracking-widest text-slate-400">
//                         Core Expertise
//                       </div>

//                       <div className="mt-2 text-lg font-bold text-[#0A2C4B]">
//                         Ion Exchange Resin Technology
//                       </div>
//                     </div>

//                     <div className="border-t border-[#DAE7F1] pt-6">
//                       <div className="font-mono text-[8px] uppercase tracking-widest text-slate-400">
//                         Manufacturing Base
//                       </div>

//                       <div className="mt-2 text-lg font-bold text-[#0A2C4B]">
//                         GIDC Vapi, Gujarat
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             MILESTONES
//         ========================== */}
//         <section className="border-b border-[#DAE7F1] bg-white py-20 lg:py-24">
//           <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
//             <div className="mb-12 max-w-3xl">
//               <SectionLabel>
//                 TIMELINE // OUR JOURNEY
//               </SectionLabel>

//               <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
//                 Built over generations.
//               </h2>

//               <p className="mt-5 text-base leading-7 text-slate-600">
//                 From our beginning in 1972 to continued expansion and quality
//                 development, our journey reflects a long-term commitment to
//                 manufacturing excellence.
//               </p>
//             </div>

//             <div className="grid border-l border-t border-[#DAE7F1] sm:grid-cols-2 lg:grid-cols-4">
//               {milestones.map((item) => (
//                 <article
//                   key={`${item.year}-${item.title}`}
//                   className="border-b border-r border-[#DAE7F1] p-7 transition hover:bg-[#F6F9FC] lg:p-8"
//                 >
//                   <div className="font-mono text-[10px] font-bold tracking-widest text-[#B27B34]">
//                     {item.year}
//                   </div>

//                   <div className="my-7 h-px w-10 bg-[#B27B34]" />

//                   <h3 className="text-2xl font-bold text-[#0A2C4B]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-4 text-sm leading-6 text-slate-600">
//                     {item.text}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             WHY TOYOTA CHEMICAL
//         ========================== */}
//         <section className="relative overflow-hidden border-b border-[#DAE7F1] bg-[#F6F9FC] py-20 lg:py-24">
//           <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
//             <div className="mb-12 max-w-3xl">
//               <SectionLabel>
//                 WHY TOYOTA CHEMICAL
//               </SectionLabel>

//               <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
//                 Principles that guide our work.
//               </h2>

//               <p className="mt-5 text-base leading-7 text-slate-600">
//                 Our values shape the way we manufacture products, support
//                 customers and continue to develop our capabilities.
//               </p>
//             </div>

//             <div className="grid border-l border-t border-[#DAE7F1] sm:grid-cols-2 lg:grid-cols-4">
//               {strengths.map((item) => (
//                 <article
//                   key={item.number}
//                   className="group border-b border-r border-[#DAE7F1] bg-white p-7 transition hover:bg-[#F6F9FC] lg:p-8"
//                 >
//                   <div className="mb-10 flex items-center justify-between font-mono text-[9px] font-bold tracking-wider text-slate-400">
//                     <span>{item.number}</span>

//                     <span className="text-[#B27B34]">
//                       {item.badge}
//                     </span>
//                   </div>

//                   <div className="mb-5 flex h-10 w-10 items-center justify-center border border-[#B27B34]/40 bg-[#B27B34]/5">
//                     <span className="h-2 w-2 bg-[#B27B34]" />
//                   </div>

//                   <h3 className="mb-3 text-2xl font-bold text-[#0A2C4B]">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm leading-6 text-slate-600">
//                     {item.text}
//                   </p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             MANUFACTURING
//         ========================== */}
//         <section className="border-b border-[#DAE7F1] bg-white py-20 lg:py-24">
//           <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
//             <div className="lg:col-span-5">
//               <div className="relative overflow-hidden bg-[#061729]">
//                 <img
//                   src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85"
//                   alt="Industrial manufacturing equipment"
//                   className="h-[420px] w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#061729]/90 via-transparent to-transparent" />

//                 <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
//                   <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-white">
//                     MANUFACTURING
//                   </span>

//                   <span className="font-mono text-[9px] text-[#DF9B42]">
//                     PROCESS CONTROL
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-7">
//               <SectionLabel>
//                 MANUFACTURING EXCELLENCE
//               </SectionLabel>

//               <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
//                 From raw chemistry to
//                 <span className="font-serif italic font-medium text-[#1868A8]">
//                   {" "}controlled performance.
//                 </span>
//               </h2>

//               <p className="mt-6 text-base leading-7 text-slate-600">
//                 Our manufacturing approach is built around consistency,
//                 quality control and dependable product performance. We
//                 continue to strengthen our manufacturing capabilities to meet
//                 the requirements of modern industrial applications.
//               </p>

//               <div className="mt-8 grid gap-4 sm:grid-cols-2">
//                 {[
//                   "Controlled manufacturing",
//                   "Ion exchange resin expertise",
//                   "Quality-focused processes",
//                   "Continuous improvement",
//                 ].map((item, index) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3 border border-[#DAE7F1] bg-[#F6F9FC] p-4"
//                   >
//                     <span className="font-mono text-[9px] font-bold text-[#B27B34]">
//                       0{index + 1}
//                     </span>

//                     <span className="text-sm font-semibold text-[#0A2C4B]">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             QUALITY
//         ========================== */}
//         <section className="relative overflow-hidden border-b border-[#DAE7F1] bg-[#061729] py-20 text-white lg:py-24">
//           <div className="blueprint-dark absolute inset-0 opacity-60" />

//           <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">
//             <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
//               <div className="lg:col-span-7">
//                 <div className="mb-4 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
//                   <span className="h-px w-8 bg-[#DF9B42]" />
//                   QUALITY // COMPLIANCE
//                 </div>

//                 <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
//                   Quality is not a final inspection.
//                 </h2>

//                 <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
//                   We believe quality must be part of the complete
//                   manufacturing process. Our approach focuses on product
//                   consistency, systematic quality management and dependable
//                   performance.
//                 </p>

//                 <div className="mt-9 flex flex-wrap gap-3">
//                   <div className="border border-white/20 bg-white/5 px-5 py-4">
//                     <div className="font-mono text-[9px] text-[#DF9B42]">
//                       QUALITY
//                     </div>

//                     <div className="mt-2 text-sm font-bold">
//                       Quality First
//                     </div>
//                   </div>

//                   <div className="border border-white/20 bg-white/5 px-5 py-4">
//                     <div className="font-mono text-[9px] text-[#DF9B42]">
//                       SYSTEM
//                     </div>

//                     <div className="mt-2 text-sm font-bold">
//                       ISO Certified
//                     </div>
//                   </div>

//                   <div className="border border-white/20 bg-white/5 px-5 py-4">
//                     <div className="font-mono text-[9px] text-[#DF9B42]">
//                       SUPPORT
//                     </div>

//                     <div className="mt-2 text-sm font-bold">
//                       Customer Focus
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="lg:col-span-5">
//                 <div className="border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
//                   <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
//                     <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
//                       QUALITY SYSTEM
//                     </span>

//                     <span className="text-[#DF9B42]">✓</span>
//                   </div>

//                   <div className="space-y-5">
//                     <div className="flex items-center justify-between border-b border-white/10 pb-4">
//                       <span className="text-sm text-slate-300">
//                         Product quality
//                       </span>

//                       <span className="font-mono text-[9px] text-[#DF9B42]">
//                         CONTROLLED
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between border-b border-white/10 pb-4">
//                       <span className="text-sm text-slate-300">
//                         Quality management
//                       </span>

//                       <span className="font-mono text-[9px] text-[#DF9B42]">
//                         ISO
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-slate-300">
//                         Customer commitment
//                       </span>

//                       <span className="font-mono text-[9px] text-[#DF9B42]">
//                         DIRECT
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             INDUSTRIES
//         ========================== */}
//         <section className="border-b border-[#DAE7F1] bg-[#F6F9FC] py-20 lg:py-24">
//           <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
//             <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
//               <div>
//                 <SectionLabel>
//                   INDUSTRIES // APPLICATIONS
//                 </SectionLabel>

//                 <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
//                   Solutions across critical industries.
//                 </h2>
//               </div>

//               <p className="max-w-md font-mono text-[10px] uppercase leading-5 tracking-wider text-slate-500">
//                 INDUSTRIAL WATER &amp; PROCESS APPLICATIONS
//               </p>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//               {industries.map((industry, index) => (
//                 <Link
//                   key={industry}
//                   to="/industries"
//                   className="group flex items-center justify-between border border-[#DAE7F1] bg-white p-6 transition hover:-translate-y-1 hover:border-[#B27B34] hover:shadow-[0_16px_32px_-10px_rgba(10,44,75,0.10)]"
//                 >
//                   <div>
//                     <div className="font-mono text-[8px] font-bold tracking-widest text-[#B27B34]">
//                       0{index + 1}
//                     </div>

//                     <div className="mt-3 text-sm font-bold text-[#0A2C4B] group-hover:text-[#1868A8]">
//                       {industry}
//                     </div>
//                   </div>

//                   <span className="text-[#B27B34] transition-transform group-hover:translate-x-1">
//                     →
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             VISION & MISSION
//         ========================== */}
//         <section className="border-b border-[#DAE7F1] bg-white py-20 lg:py-24">
//           <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
//             <div className="grid gap-6 md:grid-cols-2">
//               <article className="relative overflow-hidden border border-[#DAE7F1] bg-[#F6F9FC] p-8 lg:p-10">
//                 <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-[#DAE7F1]" />

//                 <SectionLabel>01 / VISION</SectionLabel>

//                 <h2 className="text-3xl font-bold text-[#0A2C4B] sm:text-4xl">
//                   Building long-term chemical solutions.
//                 </h2>

//                 <p className="mt-5 text-sm leading-7 text-slate-600">
//                   To be a trusted technology and manufacturing partner for
//                   industries requiring dependable chemical and ion exchange
//                   resin solutions.
//                 </p>
//               </article>

//               <article className="relative overflow-hidden border border-[#DAE7F1] bg-[#061729] p-8 text-white lg:p-10">
//                 <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-white/10" />

//                 <div className="mb-4 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
//                   <span className="h-px w-8 bg-[#DF9B42]" />
//                   02 / MISSION
//                 </div>

//                 <h2 className="text-3xl font-bold sm:text-4xl">
//                   Performance through consistency.
//                 </h2>

//                 <p className="mt-5 text-sm leading-7 text-slate-300">
//                   To manufacture and supply quality products while providing
//                   responsive support, continuously improving our capabilities
//                   and creating lasting value for customers and partners.
//                 </p>
//               </article>
//             </div>
//           </div>
//         </section>

//         {/* ==================================================
//             BOARD OF DIRECTORS
//             IMAGE + PREMIUM CARDS
//         ================================================== */}
//         <section className="border-b border-[#DAE7F1] bg-[#F6F9FC] py-20 lg:py-24">
//           <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
//             <div className="mb-12 max-w-3xl">
//               <SectionLabel>
//                 LEADERSHIP // BOARD OF DIRECTORS
//               </SectionLabel>

//               <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
//                 Experienced leadership.
//               </h2>

//               <p className="mt-5 text-base leading-7 text-slate-600">
//                 Our leadership team brings experience and direction to the
//                 company's continued growth and development.
//               </p>
//             </div>

//             <div className="grid gap-6 md:grid-cols-3">
//               {directors.map((director, index) => (
//                 <article
//                   key={director.name}
//                   className="group relative overflow-hidden border border-[#DAE7F1] bg-white shadow-[0_18px_40px_-18px_rgba(10,44,75,0.16)] transition duration-300 hover:-translate-y-2 hover:border-[#B27B34] hover:shadow-[0_24px_50px_-18px_rgba(10,44,75,0.22)]"
//                 >
//                   {/* IMAGE */}
//                   <div className="relative h-[360px] overflow-hidden bg-[#061729]">
//                     <img
//                       src={director.image}
//                       alt={director.name}
//                       className="h-full w-full object-cover object-center grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
//                     />

//                     {/* IMAGE OVERLAY */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#061729] via-[#061729]/20 to-transparent" />

//                     {/* NUMBER */}
//                     <div className="absolute left-5 top-5 border border-white/25 bg-[#061729]/70 px-3 py-2 font-mono text-[9px] font-bold tracking-widest text-white backdrop-blur-sm">
//                       0{index + 1}
//                     </div>

//                     {/* ROLE */}
//                     <div className="absolute bottom-5 left-5 right-5">
//                       <div className="mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
//                         {director.role}
//                       </div>

//                       <h3 className="text-3xl font-bold text-white">
//                         {director.name}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* CARD FOOTER */}
//                   <div className="flex items-center justify-between border-t border-[#DAE7F1] px-6 py-5">
//                     <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">
//                       TOYOTA CHEMICAL INDUSTRIES
//                     </span>

//                     <span className="text-[#B27B34] transition-transform duration-300 group-hover:translate-x-1">
//                       →
//                     </span>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ==================================================
//             FAQ ACCORDION
//         ================================================== */}
//         <section className="border-b border-[#DAE7F1] bg-white py-20 lg:py-24">
//           <div className="mx-auto max-w-[1000px] px-5 lg:px-8">
//             <div className="mb-12 text-center">
//               <div className="flex items-center justify-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#B27B34]">
//                 <span className="h-px w-8 bg-[#B27B34]" />

//                 FAQ // ABOUT US

//                 <span className="h-px w-8 bg-[#B27B34]" />
//               </div>

//               <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
//                 Frequently Asked Questions
//               </h2>

//               <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
//                 Answers to common questions about Toyota Chemical Industries,
//                 our history and our capabilities.
//               </p>
//             </div>

//             {/* FAQ LIST */}
//             <div className="space-y-3">
//               {faqs.map((faq, index) => {
//                 const isOpen = openFaq === index;

//                 return (
//                   <div
//                     key={faq.question}
//                     className={`overflow-hidden border transition-all duration-300 ${
//                       isOpen
//                         ? "border-[#B27B34] bg-[#F6F9FC] shadow-[0_12px_30px_-18px_rgba(10,44,75,0.25)]"
//                         : "border-[#DAE7F1] bg-white hover:border-[#B27B34]/60"
//                     }`}
//                   >
//                     {/* QUESTION BUTTON */}
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setOpenFaq(isOpen ? null : index)
//                       }
//                       className="flex w-full items-center gap-5 px-6 py-6 text-left lg:px-7"
//                       aria-expanded={isOpen}
//                     >
//                       {/* NUMBER */}
//                       <span
//                         className={`shrink-0 font-mono text-[10px] font-bold transition-colors ${
//                           isOpen
//                             ? "text-[#B27B34]"
//                             : "text-slate-400"
//                         }`}
//                       >
//                         0{index + 1}
//                       </span>

//                       {/* QUESTION */}
//                       <span
//                         className={`flex-1 text-base font-bold transition-colors sm:text-lg ${
//                           isOpen
//                             ? "text-[#1868A8]"
//                             : "text-[#0A2C4B]"
//                         }`}
//                       >
//                         {faq.question}
//                       </span>

//                       {/* PLUS / MINUS */}
//                       <span
//                         className={`flex h-9 w-9 shrink-0 items-center justify-center border font-mono text-lg transition-all duration-300 ${
//                           isOpen
//                             ? "rotate-180 border-[#B27B34] bg-[#B27B34] text-white"
//                             : "border-[#DAE7F1] bg-[#F6F9FC] text-[#B27B34]"
//                         }`}
//                       >
//                         {isOpen ? "−" : "+"}
//                       </span>
//                     </button>

//                     {/* ANSWER */}
//                     <div className={`faq-answer ${isOpen ? "open" : ""}`}>
//                       <div className="faq-answer-inner">
//                         <div className="border-t border-[#DAE7F1] px-6 pb-7 pt-5 pl-[58px] lg:px-7 lg:pl-[72px]">
//                           <p className="max-w-3xl text-sm leading-7 text-slate-600">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             CTA
//         ========================== */}
//         <section
//           id="contact-strip"
//           className="relative overflow-hidden border-b border-[#DAE7F1] bg-gradient-to-r from-[#061729] via-[#0A2C4B] to-[#061729] py-14 text-white lg:py-16"
//         >
//           <div className="technical-lines absolute inset-0 opacity-60" />

//           <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
//             <div>
//               <div className="mb-3 font-mono text-[9px] font-bold tracking-[0.18em] text-[#DF9B42]">
//                 START A CONVERSATION
//               </div>

//               <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//                 Looking for the right resin partner?
//               </h2>

//               <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
//                 Talk to our team about your water treatment or industrial
//                 process requirements.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <Link
//                 to="/contact"
//                 className="bg-[#B27B34] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#DF9B42]"
//               >
//                 Contact Us
//               </Link>

//               <Link
//                 to="/products/cationanion"
//                 className="border border-white/30 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
//               >
//                 View Products
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* =========================
//             CUSTOMERS
//         ========================== */}
//         <section className="overflow-hidden border-b border-[#DAE7F1] bg-white py-16 lg:py-20">
//           <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
//             <SectionLabel>
//               CUSTOMER TRUST // INDUSTRIAL PARTNERS
//             </SectionLabel>

//             <div className="mb-9">
//               <h2 className="text-3xl font-bold tracking-tight text-[#0A2C4B] sm:text-4xl">
//                 Trusted across Indian industry.
//               </h2>

//               <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
//                 Our products support customers across power, oil and gas,
//                 steel, fertilizer, pharmaceutical and chemical sectors.
//               </p>
//             </div>
//           </div>

//           <div className="border-y border-[#DAE7F1] bg-[#F6F9FC] py-5">
//             <div className="marquee-track flex gap-3 px-3">
//               {[...customers, ...customers].map((customer, index) => (
//                 <div
//                   key={`${customer}-${index}`}
//                   className="flex h-16 min-w-[150px] items-center justify-center border border-[#DAE7F1] bg-white px-5 font-mono text-[10px] font-bold tracking-wider text-[#0A2C4B] transition hover:border-[#B27B34] hover:text-[#B27B34]"
//                 >
//                   {customer}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default About;

import React, { useState } from "react";

const faqData = [
  {
    question:
      "1. How long has Toyota Chemical Industries been manufacturing ion exchange resins?",
    answer:
      "Toyota Chemical Industries has manufactured ion exchange resins in India since 1972 — more than five decades.",
  },
  {
    question:
      "2. What types of ion exchange resins does Toyota Chemical Industries manufacture?",
    answer:
      "A complete range — cation exchange resins, anion exchange resins, mixed bed resins, DM plant resins and water softener resins.",
  },
  {
    question: "3. Where is Toyota Chemical Industries located?",
    answer:
      "Our manufacturing facility is in GIDC Vapi, Gujarat, with a marketing office in Mumbai. We serve industries across India and beyond.",
  },
  {
    question:
      "4. Is Toyota Chemical Industries an ISO certified manufacturer?",
    answer:
      "Yes — quality and environmental management are certified to ISO 9001:2015 and ISO 14001:2015.",
  },
  {
    question:
      "5. Which industries does Toyota Chemical Industries serve?",
    answer:
      "Sectors including water treatment, pharmaceuticals, food processing and power generation, among other industrial water-treatment applications.",
  },
];

const milestones = [
  {
    year: "1972",
    number: "01 / 04",
    title: "Foundation",
    description:
      "Toyota Chemical Industries established in Vapi, Gujarat with an initial focus on primary cation resins.",
  },
  {
    year: "1995",
    number: "02 / 04",
    title: "Expansion",
    description:
      "Expanded manufacturing capacity to meet growing domestic demand and installed secondary functionalization reactors.",
  },
  {
    year: "2024",
    number: "03 / 04",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001 quality management and ISO 14001 environmental safety accreditations across all units.",
  },
  {
    year: "2024",
    number: "04 / 04",
    title: "Facility Modernization",
    description:
      "Major expansion of production facilities with modern automated synthesis and automated sieve-screening technology.",
  },
];

const leadership = [
  {
    initials: "MO",
    name: "Manoj G Oza",
    role: "Managing Director",
    description:
      "With over 50 years of experience in the water treatment industry, Mr Oza has led Toyota Chemical Industries with a vision for innovation and excellence. A technocrat with a degree in Chemical Engineering from UDCT Mumbai, his vast and rich experience has been the foundation of the company.",
    meta: "UDCT MUMBAI // 50+ YRS EXPERIENCE",
  },
  {
    initials: "KO",
    name: "Kumar S Oza",
    role: "Jt Managing Director & Technical Director",
    description:
      "Mr Oza brings extensive research expertise spanning over four decades in polymer chemistry, and has been instrumental in developing the company's ion exchange resin formulations. He ensures that production excellence remains the prime focus of the organisation.",
    meta: "POLYMER RESEARCH // 40+ YRS EXPERIENCE",
  },
  {
    initials: "PO",
    name: "Pariksheet M Oza",
    role: "Director",
    description:
      "With over 18 years of experience in the pharmaceutical and chemical industries, Mr Oza focuses on procurement strategy, vendor development and operational efficiency — achieving both cost optimisation and quality improvement.",
    meta: "SUPPLY CHAIN & OPERATIONS // 18+ YRS EXP",
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

const products = [
  "Cation Exchange Resins",
  "Anion Exchange Resins",
  "Mixed Bed Resins",
  "DM Plant Resins",
  "Water Softener Resins",
];

const resources = [
  "Ion Exchange Resin Manufacturers in India",
  "Best Ion Exchange Resin Manufacturers 2025",
  "DM Plant Resin Suppliers in India",
  "Industrial Water Treatment Resins",
  "How to Choose Resin Manufacturer",
  "Cation vs Anion Exchange Resins",
  "Water Softener Resin Guide",
  "Cation Exchange Resins",
  "Anion Exchange Resins",
  "Mixed Bed Resins",
  "Water Softener Resins",
];

function AboutUs() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <>
      {/* =========================================================
          GLOBAL STYLES
      ========================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, sans-serif;
        }

        .font-inter {
          font-family: Inter, sans-serif;
        }

        .font-garamond {
          font-family: "EB Garamond", serif;
        }

        .font-mono-custom {
          font-family: "IBM Plex Mono", monospace;
        }

        .bg-grid-pattern {
          background-size: 32px 32px;
          background-image:
            linear-gradient(
              to right,
              rgba(218, 231, 241, 0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(218, 231, 241, 0.5) 1px,
              transparent 1px
            );
        }

        .blueprint-dots {
          background-image:
            radial-gradient(#B27B34 1px, transparent 1px);
          background-size: 16px 16px;
        }

        .tech-border {
          border: 1px solid #DAE7F1;
          position: relative;
        }

        .tech-corner-gold::before,
        .tech-corner-gold::after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          border-color: #B27B34;
          pointer-events: none;
        }

        .tech-corner-gold::before {
          top: -1px;
          left: -1px;
          border-top: 2px solid #B27B34;
          border-left: 2px solid #B27B34;
        }

        .tech-corner-gold::after {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid #B27B34;
          border-right: 2px solid #B27B34;
        }

        .shadow-blueprint {
          box-shadow:
            0 0 0 1px #DAE7F1,
            0 4px 20px -2px rgba(10, 44, 75, 0.05);
        }

        .shadow-elevated {
          box-shadow:
            0 20px 35px -10px rgba(10, 44, 75, 0.12),
            0 1px 3px rgba(0, 0, 0, 0.05);
        }
      `}</style>

      <div className="min-h-screen bg-[#F7FAFD] text-slate-800 font-inter antialiased selection:bg-[#B27B34] selection:text-white">

       
        

        {/* =========================================================
            BREADCRUMB
        ========================================================= */}
        <section className="border-b border-[#DAE7F1] bg-white/50 text-[11px] font-mono-custom text-slate-500 py-2.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">

            <div>
              <a href="#" className="hover:text-[#0A2C4B]">
                Home
              </a>

              <span className="mx-1.5 text-slate-300">›</span>

              <span className="text-[#0A2C4B] font-medium">
                About Us
              </span>
            </div>

            <div className="text-slate-400">
              SEC_REF // 20.3895° N, 72.9106° E · PLANT 01
            </div>

          </div>
        </section>

        <main id="about">

          {/* =========================================================
              HERO
          ========================================================= */}
          <section className="relative bg-[#F7FAFD] bg-grid-pattern pt-12 pb-20 border-b border-[#DAE7F1] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7 space-y-6">

                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#B27B34]/30 text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase">
                    <span className="w-1.5 h-1.5 bg-[#B27B34]" />
                    <span>
                      // HERITAGE & MANUFACTURING EXCELLENCE // EST. 1972
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A2C4B]">
                      About Us
                    </h1>

                    <p className="text-2xl sm:text-3xl font-garamond italic text-[#1868A8] font-normal">
                      Ion Exchange Resin Manufacturers in India Since 1972
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
                    For over five decades, Toyota Chemical Industries has been at
                    the forefront of ion exchange resin technology, serving
                    industries across India and beyond.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">

                    <InfoBox
                      label="Heritage"
                      value="50+ Years Exp."
                    />

                    <InfoBox
                      label="Catalog"
                      value="13 Grades"
                    />

                    <InfoBox
                      label="Certified"
                      value="ISO 9001 & 14001"
                    />

                    <InfoBox
                      label="Facility"
                      value="GIDC Vapi Plant"
                    />

                  </div>

                  <div className="p-4 bg-white border-l-2 border-[#B27B34] border-y border-r border-[#DAE7F1] text-xs font-mono-custom text-slate-600 flex flex-wrap items-center justify-between gap-3">
                    <span>
                      PREFER DIRECT DIALOGUE? REACH TECHNICAL SALES:
                    </span>

                    <a
                      href="tel:+912602432021"
                      className="font-bold text-[#0A2C4B] hover:text-[#1868A8]"
                    >
                      +91 260 2432021 →
                    </a>
                  </div>

                </div>

                {/* Hero image */}
                <div className="lg:col-span-5">
                  <div className="relative mx-auto max-w-md lg:max-w-none">

                    <div className="absolute -top-3 -right-3 w-full h-full border-2 border-dashed border-[#DAE7F1] pointer-events-none" />

                    <div className="relative tech-border tech-corner-gold bg-white p-3 shadow-elevated">

                      <div className="flex items-center justify-between text-[10px] font-mono-custom text-slate-400 pb-2 mb-2 border-b border-slate-100">

                        <span className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

                          <span className="text-[#0A2C4B] font-semibold">
                            OWN POLYMERISATION FACILITY
                          </span>
                        </span>

                        <span>GIDC VAPI // PLANT 01</span>
                      </div>

                      <div className="relative overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200">
                        <img
                          src="https://lh3.googleusercontent.com/aida/AEtjO1WiUXCGqPiDPUUtYXQQQAreJm-5UqEjnRuul8JM8TMxx6DijOUlHgd18TBuZmdBnC1ZidT5hs9ZzLeDtZLRntja_edw3A_0Y9g9MVkPXoWEaD4etFPTPBmQ3yKjfBvgJ3JG2QDn8qiegEnQukqfk8KBo77U6Rtl1x16VCsgVpAgVWn7poxb4g5ENHNUtcUuYuMQQ2gNrVhNLY-fx6VBdXieBJLjjssPA7oWctHUrJOpTF0_aIfjYIkf-w"
                          alt="Toyota Chemical modern chemical plant polymerization vessels"
                          className="w-full h-full object-cover object-center brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://placehold.co/800x600?text=Toyota+Chemical+Polymerisation+Plant";
                          }}
                        />

                        <div className="absolute bottom-3 left-3 bg-[#0A2C4B]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono-custom text-[#B27B34] border border-[#B27B34]/30">
                          FOUNDED 1972 // SYNTHESIS VESSELS
                        </div>
                      </div>

                      <div className="pt-3 flex items-center justify-between text-[11px] font-mono-custom">
                        <span className="text-slate-500">
                          100% IN-HOUSE VAPI SYNTHESIS
                        </span>

                        <span className="text-[#1868A8] font-semibold">
                          ISO 9001 AUDITED
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =========================================================
              OUR STORY
          ========================================================= */}
          <section className="py-20 bg-white border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <SectionHeading
                eyebrow="// 01 / FIVE DECADES OF EXPERTISE //"
                title="Our Story"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">

                  <p>
                    <strong className="text-[#0A2C4B] font-semibold">
                      Toyota Chemical Industries Pvt. Ltd.
                    </strong>{" "}
                    was founded in 1972 with a vision to become India's premier
                    manufacturer of ion exchange resins. From our humble beginnings
                    in Vapi, Gujarat, we have grown into a trusted name in the
                    chemical industry.
                  </p>

                  <p>
                    Our journey has been marked by continuous innovation,
                    unwavering commitment to quality, and a deep understanding
                    of our customers' needs. Today, we serve diverse sectors
                    including water treatment, pharmaceuticals, food processing,
                    and power generation.
                  </p>

                  <p className="text-slate-600">
                    With a state-of-the-art manufacturing facility spread across
                    acres of land, equipped with modern technology and staffed
                    by experienced professionals, we are well-positioned to meet
                    the evolving demands of the industry.
                  </p>

                  <div className="pt-4 border-t border-[#DAE7F1] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs">

                    <div>
                      <span className="text-slate-400 block">
                        // SYNTHESIS
                      </span>
                      <span className="font-semibold text-[#0A2C4B]">
                        Direct Factory Sizing
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block">
                        // DISPATCH
                      </span>
                      <span className="font-semibold text-[#0A2C4B]">
                        Immediate Readiness
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block">
                        // REACH
                      </span>
                      <span className="font-semibold text-[#0A2C4B]">
                        Pan-India & Global
                      </span>
                    </div>

                  </div>
                </div>

                <div className="lg:col-span-5">

                  <div className="tech-border tech-corner-gold bg-[#F7FAFD] p-4 shadow-blueprint">

                    <div className="relative aspect-square overflow-hidden bg-white border border-[#DAE7F1]">

                      <img
                        src="https://lh3.googleusercontent.com/aida/AEtjO1XZqPmXlDlQvqKCdzRu7x-xRH-yllp8bDpfUhaJPU3yphJMwA7Skjky7GFpxSW3YJHvAeutpdlxDWsIFMPchIspTowvrPB9xXslzxeQRDDCzTGPwvwa7eC6kBmy0EFT_Z8VBRwkHrTuPnddggb5l2TBnHIHVPBgNQxAl_BDy4ZDenwFF6M643uGAnQ5gVcH1TiGOUoOZokBiBAduehQvVsSTbh5zVqi2agcEg7Szyh4rIL9OXAwx_xGZpY"
                        alt="Ion exchange resin beads"
                        className="w-full h-full object-cover contrast-105 hover:scale-105 transition-transform duration-700"
                      />

                      <div className="absolute top-2 left-2 bg-[#0A2C4B]/90 text-white font-mono-custom text-[10px] px-2 py-0.5 border border-white/20">
                        Ø 0.3 - 1.2 MM BEADS // QC VERIFIED
                      </div>

                    </div>

                    <div className="mt-3 text-center space-y-1">

                      <p className="font-mono-custom text-[11px] font-semibold text-[#0A2C4B] uppercase tracking-wider">
                        SYNTHESIS TO SIZING // 100% DIRECT MANUFACTURER
                      </p>

                      <p className="font-garamond italic text-xs text-[#1868A8]">
                        Toyota Chemical Industries Private Limited · Ion Exchangers
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* =========================================================
              VISION / MISSION
          ========================================================= */}
          <section className="py-20 bg-[#F7FAFD] bg-grid-pattern border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="text-center max-w-2xl mx-auto mb-14">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  // STRATEGIC FOUNDATION //
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Purpose & Direction
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <PurposeCard
                  icon="◎"
                  label="// ASPIRATION"
                  title="Our Vision"
                  text="To be the global leader in ion exchange resin technology, setting industry benchmarks for quality, innovation, and sustainable practices while contributing to a cleaner, healthier world."
                  iconColor="blue"
                />

                <PurposeCard
                  icon="◈"
                  label="// OBJECTIVE"
                  title="Our Mission"
                  text="To deliver superior ion exchange solutions that exceed customer expectations through continuous research, operational excellence, and a dedicated team of professionals committed to quality and service."
                  iconColor="gold"
                />

              </div>
            </div>
          </section>

          {/* =========================================================
              TIMELINE
          ========================================================= */}
          <section className="py-20 bg-white border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="mb-14">
                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  // CHRONOLOGICAL MILESTONES //
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Our Journey: Milestones of Excellence
                </h2>

                <p className="text-slate-500 text-sm font-mono-custom mt-2">
                  Five decades of systematic scaling, technical patents, and precision synthesis.
                </p>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#DAE7F1] -z-0" />

                {milestones.map((item) => (
                  <div
                    key={`${item.year}-${item.number}`}
                    className="relative z-10 tech-border tech-corner-gold bg-white p-6 shadow-blueprint hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex items-center justify-between mb-4">

                      <span className="px-3 py-1 bg-[#0A2C4B] text-[#B27B34] font-mono-custom font-bold text-sm tracking-wider">
                        {item.year}
                      </span>

                      <span className="text-[10px] font-mono-custom text-slate-400">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="text-lg font-bold text-[#0A2C4B] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* =========================================================
              LEADERSHIP
          ========================================================= */}
          <section className="py-20 bg-[#F7FAFD] bg-grid-pattern border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="max-w-3xl mb-14">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  // EXECUTIVE LEADERSHIP //
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Leadership: Board of Directors
                </h2>

                <p className="text-slate-600 mt-3 text-base">
                  Our leadership team brings together decades of experience in chemistry, manufacturing, and business management.
                </p>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {leadership.map((person) => (
                  <div
                    key={person.name}
                    className="tech-border tech-corner-gold bg-white p-8 shadow-blueprint flex flex-col justify-between hover:shadow-elevated transition-shadow"
                  >
                    <div>

                      <div className="flex items-center space-x-4 mb-6">

                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0A2C4B] to-[#1868A8] text-[#B27B34] flex items-center justify-center font-mono-custom font-bold text-xl border-2 border-[#B27B34]/40 shadow-sm">
                          {person.initials}
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-[#0A2C4B] leading-tight">
                            {person.name}
                          </h3>

                          <p className="text-xs font-mono-custom text-[#B27B34] uppercase font-semibold tracking-wider mt-1">
                            {person.role}
                          </p>
                        </div>

                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed">
                        {person.description}
                      </p>

                    </div>

                    <div className="mt-6 pt-4 border-t border-[#DAE7F1] text-[10px] font-mono-custom text-slate-400">
                      {person.meta}
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* =========================================================
              VALUES
          ========================================================= */}
          <section className="py-20 bg-white border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="text-center max-w-2xl mx-auto mb-14">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  // GUIDING PRINCIPLES //
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Our Values: What Drives Us
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <ValueCard
                  number="01"
                  label="INTEGRITY"
                  title="Quality First"
                  text="Uncompromising commitment to product excellence and customer satisfaction through precise spherical bead synthesis."
                />

                <ValueCard
                  number="02"
                  label="PARTNERSHIP"
                  title="Customer Focus"
                  text="Building lasting partnerships through understanding and meeting customer needs with custom batch parameters."
                />

                <ValueCard
                  number="03"
                  label="INGENUITY"
                  title="Innovation"
                  text="Continuous improvement and dedicated R&D investment to stay ahead of evolving water treatment standards."
                />

              </div>
            </div>
          </section>

          {/* =========================================================
              COMPLIANCE
          ========================================================= */}
          <section className="py-16 bg-[#F7FAFD] border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="text-center max-w-3xl mx-auto mb-12">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  — COMPLIANCE & INTEGRITY —
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Manufactured to specification, supplied direct
                </h2>

                <p className="text-sm text-slate-600 mt-2">
                  Over 50 years of dedicated resin synthesis delivering high mechanical bead durability, precise particle size uniformity, and guaranteed operating capacity.
                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                <ComplianceCard
                  number="01"
                  label="HERITAGE"
                  status="EST. 1972"
                  title="Since 1972"
                  text="Over five decades of dedicated resin manufacturing from Vapi, Gujarat, delivering unmatched batch-to-batch repeatability."
                  statusClass="text-[#B27B34]"
                />

                <ComplianceCard
                  number="02"
                  label="QUALITY SYSTEMS"
                  status="AUDITED"
                  title="ISO 9001 & 14001"
                  text="Certified quality & environmental management with rigorous multi-point analytical testing for bead integrity and osmotic shock resistance."
                  statusClass="text-[#1868A8]"
                />

                <ComplianceCard
                  number="03"
                  label="DISPATCH AGILITY"
                  status="FLEXIBLE"
                  title="25 L to bulk"
                  text="No upper limit; immediate ready-to-ship stock for emergency top-ups or full multi-ton industrial changes."
                  statusClass="text-emerald-700"
                />

                <ComplianceCard
                  number="04"
                  label="DATA TRANSPARENCY"
                  status="CERTIFIED"
                  title="TDS with every grade"
                  text="Comprehensive Certificate of Analysis (COA) specifying bead size distribution, exchange capacity, and sieve analysis."
                  statusClass="text-amber-700"
                />

              </div>
            </div>
          </section>

          {/* =========================================================
              FAQ
          ========================================================= */}
          <section className="py-20 bg-white border-b border-[#DAE7F1]">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">

              <div className="text-center mb-12">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  — TECHNICAL KNOWLEDGE BASE —
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  FAQ: Frequently Asked Questions
                </h2>

              </div>

              <div className="space-y-3">

                {faqData.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className="tech-border bg-[#F7FAFD]/50 hover:bg-[#F7FAFD] transition-colors"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left flex items-center justify-between focus:outline-none"
                      >
                        <span className="text-sm sm:text-base font-semibold text-[#0A2C4B] pr-4">
                          {faq.question}
                        </span>

                        <span
                          className={`text-[#B27B34] text-xl font-bold ml-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-sm text-slate-600 border-t border-[#DAE7F1]/50 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>
            </div>
          </section>

          {/* =========================================================
              CONTACT CTA
          ========================================================= */}
          <section
            className="bg-[#0A2C4B] text-white py-12 px-4 sm:px-8 border-b border-[#061C30]"
            id="contact"
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

              <div>
                <span className="text-[10px] font-mono-custom tracking-widest text-[#B27B34] uppercase block mb-1">
                  ■ DIRECT FACTORY QUOTATION & ANALYSIS
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Not sure which grade you need?
                </h3>

                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  Send the grade and operating conditions you run today and we will confirm the right Toyota grade.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">

                <a
                  href="mailto:info@toyotachemicals.co.in"
                  className="px-6 py-3 bg-[#B27B34] hover:bg-[#D49B4B] text-[#0A2C4B] font-mono-custom font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Send an Enquiry
                </a>

                <a
                  href="tel:+912602432021"
                  className="px-6 py-3 border border-white/30 hover:border-white font-mono-custom font-semibold text-xs tracking-wider transition-colors"
                >
                  CALL +91 260 2432021
                </a>

              </div>
            </div>
          </section>

          {/* =========================================================
              CUSTOMERS
          ========================================================= */}
          {/* <section className="py-16 bg-white border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="text-center max-w-3xl mx-auto mb-10">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  — OUR CUSTOMERS // TRUSTED ACROSS INDIAN INDUSTRY —
                </span>

                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  A selection of the organisations we supply ion exchange resins to across power, oil & gas, steel, fertiliser, pharmaceutical and chemical sectors.
                </p>

              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 font-mono-custom text-xs text-center">

                {customers.map((customer) => (
                  <div
                    key={customer}
                    className="border border-[#DAE7F1] py-3 px-2 bg-[#F7FAFD]/60 font-medium text-slate-700 hover:border-[#1868A8] hover:text-[#0A2C4B] transition-colors"
                  >
                    {customer}
                  </div>
                ))}

              </div>
            </div>
          </section> */}
          {/* <section className="overflow-hidden border-b border-[#DAE7F1] bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
            <SectionLabel>OUR CUSTOMERS // TRUSTED ACROSS INDIAN INDUSTRY</SectionLabel>
            <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              
              <p>
                A selection of the organisations we supply ion exchange
                resins to across power, oil &amp; gas, steel, fertiliser,
                pharmaceutical and chemical sectors.
              </p>
            </div>
          </div>

          <div className="border-y border-[#DAE7F1] bg-[#F6F9FC] py-5">
            <div className="marquee-track flex gap-3 px-3">
              {[...customers, ...customers].map((customer, index) => (
                <div
                  key={`${customer}-${index}`}
                  className="flex h-16 min-w-[150px] items-center justify-center border border-[#DAE7F1] bg-white px-5 font-mono text-[10px] font-bold tracking-wider text-[#0A2C4B] transition hover:border-[#B27B34] hover:text-[#B27B34]"
                >
                  {customer}
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="py-16 bg-white border-b border-brand-blueprint" data-purpose="client-portfolio-strip">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-mono text-brand-gold tracking-widest uppercase font-semibold block mb-2">
            — OUR CUSTOMERS // TRUSTED ACROSS INDIAN INDUSTRY —
          </span>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
            A selection of the organisations we supply ion exchange resins to across power, oil & gas, steel, fertiliser, pharmaceutical and chemical sectors.
          </p>
        </div>
  <div className="marquee-track flex w-max gap-4">
    
    
    {[...customers, ...customers].map((company, index) => (
      <div
        key={`${company}-${index}`}
        className="flex h-[90px] w-[210px] shrink-0 items-center justify-center border border-[#0A2C4B]/15 bg-white px-6 transition hover:border-[#B27B34]"
      >
        <span className="font-mono text-sm font-semibold tracking-wider text-[#0A2C4B]">
          {company}
        </span>
      </div>
    ))}

  </div>
  </div>

  <style>{`
    .marquee-track {
      animation: companyMarquee 25s linear infinite;
    }

    @keyframes companyMarquee {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    .marquee-track:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>
        </main>
        
      </div>
    </>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function InfoBox({ label, value }) {
  return (
    <div className="tech-border tech-corner-gold bg-white p-3 shadow-blueprint">
      <span className="text-[10px] font-mono-custom text-slate-400 block uppercase">
        {label}
      </span>

      <span className="text-sm font-bold text-[#0A2C4B]">
        {value}
      </span>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <div className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
        {eyebrow}
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
        {title}
      </h2>
    </div>
  );
}

function PurposeCard({
  icon,
  label,
  title,
  text,
  iconColor = "blue",
}) {
  return (
    <div className="tech-border tech-corner-gold bg-white p-8 sm:p-10 shadow-blueprint hover:shadow-elevated transition-shadow duration-300">

      <div
        className={`w-12 h-12 rounded bg-[#EFF6FC] border border-[#DAE7F1] flex items-center justify-center text-2xl mb-6 ${
          iconColor === "gold"
            ? "text-[#B27B34]"
            : "text-[#1868A8]"
        }`}
      >
        {icon}
      </div>

      <div
        className={`text-[10px] font-mono-custom uppercase tracking-widest font-semibold mb-1 ${
          iconColor === "gold"
            ? "text-[#1868A8]"
            : "text-[#B27B34]"
        }`}
      >
        {label}
      </div>

      <h3 className="text-2xl font-bold text-[#0A2C4B] mb-4 font-garamond">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function ValueCard({ number, label, title, text }) {
  return (
    <div className="tech-border tech-corner-gold p-8 bg-[#F7FAFD]/50 hover:bg-white transition-colors duration-300">

      <span className="text-xs font-mono-custom font-semibold text-[#1868A8] tracking-widest uppercase block mb-2">
        {number} // {label}
      </span>

      <h3 className="text-xl font-bold text-[#0A2C4B] mb-3">
        {title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function ComplianceCard({
  number,
  label,
  status,
  title,
  text,
  statusClass,
}) {
  return (
    <div className="tech-border tech-corner-gold bg-white p-5 shadow-sm">

      <div className="flex justify-between items-center text-[10px] font-mono-custom mb-2">

        <span className="text-[#0A2C4B] font-bold">
          {number} / {label}
        </span>

        <span className={`${statusClass} font-semibold`}>
          {status}
        </span>

      </div>

      <h3 className="text-base font-bold text-[#0A2C4B] mb-1">
        {title}
      </h3>

      <p className="text-xs text-slate-500 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default AboutUs;