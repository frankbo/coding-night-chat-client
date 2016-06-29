const initialState = {
    messages: [],
    members: []
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                messages: state.messages.concat([action.message])
            };
        case 'UPDATE_MEMBERS':
            return {
                members: action.members
            };
        default:
            return state;
    }
}


export default appReducer;
