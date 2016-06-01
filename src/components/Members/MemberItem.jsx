
import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default function Member(props) {
    var { member } = props;
    return (
        <ListGroupItem>{member.username}</ListGroupItem>
    );
}

Member.propTypes = {
    member: React.PropTypes.object.isRequired
};
