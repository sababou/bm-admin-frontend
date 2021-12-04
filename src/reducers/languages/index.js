const DEFAULT_STATE =  {current_language: "en"};

const LanguagesReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        current_language: action.payload
      };
  }
  return state;
};

export default LanguagesReducer;