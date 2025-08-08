import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Jsonhome from "../data/Jsonhome";
import Concours from "../components/Concours";
import Partenaire from "../components/Partenaire";
import Cookiebanner from "../components/Cookiebanner";



function Home({titre, texte}) {
  return (
    <div>
      <Hero />
      {Jsonhome.map((item, index) => (
        <Section key={index} img={item.img} titre={item.titre} texte={item.texte} imageFirst={index % 2 === 0} />
      ))}
      <Concours />
      <Partenaire />
      <Cookiebanner />
    </div>
  );
}

export default Home;
