import axios from "axios";

const getToken = (formContent, dispatch) => {
  axios
    .get("/api/staff_member/get_csrf_token")
    .then((res) => {
      let data = res.data;
      if (data.status === "OK") {
        dispatch({
          type: "SET_FORM_CONTENT",
          payload: {
            ...formContent,
            _token: data.token,
          },
        });
      } else {
        dispatch({
          type: "SET_CURRENT_ERROR",
          payload: data.err,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getToken;
