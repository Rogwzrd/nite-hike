/*
* action types
*/
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const FETCH_EVENTS_BEGIN = 'FETCH_EVENTS_BEGIN';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
/*
* action creators
*/

export const fetchUsersBegin = () =>({
    type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = ( users ) =>({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
});

export const fetchUsersFailure = ( error ) =>({
    type: FETCH_USERS_FAILURE,
    payload: { error }
});

export const fetchUsers = () => dispatch =>{
        dispatch(fetchUsersBegin());
        return fetch('/api/users/allUsers')
            .then(handleErrors)
            .then(res=> res.json())
            .then(json=>{
                console.log(json);
                dispatch(fetchUsersSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchUsersFailure(error)))
    };

export const fetchEventsBegin = () =>({
    type: FETCH_EVENTS_BEGIN
});

export const fetchEventsSuccess = ( events ) =>({
    type: FETCH_EVENTS_SUCCESS,
    payload: { events }
});

export const fetchEventsFailure = ( error ) =>({
    type: FETCH_EVENTS_FAILURE,
    payload: { error }
});

export const fetchEvents = () => dispatch =>{
    dispatch(fetchEventsBegin());
    return fetch('/api/events/allEvents')
        .then(handleErrors)
        .then(res=> res.json())
        .then(json=>{
            console.log(json);
            dispatch(fetchEventsSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchEventsFailure(error)))
};


// general error handler
function handleErrors(res){
    if(!res.ok){
        throw Error(res.statusText)
    }
    return res
}

export function incrementReduc () {
   return {
       type: 'INCREMENT',
   }
}

export function decrementReduc () {
   return {
       type: 'DECREMENT',
   }
}
