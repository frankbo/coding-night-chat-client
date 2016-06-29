import './App.scss';

import React from 'react';
import {
    receiveMessage,
    updateUserName,
    receiveUserInfo,
    receiveMembers
} from '../../socket/Messaging.js';
import DisplayUser from '../../components/DisplayUser/DisplayUser.jsx';
import Messages from '../../components/Messages/Messages.jsx';
import MemberList from '../../components/Members/MemberList.jsx';
import MessageInput from '../../components/MessageInput/MessageInput.jsx';
import io from 'socket.io-client';

const socket = io('jscn-chat.herokuapp.com');


export default class App extends React.Component {

    constructor() {
        const name = 'Frank';
        super();
        this.state = { name };
        updateUserName(this.state.name);
    }

    render() {
        return (
            <div className="app-container">
                <DisplayUser name={this.state.name}></DisplayUser>
                <MessageInput></MessageInput>
                <Messages messages={this.props.messages}></Messages>
                <MemberList members={this.props.members}></MemberList>
            </div>
        );
    }

    componentDidMount() {
        socket.on('RECEIVE_MESSAGE', receiveMessage.bind(this));
        socket.on('RECEIVE_USER', receiveUserInfo.bind(this));
        socket.on('RECEIVE_MEMBERS', receiveMembers.bind(this));
    }

}
