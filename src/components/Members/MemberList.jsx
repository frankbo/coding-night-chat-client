
import React from 'react';
import { ListGroup } from 'react-bootstrap';

import MemberItem from './MemberItem.jsx';
import './Members.scss';

export default function MemberList(props) {
    let { members } = props;
    return (
        <div className="member-list">
            <h2>Members</h2>
            <ListGroup>
                {members.map(function (member, index) {
                    return <MemberItem key={member.username + index} member={member}></MemberItem>
                })}
            </ListGroup>
        </div>
    )
}

MemberList.propTypes = {
    members: React.PropTypes.array.isRequired
};
