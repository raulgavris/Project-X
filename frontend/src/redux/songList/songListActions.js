import WebApiService from '../../services/WebApiService';

import { GET_SONG_LIST, GET_SONG_LIST_SUCCESS, GET_SONG_LIST_FAILURE } from './SongListTypes';
import  {POST_SONG_LIST, POST_SONG_LIST_SUCCESS, POST_SONG_LIST_FAILURE } from './SongListTypes';

export const getSongList = ()  => {
    return {
        type: GET_SONG_LIST,
    };
};

//WHAT IS THIS HELLO WORLD HELP
export const getSongListSuccess = songList  => {
    return {
        type: GET_SONG_LIST_SUCCESS,
        payload: songList,
    };
};

export const getSongListFailure = error  => {
    return {
        type: GET_SONG_LIST_FAILURE,
        payload: error,
    };
};

export const postSongList = ()  => {
    return {
        type: POST_SONG_LIST,
    };
};

export const postSongListSuccess = songList  => {
    return {
        type: POST_SONG_LIST_SUCCESS,
        payload: songList,
    };
};

export const postSongListFailure = error  => {
    return {
        type: POST_SONG_LIST_FAILURE,
        payload: error,
    };
};

export const getSongListRequest = () => {
    return (dispatch) => {
        dispatch(getSongList())
        WebApiService.getSongList()
            .then(response => {
                const songList = response.data
                dispatch(getSongListSuccess(songList))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(getSongListFailure(errorMessage))
            })
    };
};

export const postSongListRequest = (payload) => {
    return (dispatch) => {
        dispatch(postSongList())
        WebApiService.postSongList(payload)
            .then(response => {
                //not sure what the post will be here 
                dispatch(postSongListSuccess())
            }).catch(error => {
                const errorMessage = error.message
                dispatch(postSongListFailure(errorMessage))
            })
    };  
};