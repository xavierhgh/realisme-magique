import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import Jsonhome from "../data/Jsonhome";
import Concours from "./Concours";
import Partenaire from "./Partenaire";


function Home({titre, texte}) {
  return (
    <div>
      <Hero />
      {Jsonhome.map((item, index) => (
        <Section key={index} img={item.img} titre={item.titre} texte={item.texte} />
      ))}
      <Concours />
      <Partenaire />
    </div>
  );
}

export default Home;
