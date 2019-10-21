const initialState = {};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_DETAIL":
      return { ...state, ...action.data };

    default:
      return state;
  }
};
