import React from "react";

function Bouton({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`btn  ${
        active ? "active ring-2 ring-primary text-primary" : "text-noir hover:text-blanc"
      }`}
    >
      <span className="before-effect"></span>
      <span className="after-effect"></span>
      <span className="btn-text">{label}</span>
    </button>
  );
}

export default Bouton;
