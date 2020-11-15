import { GET_SONG_LIST, GET_SONG_LIST_SUCCESS, GET_SONG_LIST_FAILURE } from './SongListTypes';
import  {POST_SONG_LIST, POST_SONG_LIST_SUCCESS, POST_SONG_LIST_FAILURE } from './SongListTypes';


const initialState = {
    song_list_get: '',
    song_list_post: '',
    error: '',
};

const SongListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SONG_LIST: return {
            ...state,
            song_list_get: { success: 1, loaded: false },
        };
        case GET_SONG_LIST_SUCCESS: return {
            ...state,
            song_list_get: [ ...action.payload] , loaded: true ,
            error: '',
        };
        case GET_SONG_LIST_FAILURE: return {
            ...state,
            song_list_get: {},
            error: { ...action.payload, loaded: false },
        };
        case POST_SONG_LIST: return {
            ...state,
            song_list_post: { success: 1 },
        }
        case POST_SONG_LIST_SUCCESS: return {
            ...state,
            song_list_post: action.payload,
            error: '',
        }
        case POST_SONG_LIST_FAILURE: return {
            ...state,
            song_list_post: {},
            error: action.payload,
        }
        default: return state;
    }
};

export default SongListReducer;