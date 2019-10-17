const initialState = {

}

export default requestTypeReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_USER":
            return { ...state, ...action };

        default:
            return state
    }
}

