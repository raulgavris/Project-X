import WebApiService from '../../services/WebApiService';

import { GET_HELLO_WORLD, GET_HELLO_WORLD_SUCCESS, GET_HELLO_WORLD_FAILURE } from './helloWorldTypes';
import { POST_HELLO_WORLD, POST_HELLO_WORLD_SUCCESS, POST_HELLO_WORLD_FAILURE } from './helloWorldTypes';


export const getHelloWorld = ()  => {
    return {
        type: GET_HELLO_WORLD,
    };
};

export const getHelloWorldSuccess = helloWorld  => {
    return {
        type: GET_HELLO_WORLD_SUCCESS,
        payload: helloWorld,
    };
};

export const getHelloWorldFailure = error  => {
    return {
        type: GET_HELLO_WORLD_FAILURE,
        payload: error,
    };
};

export const postHelloWorld = ()  => {
    return {
        type: POST_HELLO_WORLD,
    };
};

export const postHelloWorldSuccess = helloWorld  => {
    return {
        type: POST_HELLO_WORLD_SUCCESS,
        payload: helloWorld,
    };
};

export const postHelloWorldFailure = error  => {
    return {
        type: POST_HELLO_WORLD_FAILURE,
        payload: error,
    };
};

export const getHelloWorldRequest = () => {
    return (dispatch) => {
        dispatch(getHelloWorld())
        WebApiService.getHelloWorld()
            .then(response => {
                const helloWorld = response.data
                dispatch(getHelloWorldSuccess(helloWorld))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(getHelloWorldFailure(errorMessage))
            })
    };
};

export const postHelloWorldRequest = (payload) => {
    return (dispatch) => {
        dispatch(postHelloWorld())
        WebApiService.postHelloWorld(payload)
            .then(response => {
                const countResponse  = { id: payload.id, count: payload.count }
                dispatch(postHelloWorldSuccess(countResponse))
            }).catch(error => {
                const errorMessage = error.message
                dispatch(postHelloWorldFailure(errorMessage))
            })
    };  
};