import React from "react";

import Navbar from "../../../layout/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBarcode,
  faCamera,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function ShippingForm() {
  const scannerObject = useSelector((state) => state.scanner);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="my-5 text-center">Expédier une commande</h1>

            <hr />

            <form action="" className=" border bg-light p-3 p-md-4 mb-5">
              <div className="form-group mb-3">
                <label htmlFor="" className="form-label">
                  Numéro de commande
                </label>

                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="BM-###-######"
                    value={
                      scannerObject.orderNumber ? scannerObject.orderNumber : ""
                    }
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

              <div className="form-group mb-3">
                <label htmlFor="" className="form-label">
                  Code Barre Injection
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="##-###-######"
                    value={
                      scannerObject.barcodeContent
                        ? scannerObject.barcodeContent
                        : ""
                    }
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

              <div className="form-group mb-3">
                <label htmlFor="" className="form-label">
                  Confier à
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                  >
                    <option selected>Choose...</option>
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
                <button className="btn btn-primary py-3 px-5">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingForm;
