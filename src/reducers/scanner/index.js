const DEFAULT_STATE = {
  orderNumber: null,
  barcodeContent: null,
  userId: null,
};

const ScannerReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    ///////////////////////////////////////////////

    case "SET_BARCODE_CONTENT":
      return {
        ...state,
        barcodeContent: action.payload,
      };

    case "SET_ORDER_NUMBER":
      return {
        ...state,
        orderNumber: action.payload,
      };

    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };

    ///////////////////////////////////////////////

    case "RESET_ALL":
      return {
        ...state,
        barcodeContent: null,
        orderNumber: null,
      };
  }
  return state;
};

export default ScannerReducer;
