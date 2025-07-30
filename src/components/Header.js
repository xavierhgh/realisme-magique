import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkArray = [
    { href: "/", text: "Accueil" },
    { href: "/galerie", text: "Galerie" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <header className="py-4">
      {/* Top section: logo + info + burger */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="Logo Réalisme Magique"
            className="h-[8vh] w-auto object-contain"
          />

          <p className="text-sm sm:text-base text-gray-600">
            Ouvert Aujourd'hui
          </p>
        </div>
        {/* Burger menu button visible only on mobile */}
        <button
          className="text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        {/* Navigation visible on both mobile and desktop */}
        <nav
          className={`mt-4 ${
            menuOpen ? "block" : "hidden"
          } sm:block transition-all`}
        >
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            {linkArray.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  onClick={() => setMenuOpen(false)} // Close menu on mobile after click
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-800 hover:text-accentuation transition-colors"
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
