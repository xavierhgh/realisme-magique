import React, { forwardRef } from 'react';

const Arbres = forwardRef(function Arbres({miroir, className }, ref) {

    let arbreStyle = "";
    if (miroir) {
        arbreStyle = "top-8 left-8";
    } else {
        arbreStyle = "top-8 right-8";
    }

    return (
        <div ref={ref} className={`w-24 h-24 absolute z-10 ${className}`}>
            <img src={require("../images/arbre.png")} alt="Arbre" />
            <div className={`absolute ${arbreStyle} w-24 h-24 overflow-hidden`}>
            <img src={require("../images/arbre.png")} alt="Arbre" />
            </div>
        </div>
    );
});

export default Arbres;