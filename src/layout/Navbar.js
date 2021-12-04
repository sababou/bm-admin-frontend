import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid">
          <span className="navbar-brand">
            <Link to="/" className="text-dark">
              Administration Bio-Magic
            </Link>
            <span className="mx-4">|</span> Bienvenue, Nordine
          </span>
          <button className="btn btn-dark py-3 px-4" type="submit">
            <FontAwesomeIcon className="me-3" icon={faPowerOff} />
            Déconnexion
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
