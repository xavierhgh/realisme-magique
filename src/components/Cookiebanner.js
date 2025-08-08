import React, { useState, useEffect } from "react";
import Bouton from "./Bouton";

function Cookiebanner() {
  const [isVisible, setIsVisible] = useState(false);

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ")
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0)
        return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  };

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const checkCookieConsent = () => {
      const consent = getCookie("cookieAccept");
      console.log("Consent trouvé :", consent);
      // Si pas de cookie de consentement, afficher la bannière
      if (!consent) {
        setIsVisible(true);
      }
      // Si le cookie existe mais est vide ou invalide, afficher la bannière
      else if (consent !== "accepted" && consent !== "declined") {
        setIsVisible(true);
      }
    };

    checkCookieConsent();
  }, []);

  const handleAccept = () => {
    // Créer un cookie de consentement valide 1 an
    const aujourdhui = new Date();
    const dansUnAn = new Date(aujourdhui);
    dansUnAn.setFullYear(aujourdhui.getFullYear() + 1);
    document.cookie = `cookieAccept=accepted; expires=${dansUnAn.toUTCString()};`;
    setIsVisible(false);
  };

  if (!isVisible) {
    console.log("Bannière masquée");
    return null;
  }
  console.log("Bannière affichée");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 padding">
      <div className="bg-noirclair border border-blanc p-4 flex flex-col gap-2">
        <h3>🍪 Cookies 🍪</h3>
        <div className="flex flex-row justify-around items-center">
          <p>
            En continuant à naviguer, vous acceptez notre utilisation des
            cookies.
          </p>
          <Bouton label="Accepter" onClick={handleAccept} />
        </div>
      </div>
    </div>
  );
}

export default Cookiebanner;
