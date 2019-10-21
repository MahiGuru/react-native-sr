const initialState = {}

export const assetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ASSET":
            console.log("FROM FETCH_ASSET", action);
            return { ...state, ...action.data };

        default:
            return state
    }
}

export const assetDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ASSET_DETAILS":
                console.log("FROM FETCH_ASSET_DETAILS", action);
                return { ...state, ...action.data };

        default:
            return state
    }
}
