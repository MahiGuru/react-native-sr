const initialState = {};

export default takepictureReducer = (state = initialState, action) => {
  console.log("TAKE PICTURE REDUCER ", action, state);
  const pictures = (state && state.images) ? state.images: {} ;
  switch (action.type) {
    case "FETCH_VIEW_PICTURE":
      pictures[action.type] = action.data;
      state['images'] = pictures;
      console.log(state);
      return {...state};
    case "FETCH_DETAIL_PICTURE":
      pictures[action.type] = action.data;
      state['images'] = pictures;
      console.log(state);
      return {...state};
    case "FETCH_DESCRIPTION":
      state['description'] = action.data;
      console.log(state);
      return {...state};

    default:
      return state;
  }
};