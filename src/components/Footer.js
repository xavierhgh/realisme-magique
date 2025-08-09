import React from "react";
import logoentier from "../images/Logo complet.png";
import ListeImg from "./ListeImg";
import RS from "../data/RS";
import Liste from "./Liste";
import HeureOuverture from "../data/HeureOuverture";
import Contacts from "../data/Contacts";

function Footer() {
  return (
    <footer className="padding my-6 flex flex-col md:flex-row  gap-4 border-t border-accentuation">
      <div className="md:w-full">
      <img src={logoentier} alt="Logo de l'exposition" className="mx-auto w-2/3 my-4" />
      </div>
      <div className="flex flex-col items-center md:w-full">
        <h4>Réseaux sociaux</h4>
        <ul className="flex flex-col justify-center gap-2 my-4">
        {RS.map((item, index) => (
            <ListeImg key={index} href={item.href} text={item.text} icon={item.icon} />
        ))}
        </ul>
      </div>
      <div className="flex flex-col items-center md:w-full">
        <h4>Ouverture</h4>
        <ul className="flex flex-col justify-center gap-2 my-4">
        {HeureOuverture.map((item, index) => (
            <Liste key={index} jour={item.Jour} heures={item.Heures} />
        ))}
        </ul>
      </div>
      <div className="flex flex-col items-center md:w-full">
        <h4>Contact</h4>
        <ul className="flex flex-col justify-center gap-2 my-4">
        {Contacts.map((item, index) => (
            <ListeImg key={index} icon={item.icon.default} href={item.href} text={item.text} />
        ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
