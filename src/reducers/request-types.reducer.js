const initialState = {

}

export default requestTypeReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_REQUEST_TYPES":
            return { ...state, ...action };

        default:
            return state
    }
}

