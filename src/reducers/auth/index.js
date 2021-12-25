const DEFAULT_STATE = { isLoggedIn: false };

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

    default:
      return state;
  }
};

export default sessionReducer;
