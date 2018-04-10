import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "../actions/actionCreators";

const initalState = {
    users: [],
    loading: false,
    error: "null"
};

function userReducer( state = initalState, action) {
    switch(action.type){
        case FETCH_USERS_BEGIN:
            return{
                ...state,
                loading: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                items: action.payload.users
            };
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading: false,
                items: action.payload.error
            };
        default:
            return state
    }
}

export default userReducer;