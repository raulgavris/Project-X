import { GET_HELLO_WORLD, GET_HELLO_WORLD_SUCCESS, GET_HELLO_WORLD_FAILURE } from './helloWorldTypes';
import { POST_HELLO_WORLD, POST_HELLO_WORLD_SUCCESS, POST_HELLO_WORLD_FAILURE } from './helloWorldTypes';

const initialState = {
    hello: '',
    helloPost: '',
    error: '',
};

const helloWorldReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HELLO_WORLD: return {
            ...state,
            hello: { success: 1, loaded: false },
        };
        case GET_HELLO_WORLD_SUCCESS: return {
            ...state,
            hello: { ...action.payload, loaded: true },
            error: '',
        };
        case GET_HELLO_WORLD_FAILURE: return {
            ...state,
            hello: {},
            error: { ...action.payload, loaded: false },
        };
        case POST_HELLO_WORLD: return {
            ...state,
            helloPost: { success: 1 },
        }
        case POST_HELLO_WORLD_SUCCESS: return {
            ...state,
            helloPost: action.payload,
            error: '',
        }
        case POST_HELLO_WORLD_FAILURE: return {
            ...state,
            helloPost: {},
            error: action.payload,
        }
        default: return state;
    }
};

export default helloWorldReducer;