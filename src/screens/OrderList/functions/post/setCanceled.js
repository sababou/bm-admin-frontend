import axios from "axios";

import getOrderList from "../get/getOrderList";

const setCanceled = (params, dispatch, status, customerPhone) => {
  axios
    .post("/api/order/set_canceled", params, status, customerPhone)
    .then((res) => {
      let data = res.data;
      if (data.status === "OK") {
        dispatch({
          type: "SET_ORDER_FORM_SUCCESS",
          payload: true,
        });
        dispatch({
          type: "RESET_ORDER_FORM",
        });

        getOrderList(dispatch, status, customerPhone);
      } else {
        dispatch({
          type: "SET_ORDER_FORM_CURRENT_ERROR",
          payload: data.err,
        });
      }
    })
    .catch((error) => {
      console.log("Error - " + error);
    });
};

export default setCanceled;
