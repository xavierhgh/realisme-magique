import React, { useState, useRef } from "react";

function Images({ img, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const handleImageLoad = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
      setLoaded(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-auto sm:h-full ${className}`}
    >
      <div className="bg-accentuation rounded-br-[10rem] h-auto flex items-center justify-center">
        <div
          className="inline-block absolute top-[100%] -translate-y-[100%] right-0 h-0 w-0 z-[2]"
          style={{
            borderBottom: "12px solid #1D201F",
            borderLeft: `${Math.round(dimensions.width)}px solid transparent`,
          }}
        ></div>
        <div
          className="inline-block absolute top-[100%] -translate-y-[100%] right-0 h-0 w-0 z-[2]"
          style={{
            borderBottom: `${Math.round(dimensions.height)}px solid #1D201F`,
            borderLeft: "12px solid transparent",
          }}
        ></div>
        <img 
          ref={imgRef}
          src={img}
          alt={alt}
          className="relative p-2 w-full h-auto max-w-none object-contain z-10 drop-shadow-primary"
          onLoad={handleImageLoad}
        />
      </div>      
    </div>
  );
}

export default Images;
