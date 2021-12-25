import React from "react";

import { Link } from "react-router-dom";

function StaffMemberList() {
  return (
    <>
      <div className="row">
        <div className="col-3 d-flex align-items-center">
          <h1>Membres du Staff</h1>
        </div>
        <div className="col px-5 text-center">
          <div className="text-center mt-5">
            <Link to="/staff-member-list/validation">
              <button className="btn px-5 btn-success m-4 p-4">
                Validation
              </button>
            </Link>

            <Link to="/staff-member-list/shipping">
              <button className="btn px-5 btn-secondary  m-4 p-4">
                Expédition
              </button>
            </Link>

            <Link to="/staff-member-list/delivery">
              <button className="btn px-5 btn-dark m-4 p-4">Livraison</button>
            </Link>

            <Link to="/staff-member-list/return">
              <button className="btn px-5 btn-warning m-4 p-4">
                Retour au Dépôt
              </button>
            </Link>

            <Link to="/staff-member-list/cancelation">
              <button className="btn px-5 btn-danger m-4 p-4">
                Annulation
              </button>
            </Link>

            <Link to="/staff-member-add">
              <button className="btn px-5  btn-primary mx-auto w-50 d-block m-4 p-4">
                Ajouter un membre du staff
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffMemberList;
