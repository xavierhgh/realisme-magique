import React, { useRef, useEffect } from "react";
import Partenaires from "../data/Partenaires";
import LogoPartenaire from "./LogoPartenaire";
import { scrollFromLeft } from "../utilitaire/gsapUtilitaire";

function Partenaire() {
  // On crée la liste complète des partenaires à afficher
  const allPartenaires = [...Partenaires];
  const refGauche = useRef(null);
  // Animation du défilement depuis la gauche
  useEffect(() => {
      scrollFromLeft(refGauche);
    }, []);
  return (
    <div className="padding my-6">
      <div ref={refGauche}>
        <h2 className="">Nos Partenaires</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {allPartenaires.map((partenaire, index) => (
            <React.Fragment key={index}>
              <LogoPartenaire
                src={partenaire.src}
                alt={partenaire.alt}
                className="w-1/2 mx-auto my-8 md:w-1/6"
              />
              {/* Affiche la barre uniquement entre les partenaires, jamais au début ni à la fin */}
              {index < allPartenaires.length - 1 && (
                <div className="bg-accentuation h-1 w-1/2 mx-auto my-8 md:rotate-90"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partenaire;
