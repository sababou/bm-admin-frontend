import axios from "axios";

const checkLoginStatus = (dispatch) => {
  if (localStorage.getItem("token")) {
    axios
      .post(
        "/api/check_login_status",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        let data = res.data;
        console.log(data.user_roles);
        if (data.status === "ALREADY_LOGGED") {
          dispatch({
            type: "LOGIN",
            payload: data.userdata,
          });
          dispatch({
            type: "SET_SESSION_USER_NAME",
            payload: data.user_name,
          });
          dispatch({
            type: "SET_SESSION_USER_ROLES",
            payload: data.user_roles,
          });
        }
      });
  }
};

export default checkLoginStatus;
