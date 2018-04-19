import { combineReducers } from "redux";
import { routerReducer, } from 'react-router-redux'

import mathApp from './counter'
import userReducer from './usersReducer'
import eventsReducer from './eventsReducer'

const rootReducer = combineReducers({
    mathApp,
    userReducer,
    eventsReducer,
    router: routerReducer
});

export default rootReducer;