 
import { combineReducers } from 'redux';
import helloWorldReducer from './helloWorld/helloWorldReducer';
import songListReducer from './songList/songListReducer';


const rootReducer = combineReducers({
    helloWorldReducer,
    songListReducer,
});

export default rootReducer;