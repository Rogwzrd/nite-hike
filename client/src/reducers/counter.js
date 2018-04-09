

const mathApp = ( state = {points: 0, clicks: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                points: state.points + 1,
                clicks: state.clicks + 1
            });
        case 'DECREMENT':
            return Object.assign({}, state, {
                points: state.points - 1,
                clicks: state.clicks + 1
            });
        default:
            return state
    }
}

export default mathApp;