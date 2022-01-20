const DEFAULT_STATE = {
  roles: [
    { name: "Validation", value: "ROLE_VALIDATION" },
    { name: "Expédition", value: "ROLE_SHIPPING" },
    { name: "Prise en charge de Livraison", value: "ROLE_DELIVERY_ENTRUST" },
    { name: "Livraison effectuée", value: "ROLE_DELIVERY_DONE" },
    { name: "Retour au dépôt", value: "ROLE_RETURN" },
    { name: "Annuler une commande", value: "ROLE_CANCEL" },
  ],
  formContent: {
    _email: null,
    _password: null,
    _name: null,
    _phone: null,
    _role: null,
  },
  currentError: null,
  formSuccess: false,
};

const AddMemberReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    ///////////////////////////////////////////////

    case "SET_FORM_CONTENT":
      return {
        ...state,
        formContent: action.payload,
      };

    case "SET_CURRENT_ERROR":
      return {
        ...state,
        currentError: action.payload,
      };

    case "SET_FORM_SUCCESS":
      return {
        ...state,
        formSuccess: action.payload,
      };

    default:
      return state;
  }
};

export default AddMemberReducer;
