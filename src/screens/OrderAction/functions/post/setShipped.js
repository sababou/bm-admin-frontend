import axios from "axios";

const setShipped = (params, dispatch) => {
  axios
    .post("/api/order/set_shipped", params)
    .then((res) => {
      let data = res.data;
      if (data.status === "OK") {
        dispatch({
          type: "SET_ORDER_FORM_SUCCESS",
          payload: true,
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

export default setShipped;
