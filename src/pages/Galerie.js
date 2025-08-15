import React, { useEffect, useRef, useState } from "react";
import "../components/Images";
import Oeuvre from "../components/Oeuvre";
import Oeuvres from "../data/Oeuvres";
import Isotope from "isotope-layout";
import Bouton from "../components/Bouton";

function Galerie() {
  const [isotope, setIsotope] = useState(null);
  const gridRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = Oeuvres.length;

  // Ajout du filtre actif
  const [activeFilter, setActiveFilter] = useState("*");

  // Compte le nombre d'images chargées
  const handleImageLoad = () => {
    setImagesLoaded((count) => count + 1);
  };

  useEffect(() => {
    if (isotope && imagesLoaded === totalImages) {
      isotope.layout();
    }
  }, [imagesLoaded, isotope, totalImages]);

  // Initialisation d'Isotope
  useEffect(() => {
    if (gridRef.current) {
      const iso = new Isotope(gridRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "masonry",
        masonry: {
          columnWidth: ".grid-sizer",
        },
      });
      setIsotope(iso);
    }
    // Cleanup
    return () => {
      if (isotope) {
        isotope.destroy();
      }
    };
  }, []);

  // Met à jour le layout Isotope lors du resize de la fenêtre
  useEffect(() => {
    if (!isotope) return;
    const handleResize = () => {
      isotope.layout();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isotope]);

  // Mets à jour le filtre actif
  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
    if (isotope) {
      const filter = filterValue === "*" ? "*" : `.${filterValue}`;
      isotope.arrange({ filter });
    }
  };

  return (
    <div className="padding isotope-container flex flex-col gap-4">
      <div className="filters flex flex-wrap gap-4 justify-between md:justify-start items-center mb-4 md:pl-4">
        <Bouton
          label="Tout"
          onClick={() => handleFilterClick("*")}
          active={activeFilter === "*"}
        />
        <Bouton
          label="Peinture"
          onClick={() => handleFilterClick("Peinture")}
          active={activeFilter === "Peinture"}
        />
        <Bouton
          label="Sculpture"
          onClick={() => handleFilterClick("Sculpture")}
          active={activeFilter === "Sculpture"}
        />
        <Bouton
          label="Photo"
          onClick={() => handleFilterClick("Photo")}
          active={activeFilter === "Photo"}
        />
      </div>
      <div ref={gridRef} className="grid">
        <div className="grid-sizer"></div>
        {/* onClick pour que quand j'ouvre une oeuvre, la page remonte en haut */}
        {Oeuvres.map((oeuvre) => (
          <Oeuvre key={oeuvre.id} {...oeuvre} onImageLoad={handleImageLoad} onClick={() => {window.scrollTo(0, 0);}} />
        ))}
      </div>
    </div>
  );
}

export default Galerie;