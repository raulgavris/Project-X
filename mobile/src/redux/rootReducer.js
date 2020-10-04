 
import { combineReducers } from 'redux';
import helloWorldReducer from './helloWorld/helloWorldReducer';

const rootReducer = combineReducers({
    helloWorldReducer,
});

export default rootReducer;