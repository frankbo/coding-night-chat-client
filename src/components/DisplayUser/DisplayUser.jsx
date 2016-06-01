
import React from 'react';

export default function DisplayUser(props) {
    let { name } = props;
    return (
        <h1>Hello { name } nice to see you again</h1>
    );
}

DisplayUser.propTypes = {
    name: React.PropTypes.string.isRequired
};
