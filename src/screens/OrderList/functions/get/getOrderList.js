import axios from "axios";

const getOrderList = (dispatch, status, customerPhone) => {
  let url = "/api/order/list?";
  let hasChanged = false;

  if (status) {
    url += "status=" + status.toUpperCase();
    hasChanged = true;
  }

  if (customerPhone) {
    if (hasChanged) {
      url += "&";
    }
    url += "customer_phone=" + customerPhone;
    hasChanged = true;
  }

  axios
    .get(url)
    .then((res) => {
      let data = res.data;
      if (data.status === "OK") {
        dispatch({
          type: "SET_ORDER_LIST_CONTENT",
          payload: data.orders,
        });
      } else {
        dispatch({
          type: "SET_ORDER_LIST_ERROR",
          payload: data.err,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getOrderList;
