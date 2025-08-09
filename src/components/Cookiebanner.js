import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Bouton from "./Bouton";

function Cookiebanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieAccept");
    if (!consent || consent !== "accepted") {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Crée un cookie valable 1 an sur tout le site
    Cookies.set("cookieAccept", "accepted", { expires: 365, path: "/" });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 padding">
      <div className="bg-noirclair border border-blanc p-4 flex flex-col gap-2">
        <h3>🍪 Cookies 🍪</h3>
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-around lg:items-center">
          <p>
            En continuant à naviguer, vous acceptez notre utilisation des cookies.
          </p>
          <Bouton label="Accepter" onClick={handleAccept} />
        </div>
      </div>
    </div>
  );
}

export default Cookiebanner;