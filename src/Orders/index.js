import React from "react";

import Order from "./Order.js"

function Orders(props){
    return(
        <>
            <h2 className="text-center">Orders : {props.state}</h2>
            <div><Order /></div>
            <div><Order /></div>
            <div><Order /></div>
        </>
    );

}

export default Orders;