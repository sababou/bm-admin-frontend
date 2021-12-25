const backToHome = (dispatch, history) => {
  dispatch({
    type: "SET_FORM_CONTENT",
    payload: {
      _token: null,
      _email: null,
      _password: null,
      _name: null,
      _phone: null,
      _role: null,
    },
  });
  dispatch({
    type: "SET_CURRENT_ERROR",
    payload: null,
  });
  dispatch({
    type: "SET_FORM_SUCCESS",
    payload: false,
  });

  history.replace("/");
};

export default backToHome;
