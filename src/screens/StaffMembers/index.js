import React, { useEffect, useState } from "react";

import MemberItem from "./components/MemberItem";

import Navbar from "../../layout/Navbar";
import { useParams } from "react-router";

function StaffMembers() {
  const params = useParams();

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Sofiane Bouhed",
      phone: "07.01.02.01.02",
      last_login: "14/11/2021  à 08:32",
      roles: ["SHIPMENT", "RETURN"],
      last_operation: {
        operation_type: "Validation",
        operation_date: "14/11/2021  à 11:36",
      },
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Membres du Staff : {params.role}</h1>
          </div>
        </div>

        {members.map((item, index) => {
          return <MemberItem memberData={item} key={index} />;
        })}
      </div>
    </>
  );
}

export default StaffMembers;
