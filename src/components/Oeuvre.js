import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Oeuvre({ id, img, alt, title, by, category, onImageLoad, onClick }) {
  // Recalcule la taille lors du resize de la fenêtre
  useEffect(() => {
    function updateSize() {
      if (articleRef.current) {
        const { width, height } = articleRef.current.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  const articleRef = useRef(null);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  // Verifie si l'image est chargée
  const handleImageLoad = (e) => {
    if (onImageLoad) onImageLoad(e);
    if (articleRef.current) {
      // Récuperer la taille de l'article
      const { width, height } = articleRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  };

  return (
    <article className={`grid-item w-full min-h-24 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 ${category}`}>
      <Link to={`/oeuvre/${id}`} onClick={onClick} className={`relative`}>
        <div className="bg-accentuation rounded-br-[10rem] hover:transform hover:scale-[101%]" ref={articleRef}>
          <div
            className="inline-block absolute top-full -translate-y-full right-0 h-0 w-0 z-[2]"
            style={{
              borderBottom: "12px solid #1D201F",
              borderLeft: `${Math.round(width)}px solid transparent`,
            }}
          ></div>
          <div
            className="inline-block absolute top-full -translate-y-full right-0 h-0 w-0 z-[2]"
            style={{
              borderBottom: `${Math.round(height)}px solid #1D201F`,
              borderLeft: "12px solid transparent",
            }}
          ></div>
          <div className="p-2 relative z-10 box-shadow-primary">
            <img
              src={img}
              alt={alt}
              onLoad={handleImageLoad}
              className="pb-0 w-full max-w-none"
            />
            <div className="mt-0 bg-noirclair p-4">
              <h3 className="mb-2">{title}</h3>
              <h4>{by}</h4>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Oeuvre;
