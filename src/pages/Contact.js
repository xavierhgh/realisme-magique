import React from "react";
import RS from "../data/RS";
import ListeImg from "../components/ListeImg";
import HeureOuverture from "../data/HeureOuverture";
import Liste from "../components/Liste";
import Contacts from "../data/Contacts";
import Formcontact from "../components/Formcontact";

function Contact() {
  return (
    <div className="m-5 flex flex-col gap-8">
      <div className="p-6 bg-noirclair">
        <div className="flex flex-col">
          <h2>Réseaux sociaux</h2>
          <ul className="flex flex-col gap-2 my-4">
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
        <div className="flex flex-col">
          <h2>Heures d'ouverture</h2>
          <ul className="flex flex-col gap-2 my-4">
            {HeureOuverture.map((item, index) => (
              <Liste key={index} jour={item.Jour} heures={item.Heures} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2>Contact</h2>
          <ul className="flex flex-col gap-2 my-4">
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
      <Formcontact />
    </div>
  );
}

export default Contact;
