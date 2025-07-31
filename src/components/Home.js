import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import Jsonhome from "../data/Jsonhome";

function Home({titre, texte}) {
  return (
    <div>
      <Hero />
      {Jsonhome.map((item, index) => (
        <Section key={index} img={item.img} titre={item.titre} texte={item.texte} />
      ))}
    </div>
  );
}

export default Home;
