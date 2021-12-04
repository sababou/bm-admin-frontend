import React from "react";
import { useParams } from "react-router";
import ShippingForm from "./components/ShippingForm";

function OrderAction() {
  const params = useParams();

  return (
    <>
      {params.action === "shipping" && <ShippingForm />}

      {params.action === "delivery"}

      {params.action === "return"}
    </>
  );
}

export default OrderAction;
