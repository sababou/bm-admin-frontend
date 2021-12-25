import React from "react";
import { useParams } from "react-router";
import DeliveryForm from "./components/DeliveryForm";
import ReturnForm from "./components/ReturnForm";
import CancelForm from "./components/CancelForm";
import ShippingForm from "./components/ShippingForm";

function OrderAction() {
  const params = useParams();

  return (
    <>
      {params.action === "shipping" && <ShippingForm />}

      {params.action === "delivery" && <DeliveryForm />}

      {params.action === "return" && <ReturnForm />}

      {params.action === "cancel" && <CancelForm />}
    </>
  );
}

export default OrderAction;
