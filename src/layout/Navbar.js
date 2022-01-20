import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

function Navbar() {
  const sessionState = useSelector((state) => state.session);

  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid">
          <span className="navbar-brand">
            <Link to="/" className="text-dark">
              Accueil
            </Link>
          </span>
          <button
            className="btn btn-dark py-3 px-4"
            data-bs-toggle="modal"
            data-bs-target="#logoutModal"
          >
            <FontAwesomeIcon className="me-3" icon={faPowerOff} />
            Déconnexion
          </button>
        </div>
      </nav>

      <div className="modal fade" id="logoutModal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center p-5">
              <h5 className="modal-title" id="exampleModalLabel">
                Êtes vous sûr de vouloir vous déconnecter ?
              </h5>
            </div>

            <div className="modal-footer justify-content-around">
              <button
                type="button"
                className="btn btn-dark py-3 px-5"
                onClick={() => {
                  dispatch({
                    type: "LOGOUT",
                  });
                  localStorage.removeItem("token");
                  return (window.location.href = "/");
                }}
              >
                Oui
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary py-3 px-5"
                data-bs-dismiss="modal"
              >
                Non
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
