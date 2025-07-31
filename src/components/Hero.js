import React from "react";
import Herovod from "../videos/hero.mp4";

function Hero() {
  return (
    <div className="max-h-[90svh] w-full">
      <video autoPlay loop muted className="object-cover w-full h-[90svh]">
        <source src={Herovod} type="video/mp4" />
      </video>
      <div className="p-5 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className=""><span>Réalisme Magique</span></h1>
        <h1 className="mt-4">Imaginer la nature en dés/ordre</h1>
      </div>
    </div>
  );
}

export default Hero;
