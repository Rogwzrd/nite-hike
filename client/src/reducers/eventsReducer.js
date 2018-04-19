import {
    FETCH_EVENTS_BEGIN,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE
} from "../actions/actionCreators";

const initalState = {
    events: [],
    loading: false,
    error: null
};

function eventsReducer( state = initalState, action) {
    switch(action.type){
        case FETCH_EVENTS_BEGIN:
            return{
                ...state,
                loading: true
            };
        case FETCH_EVENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                events: action.payload.events
            };
        case FETCH_EVENTS_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state
    }
}

export default eventsReducer;