import axios from "axios";

const setDelivered = (params, dispatch) => {
  axios
    .post("/api/order/set_delivered", params)
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

export default setDelivered;
