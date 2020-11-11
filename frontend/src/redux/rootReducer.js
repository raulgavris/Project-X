 
import { combineReducers } from 'redux';
import helloWorldReducer from './helloWorld/helloWorldReducer';
import loginReducer from './login/loginReducer';
import registerReducer from './register/registerReducer';


const rootReducer = combineReducers({
    helloWorldReducer,
    loginReducer,
    registerReducer,
});

export default rootReducer;