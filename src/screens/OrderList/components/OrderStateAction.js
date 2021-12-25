import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import setValidated from "../functions/post/setValidated";
import setCanceled from "../functions/post/setCanceled";

function OrderStateAction({ orderData }) {
  const orderFormState = useSelector((state) => state.orderForm);

  const formContent = orderFormState.formContent;

  const dispatch = useDispatch();

  const handleValidate = (event) => {
    let orderId = event.target.getAttribute("data-order-id");
    let params = {
      _token: formContent._token,
      _order_id: orderId,
    };

    setValidated(params, dispatch);
  };

  const handleCancel = (event) => {
    let orderId = event.target.getAttribute("data-order-id");
    let params = {
      _token: formContent._token,
      _order_id: orderId,
    };

    setCanceled(params, dispatch);
  };

  return (
    <>
      <div className="d-flex">
        {orderData.status === "SAVED" && (
          <button
            className="btn btn-success py-3 mb-2 flex-grow-1 me-1"
            data-order-id={orderData.id}
            onClick={handleValidate}
          >
            <FontAwesomeIcon className="me-3" icon={faCheck} />
            Valider
          </button>
        )}

        {(orderData.status === "SAVED" || orderData.status === "VALIDATED") && (
          <button
            className="btn btn-danger py-3 mb-2 flex-grow-1 ms-1"
            data-order-id={orderData.id}
            onClick={handleCancel}
          >
            <FontAwesomeIcon className="me-3" icon={faTimes} />
            Annuler
          </button>
        )}
      </div>
    </>
  );
}

export default OrderStateAction;
