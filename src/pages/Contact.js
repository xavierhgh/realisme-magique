import React, { useEffect, useRef } from "react";
import RS from "../data/RS";
import ListeImg from "../components/ListeImg";
import Contacts from "../data/Contacts";
import Formcontact from "../components/Formcontact";
import { scrollFromRight, scrollFromLeft } from "../utilitaire/gsapUtilitaire";

function Contact() {
    const refDroite = useRef(null);
  const refGauche = useRef(null);

  useEffect(() => {
    scrollFromRight(refDroite);
    scrollFromLeft(refGauche);
  }, []);
  return (
    <div className="padding flex flex-col md:flex-row md:items-center gap-8">
      <div ref={refGauche} className="p-6 bg-noirclair md:w-full drop-shadow-middleblanc">
        <div className="flex flex-col items-center">
          <h2>Réseaux sociaux</h2>
          <ul className="flex flex-col justify-center gap-2 my-4">
            {RS.map((item, index) => (
              <ListeImg
                key={index}
                href={item.href}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2>Contact</h2>
          <ul className="flex flex-col justify-center gap-2 my-4">
            {Contacts.map((item, index) => (
              <ListeImg
                key={index}
                icon={item.icon}
                href={item.href}
                text={item.text}
              />
            ))}
          </ul>
        </div>
      </div>
      <Formcontact useRef={refDroite} />
    </div>
  );
}

export default Contact;
