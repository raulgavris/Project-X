 
import { combineReducers } from 'redux';
import songListReducer from './songList/songListReducer';
import loginReducer from './login/loginReducer';
import registerReducer from './register/registerReducer';


const rootReducer = combineReducers({
    songListReducer,
    loginReducer,
    registerReducer,
});

export default rootReducer;