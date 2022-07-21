import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between">
      <Link to="/">
        <div>Toxique</div>
      </Link>
      <nav>
        <ul className="flex ">
          <Link to="/Education">
            <li>Education</li>
          </Link>
          <Link to="/Parlons_en">
            <li>Parlons-en</li>
          </Link>
          <Link to="/Depistage">
            <li>Dépiste-toi</li>
          </Link>
          <Link to="/ERROR404">
            <li>Faire un don</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
