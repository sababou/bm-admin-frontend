import React from "react";

import { Link } from "react-router-dom";

function OrderList() {
  return (
    <>
      <div className="row">
        <div className="col-3 d-flex align-items-center">
          <h1>Liste de commandes</h1>
        </div>
        <div className="col px-5 text-center">
          <div className="text-center mt-3">
            <Link to="/order-list/saved">
              <button className="btn px-5 btn-outline-primary m-4 p-4">
                Commandes enregistrées
              </button>
            </Link>

            <Link to="/order-list/validated">
              <button className="btn px-5 btn-outline-success m-4 p-4">
                Commandes validées
              </button>
            </Link>

            <Link to="/order-list/shipped">
              <button className="btn px-5 btn-outline-secondary  m-4 p-4">
                Commandes expédiées
              </button>
            </Link>

            <Link to="/order-list/delivered">
              <button className="btn px-5 btn-outline-dark m-4 p-4">
                Commandes livrées
              </button>
            </Link>

            <Link to="/order-list/returned">
              <button className="btn px-5 btn-outline-warning m-4 p-4">
                Commandes Retournées
              </button>
            </Link>

            <Link to="/order-list/cancelled">
              <button className="btn px-5 btn-outline-danger m-4 p-4">
                Commandes Annulées
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
