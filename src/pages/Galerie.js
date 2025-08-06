import React, { useEffect, useRef, useState } from "react";
import "../components/Images";
import Oeuvre from "../components/Oeuvre";
import Oeuvres from "../data/Oeuvres";
import Isotope from "isotope-layout";
import Bouton from "../components/Bouton";

function Galerie() {
  const [isotope, setIsotope] = useState(null);
  const gridRef = useRef(null);
  // State to track image loading
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = Oeuvres.length;

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
  const handleFilterClick = (filterValue) => {
    if (isotope) {
      filterValue = filterValue === "*" ? "*" : `.${filterValue}`;
      isotope.arrange({ filter: filterValue });
    }
  };

  return (
    <div className="padding isotope-container flex flex-col gap-4">
      <div className="filters flex flex-wrap gap-4 justify-between sm:justify-start items-center mb-4 sm:pl-4">
        <Bouton label="Tout" onClick={() => handleFilterClick("*")} />
        <Bouton label="Peinture" onClick={() => handleFilterClick("Peinture")} />
        <Bouton
          label="Sculpture"
          onClick={() => handleFilterClick("Sculpture")}
      />
      <Bouton label="Photo" onClick={() => handleFilterClick("Photo")} />
      </div>
      <div ref={gridRef} className="grid">
        <div className="grid-sizer">
          {Oeuvres.map((oeuvre) => (
              <Oeuvre key={oeuvre.id} {...oeuvre} onImageLoad={handleImageLoad} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Galerie;
