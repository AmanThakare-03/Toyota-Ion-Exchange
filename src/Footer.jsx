import React from "react";

export default function Footer() {
  const resinCategories = [
    "Anion Exchange Resins",
    "Cation Exchange Resins",
    "Specialty Resins",
    "Mixed Bed Resins",
    "Water Softener Resins",
  ];

  const technicalLinks = [
    "Datasheet Archives",
    "Safety Data Sheets (MSDS)",
    "Standard Resin Equivalent Chart",
    "Vapi Factory Audit Requests",
  ];

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "Industries", href: "/industries" },
    { name: "Partners", href: "/partners" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#06182B] text-white">
      {/* ================= TOP FOOTER ================= */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* ================= COMPANY ================= */}
          <div>
            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center bg-[#B27B34] text-sm font-bold text-white">
                TC
              </div>

              <div>
                <div className="font-serif text-xl font-bold leading-none tracking-tight">
                  TOYOTA CHEMICAL
                </div>

                <div className="mt-1 font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  Industries Pvt. Ltd. · Since 1972
                </div>
              </div>
            </a>

            {/* Description */}
            <p className="mt-7 max-w-md text-sm leading-7 text-slate-300">
              Engineering precision synthetic polymers for high-purity water
              operations. Serving power, chemical, textile, and pharmaceutical
              leaders from our ISO-certified production works in GIDC Vapi
              since 1972.
            </p>

            {/* ISO Badge */}
            <div className="mt-7 inline-flex items-center border border-[#B27B34]/50 bg-[#0A2C4B] px-4 py-3">
              <div className="mr-3 flex h-9 w-9 items-center justify-center border border-[#B27B34] text-[#DF9B42]">
                ✓
              </div>

              <div>
                <div className="font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#DF9B42]">
                  CERTIFIED QUALITY
                </div>

                <div className="mt-1 text-xs font-semibold text-white">
                  ISO 9001:2015 · ISO 14001:2015
                </div>
              </div>
            </div>
          </div>

          {/* ================= RESIN CATEGORIES ================= */}
          <div>
            <div className="mb-6 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
              RESIN CATEGORIES
            </div>

            <ul className="space-y-4">
              {resinCategories.map((item) => (
                <li key={item}>
                  <a
                    href="/products"
                    className="group flex items-start gap-3 text-sm leading-5 text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="mt-1 text-[#B27B34] transition-transform group-hover:translate-x-1">
                      →
                    </span>

                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= TECHNICAL DESK ================= */}
          <div>
            <div className="mb-6 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
              TECHNICAL DESK
            </div>

            <ul className="space-y-4">
              {technicalLinks.map((item) => (
                <li key={item}>
                  <a
                    href="/resources"
                    className="group flex items-start gap-3 text-sm leading-5 text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="mt-1 text-[#B27B34] transition-transform group-hover:translate-x-1">
                      →
                    </span>

                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick Links */}
            <div className="mt-8">
              <div className="mb-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
                COMPANY
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                {companyLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-xs text-slate-400 transition-colors hover:text-[#DF9B42]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <div className="mb-6 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
              CONTACT FACTORY
            </div>

            {/* Address */}
            <div className="mb-6">
              <div className="mb-2 font-mono text-[8px] uppercase tracking-wider text-slate-500">
                FACTORY ADDRESS
              </div>

              <p className="text-sm leading-6 text-slate-300">
                Plot 108/1, GIDC Industrial Estate,
                <br />
                Vapi-Silvassa Road,
                <br />
                Vapi, Gujarat 396195,
                <br />
                India
              </p>
            </div>

            {/* Phone */}
            <div className="mb-5">
              <div className="mb-2 font-mono text-[8px] uppercase tracking-wider text-slate-500">
                PHONE
              </div>

              <a
                href="tel:+912602432021"
                className="text-base font-semibold text-white transition-colors hover:text-[#DF9B42]"
              >
                +91 260 2432021
              </a>
            </div>

            {/* Email */}
            <div>
              <div className="mb-2 font-mono text-[8px] uppercase tracking-wider text-slate-500">
                EMAIL
              </div>

              <a
                href="mailto:info@toyotachemicals.co.in"
                className="break-all text-sm text-slate-300 transition-colors hover:text-[#DF9B42]"
              >
                info@toyotachemicals.co.in
              </a>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#B27B34] px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#DF9B42]"
            >
              Request a Quote
              <span className="text-base">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= GOLD DIVIDER ================= */}
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#B27B34] to-transparent opacity-60" />
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="mx-auto max-w-[1440px] px-5 py-7 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
            © 2026 Toyota Chemical Industries Pvt. Ltd. All Rights Reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="/legal-notice"
              className="font-mono text-[9px] uppercase tracking-wider text-slate-500 transition-colors hover:text-[#DF9B42]"
            >
              Legal Notice
            </a>

            <a
              href="/privacy-policy"
              className="font-mono text-[9px] uppercase tracking-wider text-slate-500 transition-colors hover:text-[#DF9B42]"
            >
              Privacy Policy
            </a>

            <a
              href="/quality-compliance"
              className="font-mono text-[9px] uppercase tracking-wider text-slate-500 transition-colors hover:text-[#DF9B42]"
            >
              Quality Compliance
            </a>

            <a
              href="/sustainability"
              className="font-mono text-[9px] uppercase tracking-wider text-slate-500 transition-colors hover:text-[#DF9B42]"
            >
              Sustainability Charter
            </a>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ACTION BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#B27B34]/30 bg-[#06182B]/95 p-3 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+912602432021"
            className="flex items-center justify-center gap-2 border border-white/20 px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white"
          >
            <span>☎</span>
            Call Factory
          </a>

          <a
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#B27B34] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white"
          >
            Request Quote
            <span>→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}