import React, { useState } from "react";
import Filters from "./components/Filters.js";
import OrderItem from "./components/OrderItem";
import Navbar from "../../layout/Navbar.js";
import "./styles.css";
import { useParams } from "react-router";

function Orders(props) {
  const params = useParams();

  const [orders, setOrders] = useState([
    {
      id: 1542,
      order_number: "BM-16ae54",
      name: "John Doe",
      phone: "07 01 02 03 04",
      email: "johndoe@test.com",
      address: "02 route Internet - web 5000",
      wilaya: {
        id: 16,
        name: "Alger",
      },
      quantity_standard: 2,
      quantity_caramel: 1,
      total_price: 4000,
      barcode_content: "ZR-80148AQ",
      status: "saved",
      saved_date: "2021-11-02 18:52:41",
      validated_by: null,
      validation_date: "2021-11-02 21:48:22",
      shipped_by: null,
      shipment_date: "2021-11-02 18:52:41",
      entrusted_to: {
        name: "ZR Express",
      },
      delivery_date: "2021-11-02 18:52:41",
      delivered_by: {
        name: "Omar Yekhlef",
      },
      return_date: "2021-11-02 18:52:41",
      returned_by: {
        name: "Omar Yekhlef",
      },
      cancel_date: "2021-11-02 18:52:41",
      cancelled_by: {
        name: "Omar Yekhlef",
      },
      review: null,
    },
  ]);

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
