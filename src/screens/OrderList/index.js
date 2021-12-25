import React from "react";
import Filters from "./components/Filters.js";
import OrderItem from "./components/OrderItem";
import Navbar from "../../layout/Navbar.js";
import "./styles.css";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import getSavedOrders from "./functions/get/getSavedOrders.js";
import getToken from "./functions/get/getToken.js";

function Orders(props) {
  const params = useParams();

  const dispatch = useDispatch();

  const orderListState = useSelector((state) => state.orderList);
  const orderFormState = useSelector((state) => state.orderForm);

  const formContent = orderFormState.formContent;

  const orders = orderListState.orders;

  useEffect(() => {
    getToken(formContent, dispatch);

    dispatch({
      type: "SET_ORDER_LIST_STATUS",
      payload: params.state,
    });

    getSavedOrders(dispatch, params.state, orderListState.customerPhone);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h2 className="text-center my-5">
          Commandes {getOrderStateName(params.state)}
        </h2>
        <Filters />
        {orders.map((item, index) => {
          return <OrderItem orderData={item} key={index} />;
        })}
      </div>
    </>
  );
}

/////////////////////////////////////////////////////////////////////////////////////

//                  USED    FUNCTIONS

/////////////////////////////////////////////////////////////////////////////////////

const getOrderStateName = (_state) => {
  switch (_state) {
    case "saved":
      return "Enregistrées";

    case "validated":
      return "Validées";

    case "shipped":
      return "Expédiées";

    case "delivered":
      return "Livrées";

    case "returned":
      return "Retournées au Dépôt";

    case "cancelled":
      return "Annulées";

    default:
      return "";
  }
};

export default Orders;
