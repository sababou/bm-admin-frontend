// import axios from "axios";
import React, { useEffect } from "react";

import OrderList from "./components/OrderList.js";
import OrderAction from "./components/OrderAction.js";
import StaffMemberList from "./components/StaffMemberList.js";
import Navbar from "../../layout/Navbar.js";

function Home() {
  useEffect(() => {
    console.log("Loading Home");

    // axios.get("/login").then((res) => {
    //   console.log(res.data);
    // });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <h1 className="text-center mt-5">- Accueil Administration -</h1>
        <h2 className="text-center mt-3 text-secondary mb-5">
          Bienvenue, Nordine
        </h2>
        <hr />
      </div>
      <div className="container">
        <OrderAction />

        <hr />

        <OrderList />

        <hr />

        <StaffMemberList />
      </div>
    </>
  );
}

export default Home;
