const initialState = {

}

export default tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TASKS":
            console.log("FROM TASKS", action);
            return { ...state, ...action.data };

        default:
            return state
    }
}

