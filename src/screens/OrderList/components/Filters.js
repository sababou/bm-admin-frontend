import { React } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Filters() {
  return (
    <>
      <div className="row justify-content-center py-3 border border-bottom-0">
        <div className="col-md-4 offset-md-2">
          <div className="input-group">
            <div className="input-group-text">
              <FontAwesomeIcon className="" icon={faPhoneAlt} />
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="N° de tél. Client"
            />
          </div>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary">Filtrer</button>
        </div>
      </div>
    </>
  );
}

export default Filters;
