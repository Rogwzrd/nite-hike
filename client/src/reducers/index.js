import { combineReducers } from "redux";
import { routerReducer, } from 'react-router-redux'

import mathApp from './counter'
import userReducer from './usersReducer'

const rootReducer = combineReducers({
    mathApp,
    userReducer,
    router: routerReducer
});

export default rootReducer;