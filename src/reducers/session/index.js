const DEFAULT_STATE = {
  isLoggedIn: false,
  userName: null,
  userPhone: null,
  userRoles: [],
  error: null,
};

const sessionReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };

    case "SET_SESSION_USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };

    case "SET_SESSION_USER_ROLES":
      return {
        ...state,
        userRoles: action.payload,
      };

    case "SET_SESSION_USER_PHONE":
      return {
        ...state,
        userPhone: action.payload,
      };

    case "SET_SESSION_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sessionReducer;
