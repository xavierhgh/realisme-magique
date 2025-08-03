import React from "react";
import Oeuvres from "../data/Oeuvres";
import { useParams } from "react-router-dom";
import Images from "../components/Images";
import Bouton from "../components/Bouton";

function OeuvreDetail() {
  const { id } = useParams();
  const oeuvre = Oeuvres.find((o) => String(o.id) === id);

  if (!oeuvre) {
    return <div>Oeuvre non trouvée</div>;
  }

  return (
    <div className="m-5 flex flex-col gap-8">
        <Bouton label="Retour" onClick={() => window.history.back()} />
      <Images img={oeuvre.img} alt={oeuvre.alt} />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[2rem]">{oeuvre.title}</h1>
        <h2 className="text-[1.5rem]">{oeuvre.by}</h2>
        <p>{oeuvre.description}</p>
      </div>
    </div>
  );
}

export default OeuvreDetail;
