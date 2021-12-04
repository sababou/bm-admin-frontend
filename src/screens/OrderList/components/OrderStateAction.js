import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function OrderStateAction({ orderData }) {
  return (
    <>
      {orderData.status === "saved" && savedStateAction(orderData)}
      {orderData.status === "validated" && validatedStateAction(orderData)}
      {orderData.status === "shipped" && shippedStateAction(orderData)}
    </>
  );
}

function savedStateAction(orderData) {
  return (
    <>
      <div className="d-flex">
        <button className="btn btn-success py-3 mb-2 flex-grow-1 me-1">
          <FontAwesomeIcon className="me-3" icon={faCheck} />
          Valider
        </button>

        <button className="btn btn-danger py-3 mb-2 flex-grow-1 ms-1">
          <FontAwesomeIcon className="me-3" icon={faTimes} />
          Annuler
        </button>
      </div>
    </>
  );
}

function validatedStateAction(orderData) {
  return (
    <>
      <div className="d-flex">
        <button className="btn btn-danger py-3 mb-2 flex-grow-1 ms-1">
          <FontAwesomeIcon className="me-3" icon={faTimes} />
          Annuler
        </button>
      </div>
    </>
  );
}

function shippedStateAction(orderData) {
  return (
    <>
      <div className="d-flex">
        <button className="btn btn-danger py-3 mb-2 flex-grow-1 ms-1">
          <FontAwesomeIcon className="me-3" icon={faTimes} />
          Annuler
        </button>
      </div>
    </>
  );
}

export default OrderStateAction;
