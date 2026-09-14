import React, { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const productLinks = [
    {
      name: "Cation Exchange Resins",
      href: "/Product/Cationanion",
    },
    {
      name: "Anion Exchange Resins",
      href: "/products/Anion",
    },
    {
      name: "Mixed Bed Resins",
      href: "/products/Mixedbed",
    },
    {
      name: "Water Softener Resins",
      href: "/products/Watersoftener",
    },
    {
      name: "Specialty Resins",
      href: "/products/Specialty",
    },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Applications", href: "/applications" },
    { name: "Industries", href: "/industries" },
    { name: "Partners", href: "/partners" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#DAE7F1] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between px-5 py-4 lg:px-8">

          {/* LOGO */}
          <a
            href="/"
            className="flex items-center gap-3"
          >
            {/* Replace this TC box with your actual logo if required */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0A2C4B] text-sm font-bold text-white">
              TC
            </div>

            <div>
              <div className="font-serif text-xl font-bold leading-none tracking-tight text-[#0A2C4B]">
                TOYOTA CHEMICAL
              </div>

              <div className="mt-1 whitespace-nowrap font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Industries Pvt. Ltd. · Since 1972
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center xl:flex">
            <ul className="flex items-center gap-7 font-mono text-[12px] font-semibold uppercase tracking-wider">

              {/* HOME */}
              <li>
                <a
                  href="/"
                  className="text-[#1868A8] transition-colors hover:text-[#B27B34]"
                >
                  Home
                </a>
              </li>

              {/* ABOUT */}
              <li>
                <a
                  href="/about"
                  className="text-[#0A2C4B] transition-colors hover:text-[#1868A8]"
                >
                  About Us
                </a>
              </li>

              {/* PRODUCTS DROPDOWN */}
              <li className="relative">
                <button
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1.5 text-[#1868A8] transition-colors hover:text-[#B27B34]"
                  aria-expanded={productsOpen}
                >
                <a
                  href="/product"
                  className="text-[#0A2C4B] transition-colors hover:text-[#1868A8]"
                >
                  Products
                </a> 

                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* DROPDOWN */}
                {productsOpen && (
                  <div className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 border border-[#DAE7F1] bg-white p-2 shadow-[0_20px_45px_-15px_rgba(10,44,75,0.2)]">
                    <div className="border-b border-[#DAE7F1] px-4 py-3">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[#B27B34]">
                        PRODUCT PORTFOLIO
                      </span>
                    </div>

                    {productLinks.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        className="group flex items-center justify-between border-b border-[#DAE7F1]/70 px-4 py-3 last:border-b-0 hover:bg-[#F6F9FC]"
                      >
                        <span className="text-[11px] font-semibold text-[#0A2C4B] group-hover:text-[#1868A8]">
                          {product.name}
                        </span>

                        <span className="text-[#B27B34] transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </li>

              {/* OTHER NAV ITEMS */}
              {navItems.slice(2).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#0A2C4B] transition-colors hover:text-[#1868A8]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/contact"
              className="border border-[#0A2C4B] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-[#0A2C4B] transition-all hover:bg-[#0A2C4B] hover:text-white"
            >
              Get In Touch
            </a>

            <a
              href="/contact"
              className="bg-[#B27B34] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#DF9B42]"
            >
              Request Quote
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#DAE7F1] text-[#0A2C4B] transition hover:bg-[#F6F9FC] xl:hidden"
            aria-label="Open main menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileOpen && (
          <div className="border-t border-[#DAE7F1] bg-white xl:hidden">
            <div className="mx-auto max-w-[1440px] px-5 py-5 lg:px-8">

              <div className="flex flex-col">

                {/* HOME */}
                <a
                  href="/"
                  className="border-b border-[#DAE7F1] py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#1868A8]"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </a>

                {/* ABOUT */}
                <a
                  href="/about"
                  className="border-b border-[#DAE7F1] py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A2C4B]"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </a>

                {/* MOBILE PRODUCTS */}
                <div className="border-b border-[#DAE7F1]">
                  <button
                    type="button"
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex w-full items-center justify-between py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#1868A8]"
                  >
                    Products

                    <svg
                      className={`h-4 w-4 transition-transform ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {productsOpen && (
                    <div className="mb-3 ml-3 border-l-2 border-[#B27B34]">
                      {productLinks.map((product) => (
                        <a
                          key={product.name}
                          href={product.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-[#F6F9FC] hover:text-[#1868A8]"
                        >
                          {product.name}
                          <span className="text-[#B27B34]">→</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* REST OF NAV */}
                {navItems.slice(2).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-[#DAE7F1] py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A2C4B] hover:text-[#1868A8]"
                  >
                    {item.name}
                  </a>
                ))}

                {/* MOBILE BUTTONS */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="border border-[#0A2C4B] px-4 py-4 text-center font-mono text-[9px] font-bold uppercase tracking-wider text-[#0A2C4B]"
                  >
                    Get In Touch
                  </a>

                  <a
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="bg-[#B27B34] px-4 py-4 text-center font-mono text-[9px] font-bold uppercase tracking-wider text-white"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* IMPORTANT:
          Because navbar is fixed, add top padding to the page content.
      */}
      <div className="h-[73px] md:h-[73px]" />
    </>
  );
}