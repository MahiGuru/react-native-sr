const initialState = {};

export default takepictureReducer = (state = initialState, action) => {
  console.log("TAKE PICTURE REDUCER ", action, state);
  switch (action.type) {
    case "FETCH_VIEW_PICTURE":
      state[action.type] = action.data;
      return {...state};
    case "FETCH_DETAIL_PICTURE":
      state[action.type] = action.data;
      return {...state};

    default:
      return state;
  }
};
