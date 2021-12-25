const DEFAULT_STATE = {
  orders: [],
  status: null,
  customerPhone: null,
  error: null,
  page: 0,
};

const OrderListReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case "SET_ORDER_LIST_CONTENT":
      return {
        ...state,
        orders: action.payload,
      };

    case "SET_ORDER_LIST_STATUS":
      return {
        ...state,
        status: action.payload,
      };

    case "SET_ORDER_LIST_CUSTOMER_PHONE":
      return {
        ...state,
        customerPhone: action.payload,
      };

    case "SET_ORDER_LIST_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "SET_ORDER_CURRENT_PAGE":
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default OrderListReducer;
