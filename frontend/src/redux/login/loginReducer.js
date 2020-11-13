import {
    POST_TOKEN, POST_TOKEN_SUCCESS, POST_TOKEN_FAILURE,
    BLACK_LIST_TOKEN, BLACK_LIST_TOKEN_FAILURE, BLACK_LIST_TOKEN_SUCCESS
} from "./loginTypes";

const initialState = {
    access: '',
    refresh: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TOKEN: return {
            ...state,
            token: { success: 1 },
        };
        case POST_TOKEN_SUCCESS: return {
            ...state,
            access: action.payload.access_token,
            refresh: action.payload.refresh_token,
            error: '',
        };
        case POST_TOKEN_FAILURE: return {
            ...state,
            token: {},
            error: action.payload,
        };
        case BLACK_LIST_TOKEN: return {
            ...state,
            token: { success: 1 },
        };
        case BLACK_LIST_TOKEN_SUCCESS: return {
            ...state,
            access: '',
            refresh: '',
            error: '',
        };
        case BLACK_LIST_TOKEN_FAILURE: return {
            ...state,
            token: {},
            error: action.payload,
        };
        default: return state;

    }
};

export default loginReducer;