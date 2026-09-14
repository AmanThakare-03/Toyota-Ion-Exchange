import React from "react";
import { Link, Navigate, Route, Routes } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./Aboutus";
import Contactus from "./Contactus";
import Product from "./Product/Product";
import Cationanion from "./Product/Cationanion";
import Anion from "./Product/Anion";
import Mixedbed from "./Product/Mixedbed";
import Watersoftener from "./Product/Watersoftener";
import Specialty from "./Product/Specialty";

function SitePage({ title, eyebrow = "TOYOTA CHEMICAL INDUSTRIES", children }) {
  return (
    <section className="min-h-[55vh] bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#B27B34]">
          {eyebrow}
        </div>
        <h1 className="font-serif text-4xl font-bold text-[#0A2C4B] sm:text-5xl">
          {title}
        </h1>
        <div className="mt-8 max-w-3xl text-base leading-8 text-slate-600">
          {children}
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <SitePage title="Applications">
      Explore Toyota Chemical Industries ion-exchange resin solutions for water
      treatment, demineralisation, softening, condensate polishing and other
      industrial water applications.
    </SitePage>
  );
}

function Industries() {
  return (
    <SitePage title="Industries">
      Our resin portfolio supports demanding water-treatment requirements
      across power, chemical, pharmaceutical, textile, steel and process
      industries.
    </SitePage>
  );
}

function Partners() {
  return (
    <SitePage title="Partners">
      Connect with Toyota Chemical Industries for technical collaboration,
      resin supply and water-treatment project support.
    </SitePage>
  );
}

function Resources() {
  return (
    <SitePage title="Resources">
      Find technical information, product documentation, datasheet guidance
      and resources for selecting and operating ion-exchange resins.
    </SitePage>
  );
}

function QualityCompliance() {
  return (
    <SitePage title="Quality Compliance">
      Toyota Chemical Industries maintains a quality-focused manufacturing and
      technical-support approach for industrial ion-exchange resin solutions.
    </SitePage>
  );
}

function Sustainability() {
  return (
    <SitePage title="Sustainability Charter">
      Our approach focuses on responsible manufacturing, efficient water
      treatment and long-term performance of resin systems.
    </SitePage>
  );
}

function LegalNotice() {
  return (
    <SitePage title="Legal Notice">
      This website and its content are provided for general information. Product
      specifications and availability should be confirmed with Toyota Chemical
      Industries before use in a specific application.
    </SitePage>
  );
}

function PrivacyPolicy() {
  return (
    <SitePage title="Privacy Policy">
      We respect website visitors' privacy and use submitted information only
      for legitimate communication, enquiry and business-support purposes.
    </SitePage>
  );
}

function NotFound() {
  return (
    <SitePage title="Page Not Found" eyebrow="404 / ROUTE NOT FOUND">
      The page you requested does not exist. Please return to the home page or
      choose a section from the navigation.
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex bg-[#0A2C4B] px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white"
        >
          Back to Home →
        </Link>
      </div>
    </SitePage>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />

          {/* Product hub + canonical product routes */}
          <Route path="/products" element={<Product />} />
          <Route path="/products/cationanion" element={<Cationanion />} />
          <Route path="/products/anion" element={<Anion />} />
          <Route path="/products/mixedbed" element={<Mixedbed />} />
          <Route path="/products/watersoftener" element={<Watersoftener />} />
          <Route path="/products/specialty" element={<Specialty />} />

          {/* SEO/legacy product slugs used inside existing page content */}
          <Route path="/products/cation-exchange-resins" element={<Cationanion />} />
          <Route path="/products/anion-exchange-resins" element={<Anion />} />
          <Route path="/products/mixed-bed-resins" element={<Mixedbed />} />
          <Route path="/products/water-softener-resins" element={<Watersoftener />} />
          <Route path="/products/specialty-resins" element={<Specialty />} />

          {/* Backward-compatible aliases for old links */}
          <Route path="/product" element={<Navigate to="/products" replace />} />
          <Route path="/Product" element={<Navigate to="/products" replace />} />
          <Route path="/Product/Cationanion" element={<Navigate to="/products/cationanion" replace />} />
          <Route path="/products/Cationanion" element={<Navigate to="/products/cationanion" replace />} />
          <Route path="/Product/Anion" element={<Navigate to="/products/anion" replace />} />
          <Route path="/Product/Mixedbed" element={<Navigate to="/products/mixedbed" replace />} />
          <Route path="/Product/Watersoftener" element={<Navigate to="/products/watersoftener" replace />} />
          <Route path="/Product/Specialty" element={<Navigate to="/products/specialty" replace />} />

          {/* Header/footer routes that previously had no components */}
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/water-softener-resin" element={<Watersoftener />} />
          <Route path="/applications/boiler-feed-water" element={<Applications />} />
          <Route path="/applications/dm-plant-resin" element={<Applications />} />
          <Route path="/applications/mixed-bed-polishing" element={<Applications />} />
          <Route path="/applications/organic-removal" element={<Applications />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/quality-compliance" element={<QualityCompliance />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
