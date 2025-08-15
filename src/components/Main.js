import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Galerie from "../pages/Galerie";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Footer from "./Footer";
import OeuvreDetail from "../pages/OeuvreDetail";

function Main() {
  return (
    <BrowserRouter basename="/realisme-magique">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/oeuvre/:id" element={<OeuvreDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Main;
