import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home/index";
import OrderList from "./screens/OrderList/index";
import OrderAction from "./screens/OrderAction/index";
import AddMember from "./screens/StaffMembers/components/AddMember";
import StaffMembers from "./screens/StaffMembers/index";
import QRBarcodeScanner from "./screens/QRBarcodeScanner";
import { useEffect } from "react";

import "./index.css";

import axios from "axios";
import { useState } from "react";
import Login from "./screens/Login";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(false);

  const sessionState = useSelector((state) => state.session);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(localStorage);

    axios.interceptors.request.use(
      function (config) {
        // spinning start to show
        setLoading(true);

        // setting authorization token
        config.headers.Authorization =
          "Bearer " + localStorage.getItem("token");

        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function (response) {
        console.log("ici ???");
        // spinning hide
        setLoading(false);

        return response;
      },
      function (error) {
        setLoading(false);

        if (error.response.status === 401) {
          dispatch({
            type: "LOGOUT",
          });
          localStorage.removeItem("token");
          return (window.location.href = "/");
        }

        return Promise.reject(error);
      }
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {loading && (
        <div className="overlay-loading">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <Router>
        <Route exact path="/">
          {sessionState.isLoggedIn ? <Home /> : <Login />}
        </Route>

        <Route exact path="/order-list/:state">
          <OrderList />
        </Route>

        <Route exact path="/staff-member-list/:role">
          <StaffMembers />
        </Route>

        <Route exact path="/staff-member-add">
          <AddMember />
        </Route>

        <Route exact path="/order-action/:action">
          <OrderAction />
        </Route>

        <Route exact path="/scanner/:object">
          <QRBarcodeScanner />
        </Route>
      </Router>
    </div>
  );
}

export default App;
