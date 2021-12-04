import React from "react";

import { Link } from "react-router-dom";

function OrderAction() {
  return (
    <>
      <div className="row">
        <div className="col-3 d-flex align-items-center">
          <h1>Actions sur commandes</h1>
        </div>
        <div className="col px-5 text-center">
          <div className="">
            <Link to="/order-list/saved">
              <button className="btn px-5 btn-success m-4 p-4">Valider</button>
            </Link>

            <Link to="/order-action/shipping">
              <button className="btn px-5 btn-secondary  m-4 p-4">
                Expédier
              </button>
            </Link>

            <Link to="/order-action/delivery">
              <button className="btn px-5 btn-dark m-4 p-4">
                Définir "Livrée"
              </button>
            </Link>

            <Link to="/order-action/return">
              <button className="btn px-5 btn-warning m-4 p-4">
                Retour au Dépôt
              </button>
            </Link>

            <Link to="/order-action/cancel">
              <button className="btn px-5 btn-danger m-4 p-4">Annuler</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderAction;
