function memberReducer(state = [], action) {
    switch (action.type) {
        case 'UPDATE_MEMBERS':
            state.members = action.members || [];
            return state.members;
        default:
            return state;
    }
}


export default memberReducer;
