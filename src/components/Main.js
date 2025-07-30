import React from "react";
import Header from "./Header";
import Home from "./Home";
import Galerie from "./Galerie";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;