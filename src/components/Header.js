import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import logo from "../images/Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkArray = [
    { href: "/", text: "Accueil" },
    { href: "/galerie", text: "Galerie" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <header className="padding border-b border-accentuation sm:flex justify-between items-center">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="Logo Réalisme Magique"
            className="h-[8vh] w-auto object-contain hover:cursor-pointer"
            onClick={() => window.location.href = "/"}
          />

          <p className="text-more">
            Ouvert Aujourd'hui
          </p>
        </div>
        {/* Burger menu visible que sur mobile */}
        <button
          className="text-4xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* Navigation visible pour le mobile et desktop */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:block transition-all`}
        >
          <ul className="flex flex-col items-center gap-4 mt-4 sm:flex-row sm:gap-8 sm:mt-0">
            {linkArray.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  onClick={() => setMenuOpen(false)} // Au clique ferme le menu
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold text-more"
                      : "hover:text-accentuation transition-colors text-more"
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
    </header>
  );
}

export default Header;