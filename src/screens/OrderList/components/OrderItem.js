import {
  faBarcode,
  faMapMarkerAlt,
  faPhoneAlt,
  faShoppingCart,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../assets/logo.png";
import OrderStateAction from "./OrderStateAction";
import OrderStateMeta from "./OrderStateMeta";

let imageViewerBtn = null;
let ticketImage = () => {
  return <></>;
};

function Order({ orderData }) {
  return (
    <>
      <div className="row border radius-lg py-3">
        {customerColumn(orderData)}
        {orderColumn(orderData)}
        {orderData.shippingDate && deliveryColumn(orderData)}
        {imageColumn(orderData)}
        {stateMetaDataColumn(orderData)}
        {modalImageViewer()}
      </div>
    </>
  );
}

const orderColumn = (_orderData) => {
  return (
    <div className="col-md">
      <div className="px-3 ">
        <div className="mb-1">
          <span className="me-3">#</span>
          {_orderData.order_number}
        </div>
        {_orderData.quantity_standard > 0 && (
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faShoppingCart} />
            {_orderData.quantity_standard} x Standard
          </div>
        )}
        {_orderData.quantity_caramel > 0 && (
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faShoppingCart} />
            {_orderData.quantity_caramel} x Caramel
          </div>
        )}
        <hr />
        <div className="mb-1">
          Total : <strong>{_orderData.total_price} DA</strong>
        </div>
      </div>
    </div>
  );
};

const customerColumn = (_orderData) => {
  return (
    <>
      <div className="col-md">
        <div className="px-3 ">
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faUser} />
            {_orderData.customer_name}
          </div>
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faPhoneAlt} />
            {_orderData.customer_phone}
          </div>
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faMapMarkerAlt} />
            {_orderData.customer_address}
            {_orderData.commune.wilaya.id === 16
              ? ", " + _orderData.commune.name
              : ""}{" "}
            ({_orderData.commune.wilaya.name})
          </div>
        </div>
      </div>
    </>
  );
};

const deliveryColumn = (_orderData) => {
  return (
    <div className="col-md">
      <div className="px-3 ">
        {_orderData.entrusted_to && (
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faTruck} />
            {_orderData.entrusted_to.name}
          </div>
        )}

        {_orderData.barcode_content && (
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faBarcode} />
            {_orderData.barcode_content}
          </div>
        )}
      </div>
    </div>
  );
};

const imageColumn = (_orderData) => {
  return (
    <div className="col-md">
      <img
        src={logo}
        alt=""
        className="img-versement"
        onClick={() => {
          imageViewerBtn.click();
        }}
      />
    </div>
  );
};

const stateMetaDataColumn = (_orderData) => {
  return (
    <div className="col-md-3">
      {/* Render Order Meta Data relative to 
        its processed state (validated, shipped...) */}
      <OrderStateMeta orderData={_orderData} />

      <OrderStateAction orderData={_orderData} />
    </div>
  );
};

const modalImageViewer = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#imageViewerModal"
        ref={(reference) => {
          imageViewerBtn = reference;
        }}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="imageViewerModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={"http://localhost/img/" + ticketImage}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
