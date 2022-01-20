import axios from "axios";

const login = (params, dispatch) => {
  axios
    .post("/api/login", params)
    .then((res) => {
      let data = res.data;
      if (data.status === "OK") {
        dispatch({
          type: "LOGIN",
        });
        dispatch({
          type: "SET_SESSION_USER_NAME",
          payload: data.userdata.user_name,
        });
        dispatch({
          type: "SET_SESSION_USER_ROLES",
          payload: data.userdata.user_roles,
        });

        // save token in local storage
        localStorage.setItem("token", data.token);
        console.log(localStorage);
      } else {
        dispatch({
          type: "SET_SESSION_ERROR",
          payload: data.error,
        });
      }
    })
    .catch((error) => {
      console.log("Error - " + error);
      dispatch({
        type: "SET_SESSION_ERROR",
        payload: "Désolé, une erreur a eu lieu.",
      });
    });
};

export default login;
