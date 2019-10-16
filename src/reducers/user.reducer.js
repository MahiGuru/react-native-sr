const initialState = {};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VOCABULARY":
      return { ...state, ...action.data };

    default:
      return state;
  }
};
