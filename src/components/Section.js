import React, { useRef, useEffect } from "react";
import Images from "./Images";
import { scrollFromRight, scrollFromLeft } from "../utilitaire/gsapUtilitaire";

function Section({ img, titre, texte, imageFirst }) {
  const refDroite = useRef(null);
  const refGauche = useRef(null);

  useEffect(() => {
    scrollFromRight(refDroite);
    scrollFromLeft(refGauche);
  }, []);

  if (imageFirst === undefined) {
    imageFirst = true;
  }
  const sectionClass = imageFirst ? "md:flex-row" : "md:flex-row-reverse";
  return (
    <div
      className={`padding my-6 md:flex ${sectionClass} md:justify-around gap-14 items-center`}
      ref={imageFirst ? refGauche : refDroite}
    >
      <Images img={img} className="md:w-1/2 lg:w-1/3 drop" />
      <div className="md:w-1/2 lg:w-1/3" ref={imageFirst ? refDroite : refGauche}>
        <h2 className="mt-6 mb-9">{titre}</h2>
        <p className="">{texte}</p>
      </div>
    </div>
  );
}

export default Section;
