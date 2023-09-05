import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container flex items-center justify-start m-auto text-black p-1 font-semibold">
      <Link to="/">
        <img src="/icon.png" alt="Logo" className="h-12" />
      </Link>
      <div className="mx-4 flex gap-4 md:gap-7">
        <NavLink to="/" label="Home" />
        <NavLink to="/" label="Exercise" />
      </div>
    </div>
  );
}

function NavLink({ to, label }) {
  return (
    <Link to={to} className="capitalize cursor-pointer">
      {label}
    </Link>
  );
}

export default Navbar;
