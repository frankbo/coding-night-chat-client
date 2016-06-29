import io from 'socket.io-client';
const socket = io('jscn-chat.herokuapp.com');

export function sendMail(textMessage) {
    const messageEventData = {
        message: {
            text: textMessage
        }
    };

    socket.emit('CREATE_MESSAGE', messageEventData);
}

export function receiveMessage(message) {
    let { messages } = this.state;
    messages.push(message);
    this.setState(messages);
}

export function updateUserName(username) {
    const userData = {
        user: { username }
    };
    socket.emit('UPDATE_USER', userData);
}

// Gets never called. Server does not send information when user got updated
export function receiveUserInfo(incomingMessage) {
    console.log('userInfo', incomingMessage);
}

export function receiveMembers(incomingMessage) {
    let members = incomingMessage.members;
    this.setState({ members });
}


