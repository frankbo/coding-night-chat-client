
import React from 'react';

import './messages.scss';
import { ListGroupItem, ListGroup } from 'react-bootstrap';

export default function Messages(props) {
    let { messages } = props;

    return (
        <div className="messages">
            <h1>Messages</h1>
            <ListGroup>
                {messages.map(function(message, index) {
                    return <ListGroupItem key={message.message.text + index}>
                        {message.message.author.username} - {message.message.text}
                    </ListGroupItem>
                })}
            </ListGroup>
        </div>
    )
}

Messages.propTypes = {
    messages: React.PropTypes.array.isRequired
};
