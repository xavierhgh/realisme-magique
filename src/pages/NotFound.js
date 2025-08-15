import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="padding h-[50svh]">
      <h1>Page non trouvée</h1>
      <div className="flex flex-col items-center h-full text-center p-6">
        <p>Désolé, la page que vous recherchez n'existe pas.</p>
        <Link to="/" className="btn text-noir hover:text-blanc mt-4">
          <span className="before-effect"></span>
          <span className="after-effect"></span>
          <span className="btn-text">Retour à l'accueil</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
