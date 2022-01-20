import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { useParams } from "react-router";

import login from "../Login/functions/post/login";

function QRBarcodeScanner() {
  const orderFormState = useSelector((state) => state.orderForm);
  const sessionState = useSelector((state) => state.session);

  const formContent = orderFormState.formContent;

  const history = useHistory();

  const dispatch = useDispatch();

  const params = useParams();

  const postLogin = (token) => {
    let params = {
      _phone: sessionState.userPhone,
      _token: token,
    };
    login(params, dispatch);
  };

  const updateOrderNumber = (orderNumber) => {
    let _orderNumber = orderNumber;
    let _orderId = "";
    if (orderNumber && orderNumber.split("-").length === 3) {
      _orderId = orderNumber.split("-")[2];
    } else {
      _orderId = "";
    }
    dispatch({
      type: "SET_ORDER_FORM_CONTENT",
      payload: {
        ...formContent,
        _order_id: _orderId,
        _order_number: _orderNumber,
      },
    });
  };

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) {
            switch (params.object) {
              case "orderNumber":
                updateOrderNumber(result.text);
                break;

              case "barcodeContent":
                dispatch({
                  type: "SET_ORDER_FORM_CONTENT",
                  payload: {
                    ...formContent,
                    _barcode_content: result.text,
                  },
                });
                break;

              case "userId":
                dispatch({ type: "SET_USER_ID", payload: result.text });
                break;

              case "sessionToken":
                postLogin(result.text);
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
