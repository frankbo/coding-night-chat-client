import io from 'socket.io-client';
import { addMessage } from '../actions/messageActions.js';
import { updateMembers } from '../actions/memberActions.js';

const socket = io('jscn-chat.herokuapp.com');
let appStore = null;

export function init(store) {
    appStore = store;
}

export function sendMail(textMessage) {
    const messageEventData = {
        message: {
            text: textMessage
        }
    };

    socket.emit('CREATE_MESSAGE', messageEventData);
}

export function receiveMessage(message) {
    appStore.dispatch(addMessage(message))
}

export function updateUserName(username) {
    const userData = {
        user: { username }
    };
    socket.emit('UPDATE_USER', userData);
}

// Gets never called. Server does not send information when user got updated
export function receiveUserInfo(incomingMessage) {
    // console.log('userInfo', incomingMessage);
}

export function receiveMembers(incomingMessage) {
    let members = incomingMessage.members;
    appStore.dispatch(updateMembers(members))
}


