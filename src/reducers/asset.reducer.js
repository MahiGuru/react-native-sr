const initialState = {}

export default assetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_QRCODE":
            console.log("FROM QRCODE", action);
            return { ...state, ...action };

        default:
            return state
    }
}

