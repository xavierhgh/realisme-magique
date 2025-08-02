import React from 'react';
import federationLogo from '../images/logo-fwb-negatif-vertical.png';
import LogoPartenaire from './LogoPartenaire';


function Partenaire() {
    return (
        <div>
            <h2 className="">Nos Partenaires</h2>
            <LogoPartenaire src={federationLogo} alt="Fédération Wallonie-Bruxelles" className="w-1/2 mx-auto my-8" />
            <div className="bg-accentuation h-1 w-1/2 mx-auto my-8"></div>
            <LogoPartenaire src={federationLogo} alt="Fédération Wallonie-Bruxelles" className="w-1/2 mx-auto my-8" />
            <div className="bg-accentuation h-1 w-1/2 mx-auto my-8"></div>
            <LogoPartenaire src={federationLogo} alt="Fédération Wallonie-Bruxelles" className="w-1/2 mx-auto my-8" />
            <div className="bg-accentuation h-1 w-1/2 mx-auto my-8"></div>
            <LogoPartenaire src={federationLogo} alt="Fédération Wallonie-Bruxelles" className="w-1/2 mx-auto my-8" />
        </div>
    );
}

export default Partenaire;