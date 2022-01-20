import React, { useEffect } from "react";

import OrderList from "./components/OrderList.js";
import OrderAction from "./components/OrderAction.js";
import StaffMemberList from "./components/StaffMemberList.js";
import Navbar from "../../layout/Navbar.js";

import { useSelector } from "react-redux";

function Home() {
  const sessionState = useSelector((state) => state.session);
  const userRoles = sessionState.userRoles;

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <h2 className="text-center mt-5 text-secondary mb-5">
          Bienvenue, {sessionState.userName}
        </h2>
        <hr />
      </div>
      <div className="container">
        <OrderAction />

        {userRoles.includes("ROLE_ADMIN") && (
          <>
            <hr />

            <OrderList />

            <hr />

            <StaffMemberList />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
