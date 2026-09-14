import React from "react";
import { Routes, Route } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import About from "./Aboutus";
import Product from "./Product/Product";
// import Applications from "./Applications";
// import Industries from "./Industries";
// import Resources from "./Resources";
import Contactus from "./Contactus";
// import Partners from "./Partners";
// import Quality from "./Quality-certifications";
import Cationanion from "./Product/Cationanion";
import Anion from "./Product/Anion";
import Mixedbed from "./Product/Mixedbed";
import Watersoftener from "./Product/Watersoftener";
import Specialty from "./Product/Specialty";


function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Product" element={<Product />} />
          {/* <Route path="/applications" element={<Applications />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} /> */}
          <Route path="/contact" element={<Contactus />} />
          <Route path="/product/cationanion" element={<Cationanion />} />
          <Route path="/product/anion" element={<Anion />} />
          <Route path="/product/mixedbed" element={<Mixedbed />} />
          <Route path="/product/watersoftener" element={<Watersoftener />} />
          <Route path="/product/specialty" element={<Specialty />} />
          
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;