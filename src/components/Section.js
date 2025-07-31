import React from "react";
import Images from "./Images";

function Section({img, titre, texte}) {
  return (
    <div className="m-5 my-6">
      <Images img={img} />
      <h2 className="mt-6 mb-9">{titre}</h2>
      <p className="">
        {texte}
      </p>
    </div>
  );
}

export default Section;
