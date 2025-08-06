import React, { useEffect, useRef} from "react";
import Oeuvres from "../data/Oeuvres";
import { useParams } from "react-router-dom";
import Images from "../components/Images";
import Bouton from "../components/Bouton";
import { scrollFromRight, scrollFromLeft } from "../utilitaire/gsapUtilitaire";

function OeuvreDetail() {
  const { id } = useParams();
  const oeuvre = Oeuvres.find((o) => String(o.id) === id);

  const refDroite = useRef(null);
  const refGauche = useRef(null);

  useEffect(() => {
    scrollFromRight(refDroite);
    scrollFromLeft(refGauche);
  }, []);

  if (!oeuvre) {
    return <div>Oeuvre non trouvée</div>;
  }

  return (
    <div className="padding flex flex-col gap-8">
      <Bouton label="Retour" onClick={() => window.history.back()} />
      <div ref={refDroite} className="flex flex-col sm:flex-row-reverse items-center justify-center gap-8 sm:gap-24">
        <div className="sm:w-1/3 sm:h-1/2 w-full flex justify-center items-center">
          <Images img={oeuvre.img} alt={oeuvre.alt} />
        </div>
        <div ref={refGauche} className="flex flex-col gap-4 w-full sm:items-center sm:w-2/3">
          <h1 className="text-[2rem]">{oeuvre.title}</h1>
          <h2 className="text-[1.5rem]">{oeuvre.by}</h2>
          <p>{oeuvre.description}</p>
        </div>
      </div>
    </div>
  );
}

export default OeuvreDetail;
