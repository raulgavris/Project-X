import WebApiService from '../../services/WebApiService';

import { POST_TOKEN, POST_TOKEN_SUCCESS, POST_TOKEN_FAILURE } from './loginTypes';
import { BLACK_LIST_TOKEN, BLACK_LIST_TOKEN_SUCCESS, BLACK_LIST_TOKEN_FAILURE } from './loginTypes';

export const postToken = ()  => {
    return {
        type: POST_TOKEN,
    };
};

export const postTokenSuccess = token  => {
    sessionStorage.setItem('access_token', token.access_token);
    sessionStorage.setItem('refresh_token', token.refresh_token);
    window.location.href = '/';
    return {
        type: POST_TOKEN_SUCCESS,
        payload: token,
    };
};

export const postTokenFailure = error  => {
    return {
        type: POST_TOKEN_FAILURE,
        payload: error,
    };
};

export const blacklistToken = ()  => {
    return {
        type: BLACK_LIST_TOKEN,
    };
};

export const blacklistTokenSuccess = token  => {
    window.location.href = '/';
    return {
        type: BLACK_LIST_TOKEN_SUCCESS,
        payload: {access_token: '', refresh_token: ''},
    };
};

export const blacklistTokenFailure = error  => {
    return {
        type: BLACK_LIST_TOKEN_FAILURE,
        payload: error,
    };
};

export const postTokenRequest = (username, password) => {
    return (dispatch) => {
        dispatch(postToken())
        WebApiService.postToken({
            username: username,
            password: password,
        })
        .then(response => {
            const config = {
                access_token: response.data.access,
                refresh_token: response.data.refresh,
            }
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('password', password);
            dispatch(postTokenSuccess(config))
        }).catch(error => {
            const errorMessage = error.message
            dispatch(postTokenFailure(errorMessage))
        })
    };  
};

export const blacklistTokenRequest = () => {
    return (dispatch) => {
        dispatch(blacklistToken())
        WebApiService.postBlackList({
            "refresh_token": sessionStorage.getItem("refresh_token")
        })
        .then(response => {
            sessionStorage.clear();
            response.config.headers['Authorization'] = null;
            response.config.data = null;
            dispatch(blacklistTokenSuccess());
        }).catch(error => {
            const errorMessage = error.message;
            dispatch(blacklistTokenFailure(errorMessage))
        })
    }
}