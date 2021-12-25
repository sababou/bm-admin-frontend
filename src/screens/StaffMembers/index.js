import React, { useEffect, useState } from "react";

import MemberItem from "./components/MemberItem";

import Navbar from "../../layout/Navbar";
import { useParams } from "react-router";
import axios from "axios";

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

  const getMemberList = () => {
    axios
      .get("/api/staff_member/list?role=" + getRoleParamQuery(params.role))
      .then((res) => {
        let data = res.data;
        if (data.status === "OK") {
          console.log(data);
          setMembers(data.users);
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMemberList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const getRoleParamQuery = (param) => {
  let queryParameter = null;

  switch (param) {
    case "validation":
      queryParameter = "ROLE_VALIDATION";
      break;

    case "shipping":
      queryParameter = "ROLE_SHIPPING";
      break;

    case "delivery":
      queryParameter = "ROLE_DELIVERY";
      break;

    case "return":
      queryParameter = "ROLE_RETURN";
      break;

    case "cancelation":
      queryParameter = "ROLE_CANCELATION";
      break;

    default:
      queryParameter = null;
      break;
  }

  return queryParameter;
};

export default StaffMembers;
