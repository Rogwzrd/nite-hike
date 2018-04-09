import { combineReducers } from "redux";
import { routerReducer, } from 'react-router-redux'

import mathApp from './counter'

const rootReducer = combineReducers({
    mathApp, 
    router: routerReducer
});

export default rootReducer;