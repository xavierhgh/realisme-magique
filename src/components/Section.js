import React from "react";
import Images from "./Images";

function Section({ img, titre, texte, imageFirst }) {
  if (imageFirst === undefined) {
    imageFirst = true;
  }
  const sectionClass = imageFirst ? "sm:flex-row" : "sm:flex-row-reverse";
  return (
    <div className={`padding my-6 sm:flex ${sectionClass} sm:justify-around gap-14 items-center`}>
      <Images img={img}  />
      <div className="sm:w-1/3">
        <h2 className="mt-6 mb-9">{titre}</h2>
        <p className="">{texte}</p>
      </div>
    </div>
  );
}

export default Section;
