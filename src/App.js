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

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
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
