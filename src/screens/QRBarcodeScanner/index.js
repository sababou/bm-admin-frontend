import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { useParams } from "react-router";

function QRBarcodeScanner() {
  const [data, setData] = React.useState("Not Found");

  const scannerData = useSelector((state) => state.scanner);

  const history = useHistory();

  const dispatch = useDispatch();

  const params = useParams();

  console.log(scannerData);

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) {
            switch (params.object) {
              case "orderNumber":
                dispatch({ type: "SET_ORDER_NUMBER", payload: result.text });
                break;

              case "barcodeContent":
                dispatch({ type: "SET_BARCODE_CONTENT", payload: result.text });
                break;

              case "userId":
                dispatch({ type: "SET_USER_ID", payload: result.text });
                break;

              default:
                break;
            }
            history.goBack();
          }
        }}
      />
    </>
  );
}

export default QRBarcodeScanner;
