import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container flex items-center justify-start m-auto text-black p-1 font-semibold">
      <Link to={"/"}>
        <img src="/icon.png" alt="logo" className="h-12" />
      </Link>
      <div className="mx-4 flex gap-4 md:gap-7">
        <Link to={"/"} className="capitalize cursor-pointer">
          Home
        </Link>
        <Link to={"/"} className="capitalize cursor-pointer">
          Exercise
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
