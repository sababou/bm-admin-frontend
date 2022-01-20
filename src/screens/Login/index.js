import React, { useState } from "react";
import { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import checkLoginStatus from "./functions/get/checkLoginStatus";

function Login() {
  const sessionState = useSelector((state) => state.session);

  const history = useHistory();

  const dispatch = useDispatch();

  let [formPhone, setFormPhone] = useState(sessionState.userPhone);

  useEffect(() => {
    checkLoginStatus(dispatch);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (sessionState.userName != null) {
      history.push("/scanner/sessionToken");

      dispatch({
        type: "SET_SESSION_USER_NAME",
        payload: null,
      });

      dispatch({
        type: "SET_SESSION_ERROR",
        payload: null,
      });
    }
    // eslint-disable-next-line
  }, [sessionState.userName]);

  const handleScanClick = () => {
    dispatch({
      type: "SET_SESSION_USER_PHONE",
      payload: formPhone,
    });
    history.push("/scanner/sessionToken");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3 py-5">
            <h1 className="my-5 text-center">Connexion</h1>
            <form action="">
              <div className="form-group mb-3">
                <label htmlFor="" className="form-label">
                  N° de téléphone
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setFormPhone(event.target.value);
                  }}
                  defaultValue={sessionState.userPhone}
                />
                {sessionState.error && (
                  <div className="form-text text-danger">
                    {sessionState.error}
                  </div>
                )}
              </div>
              <div className="form-group text-center py-4   ">
                <button
                  type="button"
                  className="btn btn-lg btn-dark"
                  onClick={handleScanClick}
                >
                  Scan QR-code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
