import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function OrderAction() {
  const sessionState = useSelector((state) => state.session);
  const userRoles = sessionState.userRoles;

  return (
    <>
      <div className="row">
        <div className="col-3 d-flex align-items-center">
          <h1>Actions sur commandes</h1>
        </div>
        <div className="col px-5 text-center">
          <div className="">
            {(userRoles.includes("ROLE_VALIDATION") ||
              userRoles.includes("ROLE_ADMIN")) && (
              <Link to="/order-list/saved">
                <button className="btn px-5 btn-success m-4 p-4">
                  Valider
                </button>
              </Link>
            )}

            {(userRoles.includes("ROLE_SHIPPING") ||
              userRoles.includes("ROLE_ADMIN")) && (
              <Link to="/order-action/shipping">
                <button className="btn px-5 btn-secondary  m-4 p-4">
                  Expédier
                </button>
              </Link>
            )}

            {(userRoles.includes("ROLE_DELIVERY_DONE") ||
              userRoles.includes("ROLE_ADMIN")) && (
              <Link to="/order-action/delivery">
                <button className="btn px-5 btn-dark m-4 p-4">
                  Définir "Livrée"
                </button>
              </Link>
            )}

            {(userRoles.includes("ROLE_RETURN") ||
              userRoles.includes("ROLE_ADMIN")) && (
              <Link to="/order-action/return">
                <button className="btn px-5 btn-warning m-4 p-4">
                  Retour au Dépôt
                </button>
              </Link>
            )}

            {(userRoles.includes("ROLE_CANCEL") ||
              userRoles.includes("ROLE_ADMIN")) && (
              <Link to="/order-action/cancel">
                <button className="btn px-5 btn-danger m-4 p-4">Annuler</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderAction;
