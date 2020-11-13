 
import { combineReducers } from 'redux';
import helloWorldReducer from './helloWorld/helloWorldReducer';
import songListReducer from './songList/songListReducer';
import loginReducer from './login/loginReducer';
import registerReducer from './register/registerReducer';


const rootReducer = combineReducers({
    helloWorldReducer,
    songListReducer,
    loginReducer,
    registerReducer,
});

export default rootReducer;