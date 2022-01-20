const DEFAULT_STATE = {
  formContent: {
    _entrusted_to: null,
    _barcode_content: null,
    _order_number: null,
    _order_id: null,
  },
  currentError: null,
  formSuccess: false,
};

const OrderFormReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    ///////////////////////////////////////////////

    case "SET_ORDER_FORM_CONTENT":
      return {
        ...state,
        formContent: action.payload,
      };

    case "SET_ORDER_FORM_CURRENT_ERROR":
      return {
        ...state,
        currentError: action.payload,
      };

    case "SET_ORDER_FORM_SUCCESS":
      return {
        ...state,
        formSuccess: action.payload,
      };

    case "RESET_ORDER_FORM":
      return {
        ...state,
        formContent: {
          ...state.formContent,
          _entrusted_to: null,
          _barcode_content: null,
          _order_number: null,
          _order_id: null,
        },
        currentError: null,
        formSuccess: false,
      };

    default:
      return state;
  }
};

export default OrderFormReducer;
