import { combineReducers } from 'redux'
import messages from './messageReducer.js'
import members from './memberReducer.js'

const chatApp = combineReducers({
    messages,
    members
});

export default chatApp;
