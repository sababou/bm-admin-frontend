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

function Order({ orderData }) {
  return (
    <>
      <div className="row border radius-lg py-3">
        {orderColumn(orderData)}
        {customerColumn(orderData)}
        {deliveryColumn(orderData)}
        {imageColumn(orderData)}
        {stateMetaDataColumn(orderData)}
      </div>
    </>
  );
}

const orderColumn = (_orderData) => {
  return (
    <div className="col-md-2">
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
            {_orderData.name}
          </div>
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faPhoneAlt} />
            {_orderData.phone}
          </div>
          <div className="mb-1">
            <FontAwesomeIcon className="me-3" icon={faMapMarkerAlt} />
            {_orderData.address}
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
        <div className="mb-1">
          <FontAwesomeIcon className="me-3" icon={faTruck} />
          {_orderData.entrusted_to.name}
        </div>
        <div className="mb-1">
          <FontAwesomeIcon className="me-3" icon={faBarcode} />
          {_orderData.barcode_content}
        </div>
      </div>
    </div>
  );
};

const imageColumn = (_orderData) => {
  return (
    <div className="col-md">
      <img src={logo} alt="" className="img-versement" />
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

export default Order;
