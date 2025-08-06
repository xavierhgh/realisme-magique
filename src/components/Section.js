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
  const sectionClass = imageFirst ? "sm:flex-row" : "sm:flex-row-reverse";
  return (
    <div
      className={`padding my-6 sm:flex ${sectionClass} sm:justify-around gap-14 items-center`}
      ref={imageFirst ? refGauche : refDroite}
    >
      <Images img={img} className="sm:w-1/3" />
      <div className="sm:w-1/3" ref={imageFirst ? refDroite : refGauche}>
        <h2 className="mt-6 mb-9">{titre}</h2>
        <p className="">{texte}</p>
      </div>
    </div>
  );
}

export default Section;
