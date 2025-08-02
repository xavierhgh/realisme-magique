import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Jsonhome from "../data/Jsonhome";
import Concours from "../components/Concours";
import Partenaire from "../components/Partenaire";


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
