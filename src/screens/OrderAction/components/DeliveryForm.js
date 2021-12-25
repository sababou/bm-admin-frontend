import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../../layout/Navbar";

import getToken from "../functions/get/getToken";

import { useEffect } from "react";

import setDelivered from "../functions/post/setDelivered";

function DeliveryForm() {
  const dispatch = useDispatch();

  const orderFormState = useSelector((state) => state.orderForm);
  const formContent = orderFormState.formContent;

  useEffect(() => {
    getToken(formContent, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    setDelivered(formContent, dispatch);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="my-5 text-center">Confirmer une livraison</h1>

            <hr />

            <div className=" border bg-light p-3 p-md-4 mb-5">
              <div className="form-group mb-3">
                <label htmlFor="" className="form-label">
                  Numéro de commande
                </label>

                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="BM-##-######"
                    defaultValue={
                      formContent._order_number ? formContent._order_number : ""
                    }
                    onChange={(event) => {
                      let _orderNumber = event.target.value;
                      let _orderId = "";
                      if (
                        event.target.value &&
                        event.target.value.split("-").length === 3
                      ) {
                        _orderId = event.target.value.split("-")[2];
                      } else {
                        _orderId = "";
                      }
                      dispatch({
                        type: "SET_ORDER_FORM_CONTENT",
                        payload: {
                          ...formContent,
                          _order_id: _orderId,
                          _order_number: _orderNumber,
                        },
                      });
                    }}
                  />
                  <Link to="/scanner/orderNumber">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      <FontAwesomeIcon
                        className="mx-2 h4 mb-0"
                        icon={faQrcode}
                      />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="form-group text-center">
                <button
                  className="btn btn-primary py-3 px-5"
                  onClick={handleSubmit}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryForm;
