import {
  faCalendarAlt,
  faCheck,
  faDownload,
  faPeopleCarry,
  faTimes,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React } from "react";

const OrderStateMeta = ({ orderData }) => {
  return (
    <>
      <div className="dropdown mb-3 d-grid">
        <button
          className="btn btn-outline-secondary dropdown-toggle py-2"
          type="button"
          data-bs-toggle="dropdown"
        >
          Informations
        </button>
        <div className="dropdown-menu p-2 border-dark w-100">
          <div
            className={
              "d-flex align-items-center mb-1 text-" +
              (orderData.validation_date ? "secondary" : "success")
            }
          >
            <FontAwesomeIcon className="me-3" icon={faDownload} />
            <div className="flex-grow-1">
              <div className="text-center fw-bold me-4">Enregistrement</div>
              <div>Le 04/11/2021 à 14:10:07</div>
              <div>Par : Youcef Benkhedda</div>
            </div>
          </div>

          {orderData.validation_date && (
            <>
              <hr className="my-2" />
              <div
                className={
                  "d-flex align-items-center mb-1 text-" +
                  (orderData.shipment_date ? "secondary" : "success")
                }
              >
                <FontAwesomeIcon className="me-3" icon={faCheck} />
                <div className="flex-grow-1">
                  <div className="text-center fw-bold me-4">Validation</div>
                  <div>Le 04/11/2021 à 14:10:07</div>
                  <div>Par : Youcef Benkhedda</div>
                </div>
              </div>
            </>
          )}

          {orderData.shipment_date && (
            <>
              <hr className="my-2" />
              <div
                className={
                  "d-flex align-items-center mb-1 text-" +
                  (orderData.delivery_date ? "secondary" : "success")
                }
              >
                <FontAwesomeIcon className="me-3" icon={faCalendarAlt} />
                <div className="flex-grow-1">
                  <div className="text-center fw-bold me-4">Expédition</div>
                  <div>Le 04/11/2021 à 14:10:07</div>
                  <div>Par : Youcef Benkhedda</div>
                  <div>Confié à : ZR Express</div>
                </div>
              </div>
            </>
          )}

          {orderData.delivery_date && (
            <>
              <hr className="my-2" />
              <div className="mb-1 text-success d-flex align-items-center">
                <FontAwesomeIcon className="me-2" icon={faPeopleCarry} />
                <div className=" ms-1 flex-grow-1">
                  <div className="text-center fw-bold me-4">Livraison</div>
                  <div>Le 04/11/2021 à 14:10:07</div>
                  <div>Par : Youcef Benkhedda</div>
                </div>
              </div>
            </>
          )}

          {orderData.return_date && (
            <>
              <hr className="my-2" />
              <div className="mb-1 text-danger d-flex align-items-center">
                <FontAwesomeIcon className="me-2" icon={faUndoAlt} />
                <div className=" ms-1 flex-grow-1">
                  <div className="text-center fw-bold me-4">
                    Retour au dépôt
                  </div>
                  <div>Le 04/11/2021 à 14:10:07</div>
                  <div>Par : Youcef Benkhedda</div>
                </div>
              </div>
            </>
          )}

          {orderData.cancel_date && (
            <>
              <hr className="my-2" />
              <div className="mb-1 text-danger d-flex align-items-center">
                <FontAwesomeIcon className="me-2" icon={faTimes} />
                <div className=" ms-1 flex-grow-1">
                  <div className="text-center fw-bold me-4">Annulé</div>
                  <div>Le 04/11/2021 à 14:10:07</div>
                  <div>Par : Youcef Benkhedda</div>
                  <div>Raison : Reçu erronné</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderStateMeta;
