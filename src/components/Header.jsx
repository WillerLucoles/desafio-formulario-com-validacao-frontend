import React from "react";
import logo from "../assets/WillerLucoles_Logo.svg";
function Header() {
  return (
    <header className="w-full py-4 px-6">
      <div className="flex items-start">
        <img
          src={logo}
          alt="Willer Lucoles"
          className="h-8 w-auto"
        />
      </div>
    </header>
  );
}

export default Header;
