import React from "react";

function LogoPartenaire({src, alt, className}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export default LogoPartenaire;
