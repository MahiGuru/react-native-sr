const initialState = {};

export default vocabularyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VOCABULARY":
      return { ...state, ...action.data };

    default:
      return state;
  }
};
