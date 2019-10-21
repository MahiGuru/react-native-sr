const initialState = {

}

export default equipmentReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_EQUIPMENTS":
            return { ...state, ...action };

        default:
            return state
    }
}

