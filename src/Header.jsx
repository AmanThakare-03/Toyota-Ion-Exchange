import React, { useState } from "react";
import { Link } from "react-router";

const productLinks = [
  { name: "Cation Exchange Resins", href: "/products/cationanion" },
  { name: "Anion Exchange Resins", href: "/products/anion" },
  { name: "Mixed Bed Resins", href: "/products/mixedbed" },
  { name: "Water Softener Resins", href: "/products/watersoftener" },
  { name: "Specialty Resins", href: "/products/specialty" },
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#DAE7F1] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" onClick={closeMobile} className="flex items-center gap-3">
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
          </Link>

          <div className="hidden items-center xl:flex">
            <ul className="flex items-center gap-7 font-mono text-[12px] font-semibold uppercase tracking-wider">
              <li><Link to="/" className="text-[#1868A8] transition-colors hover:text-[#B27B34]">Home</Link></li>
              <li><Link to="/about" className="text-[#0A2C4B] transition-colors hover:text-[#1868A8]">About Us</Link></li>
              <li className="relative flex items-center gap-1.5">
                <Link to="/products" className="text-[#0A2C4B] transition-colors hover:text-[#1868A8]">Products</Link>
                <button
                  type="button"
                  onClick={() => setProductsOpen((open) => !open)}
                  className="text-[#1868A8] transition-colors hover:text-[#B27B34]"
                  aria-label="Toggle products menu"
                  aria-expanded={productsOpen}
                >
                  <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 border border-[#DAE7F1] bg-white p-2 shadow-[0_20px_45px_-15px_rgba(10,44,75,0.2)]">
                    <div className="border-b border-[#DAE7F1] px-4 py-3">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[#B27B34]">PRODUCT PORTFOLIO</span>
                    </div>
                    {productLinks.map((product) => (
                      <Link key={product.name} to={product.href} onClick={() => setProductsOpen(false)} className="group flex items-center justify-between border-b border-[#DAE7F1]/70 px-4 py-3 last:border-b-0 hover:bg-[#F6F9FC]">
                        <span className="text-[11px] font-semibold text-[#0A2C4B] group-hover:text-[#1868A8]">{product.name}</span>
                        <span className="text-[#B27B34] transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              {navItems.slice(2).map((item) => (
                <li key={item.name}><Link to={item.href} className="text-[#0A2C4B] transition-colors hover:text-[#1868A8]">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/contact" className="border border-[#0A2C4B] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-[#0A2C4B] transition-all hover:bg-[#0A2C4B] hover:text-white">Get In Touch</Link>
            <Link to="/contact" className="bg-[#B27B34] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#DF9B42]">Request Quote</Link>
          </div>

          <button type="button" onClick={() => setMobileOpen((open) => !open)} className="inline-flex h-10 w-10 items-center justify-center border border-[#DAE7F1] text-[#0A2C4B] transition hover:bg-[#F6F9FC] xl:hidden" aria-label={mobileOpen ? "Close main menu" : "Open main menu"} aria-expanded={mobileOpen}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#DAE7F1] bg-white xl:hidden">
            <div className="mx-auto max-w-[1440px] px-5 py-5 lg:px-8">
              <div className="flex flex-col">
                <Link to="/" onClick={closeMobile} className="border-b border-[#DAE7F1] py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#1868A8]">Home</Link>
                <Link to="/about" onClick={closeMobile} className="border-b border-[#DAE7F1] py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A2C4B]">About Us</Link>

                <div className="border-b border-[#DAE7F1]">
                  <div className="flex items-center justify-between py-4">
                    <Link to="/products" onClick={closeMobile} className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1868A8]">Products</Link>
                    <button type="button" onClick={() => setProductsOpen((open) => !open)} className="text-[#1868A8]" aria-label="Toggle mobile products menu" aria-expanded={productsOpen}>
                      <svg className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                    </button>
                  </div>
                  {productsOpen && (
                    <div className="mb-3 ml-3 border-l-2 border-[#B27B34]">
                      {productLinks.map((product) => (
                        <Link key={product.name} to={product.href} onClick={closeMobile} className="flex items-center justify-between px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-[#F6F9FC] hover:text-[#1868A8]">
                          {product.name}<span className="text-[#B27B34]">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navItems.slice(2).map((item) => (
                  <Link key={item.name} to={item.href} onClick={closeMobile} className="border-b border-[#DAE7F1] py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A2C4B] hover:text-[#1868A8]">{item.name}</Link>
                ))}

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Link to="/contact" onClick={closeMobile} className="border border-[#0A2C4B] px-4 py-4 text-center font-mono text-[9px] font-bold uppercase tracking-wider text-[#0A2C4B]">Get In Touch</Link>
                  <Link to="/contact" onClick={closeMobile} className="bg-[#B27B34] px-4 py-4 text-center font-mono text-[9px] font-bold uppercase tracking-wider text-white">Request Quote</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-[73px] md:h-[73px]" />
    </>
  );
}
