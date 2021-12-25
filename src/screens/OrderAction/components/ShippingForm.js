import { faBarcode, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../../layout/Navbar";

import getToken from "../functions/get/getToken";

import { useEffect } from "react";

import setShipped from "../functions/post/setShipped";
import { useState } from "react";

function ShippingForm() {
  const [needBarcode, setNeedBarcode] = useState(false);

  const dispatch = useDispatch();

  const orderFormState = useSelector((state) => state.orderForm);

  const formContent = orderFormState.formContent;

  useEffect(() => {
    getToken(formContent, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(formContent);

    if (
      formContent._order_number &&
      formContent._order_number.split("-").length === 3
    ) {
      let _arr = formContent._order_number.split("-");
      let _wilayaId = _arr[1];

      if (_wilayaId !== "16") {
        setNeedBarcode(true);
      } else {
        setNeedBarcode(false);
      }
    } else {
      setNeedBarcode(false);
    }
  }, [formContent]);

  const handleSubmit = () => {
    setShipped(formContent, dispatch);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="my-5 text-center">Expédier une commande</h1>

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

              {needBarcode && (
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label">
                    Code Barre Injection
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="##-###-######"
                      defaultValue={
                        formContent._barcode_content
                          ? formContent._barcode_content
                          : ""
                      }
                      onChange={(event) => {
                        dispatch({
                          type: "SET_ORDER_FORM_CONTENT",
                          payload: {
                            ...formContent,
                            _barcode_content: event.target.value,
                          },
                        });
                      }}
                    />
                    <Link to="/scanner/barcodeContent">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        <FontAwesomeIcon
                          className="mx-2 h4 mb-0"
                          icon={faBarcode}
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              <div className="form-group mb-3">
                <label htmlFor="" className="form-label">
                  Confier à
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    defaultValue={0}
                    onChange={(event) => {
                      dispatch({
                        type: "SET_ORDER_FORM_CONTENT",
                        payload: {
                          ...formContent,
                          _entrusted_to: event.target.value,
                        },
                      });
                    }}
                  >
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <Link to="/scanner/userId">
                    <button className="btn btn-outline-secondary" type="button">
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

export default ShippingForm;
