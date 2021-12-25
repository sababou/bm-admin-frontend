import axios from "axios";

const addMember = (params, dispatch) => {
  axios
    .post("/api/staff_member/add", params)
    .then((res) => {
      let data = res.data;
      if (data.status === "OK") {
        dispatch({
          type: "SET_FORM_SUCCESS",
          payload: true,
        });
        dispatch({
          type: "RESET_ALL",
        });
      } else {
        dispatch({
          type: "SET_CURRENT_ERROR",
          payload: data.err,
        });
      }
    })
    .catch((error) => {
      console.log("Error - " + error);
    });
};

export default addMember;
