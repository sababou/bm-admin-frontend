import {
  faMapMarkerAlt,
  faPhoneAlt,
  faUser,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function MemberItem({ memberData }) {
  return (
    <>
      <div className="row border py-3">
        <div className="col-md">
          <div className="px-3 ">
            <div className="mb-1">
              <FontAwesomeIcon className="me-3" icon={faUser} />
              {memberData.name}
            </div>
            <div className="mb-1">
              <FontAwesomeIcon className="me-3" icon={faPhoneAlt} />
              {memberData.phone}
            </div>
            {memberData.address && (
              <div className="mb-1">
                <FontAwesomeIcon className="me-3" icon={faMapMarkerAlt} />
                {memberData.address}
              </div>
            )}
          </div>
        </div>
        <div className="col-md">
          <FontAwesomeIcon className="me-1" icon={faUserTag} />
          <strong>Roles</strong>
          {memberData.roles.map((item, index) => {
            return (
              <div key={memberData.id + "" + index}>
                {getUserRoleName(item)}
              </div>
            );
          })}
        </div>
        <div className="col-md">
          <div className="mb-1">
            Dernière connexion : {memberData.last_login}
          </div>
          <div className="mb-1">
            Dernière opération : {memberData.last_operation.operation_type}
          </div>
          <div className="mb-1">
            Date dernière opération : {memberData.last_operation.operation_date}
          </div>
        </div>
        <div className="col-md">
          <div className="mb-1">
            <button className="btn btn-secondary p-3">
              Modifier les rôles
            </button>
          </div>
          <div className="mb-1">
            <button className="btn btn-danger p-3">Supprimer</button>
          </div>
        </div>
      </div>
    </>
  );
}

const getUserRoleName = (_state) => {
  switch (_state) {
    case "VALIDATION":
      return "Validation";

    case "SHIPMENT":
      return "Expédition";

    case "DELIVERY":
      return "Livraison";

    case "RETURN":
      return "Retour";

    default:
      return "";
  }
};

export default MemberItem;
