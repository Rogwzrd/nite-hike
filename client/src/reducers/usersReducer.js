import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "../actions/actionCreators";

const initalState = {
    users: [],
    loading: false,
    error: null
};

function userReducer( state = initalState, action) {
    switch(action.type){
        case FETCH_USERS_BEGIN:
            return{
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload.users
            };
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state
    }
}

export default userReducer;