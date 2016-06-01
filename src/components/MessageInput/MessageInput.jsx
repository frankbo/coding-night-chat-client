import React from 'react';
import './MessageInput.scss';
import { Button, Form, FormControl } from 'react-bootstrap';

import { sendMail } from '../../socket/Messaging.jsx';

export default class MessageInput extends React.Component {
    constructor() {
        super();
        this.state = { value: '' };
    }

    setText(event) {
        this.setState({value: event.target.value});
    }

    submit() {
        if (!this.state.value) { return; }
        sendMail(this.state.value);
    }

    render() {
        return (
            <Form className="message-input" inline>
                <FormControl placeholder="your message"
                             type="text"
                             value={this.state.value}
                             onChange={this.setText.bind(this)}/>
                <Button className="message-submit" bsStyle="primary" onClick={this.submit.bind(this)}>Send message</Button>
            </Form>
        )
    }

};
