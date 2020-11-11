import WebApiService from '../../services/WebApiService';

import { POST_REGISTER, POST_REGISTER_SUCCESS, POST_REGISTER_FAILURE } from './registerTypes';

export const postRegister = ()  => {
    return {
        type: POST_REGISTER,
    };
};

export const postRegisterSuccess = token  => {
    // sessionStorage.setItem('access_token', token.access_token);
    // sessionStorage.setItem('refresh_token', token.refresh_token);
    window.location.href = '/';
    return {
        type: POST_REGISTER_SUCCESS,
        payload: token,
    };
};

export const postRegisterFailure = error  => {
    return {
        type: POST_REGISTER_FAILURE,
        payload: error,
    };
};

export const postRegisterRequest = (username, password, firstname, lastname) => {
    return (dispatch) => {
        dispatch(postRegister())
        WebApiService.register({
            username: username,
            password: password,
            first_name: firstname,
            last_name: lastname,
        })
        .then(response => {
            let config = response.data
            dispatch(postRegisterSuccess(config))
        }).catch(error => {
            const errorMessage = error.message
            dispatch(postRegisterFailure(errorMessage))
        })
    };  
};
