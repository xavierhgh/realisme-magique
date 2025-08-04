import React from "react";
import federationLogo from "../images/logo-fwb-negatif-vertical.png";
import LogoPartenaire from "./LogoPartenaire";

function Partenaire() {
  return (
    <div className="padding my-6">
      <h2 className="">Nos Partenaires</h2>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <LogoPartenaire
          src={federationLogo}
          alt="Fédération Wallonie-Bruxelles"
          className="w-1/2 mx-auto my-8 sm:w-1/6"
        />
        <div className="bg-accentuation h-1 w-1/2 mx-auto my-8 sm:rotate-90"></div>
        <LogoPartenaire
          src={federationLogo}
          alt="Fédération Wallonie-Bruxelles"
          className="w-1/2 mx-auto my-8 sm:w-1/6"
        />
        <div className="bg-accentuation h-1 w-1/2 mx-auto my-8 sm:rotate-90"></div>
        <LogoPartenaire
          src={federationLogo}
          alt="Fédération Wallonie-Bruxelles"
          className="w-1/2 mx-auto my-8 sm:w-1/6"
        />
        <div className="bg-accentuation h-1 w-1/2 mx-auto my-8 sm:rotate-90"></div>
        <LogoPartenaire
          src={federationLogo}
          alt="Fédération Wallonie-Bruxelles"
          className="w-1/2 mx-auto my-8 sm:w-1/6"
        />
      </div>
    </div>
  );
}

export default Partenaire;
