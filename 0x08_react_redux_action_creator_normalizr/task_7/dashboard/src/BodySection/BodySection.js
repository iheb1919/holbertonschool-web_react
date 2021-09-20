import React from 'react';
import PropTypes from 'prop-types';

export default function BodySection(props) {
    const { title, children } = props;
    return (
        <div className="bodySection">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}