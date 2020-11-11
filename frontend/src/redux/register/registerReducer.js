import { POST_REGISTER, POST_REGISTER_SUCCESS, POST_REGISTER_FAILURE, } from "./registerTypes";
const initialState = {
    config: '',
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REGISTER: return {
            ...state,
            config: { success: 1 },
        };
        case POST_REGISTER_SUCCESS: return {
            ...state,
            config: action.payload,
            error: '',
        };
        case POST_REGISTER_FAILURE: return {
            ...state,
            config: {},
            error: action.payload,
        };
        default: return state;

    }
};

export default registerReducer;