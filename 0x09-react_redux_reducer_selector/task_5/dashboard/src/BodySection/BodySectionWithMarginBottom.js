import React from 'react';
import './BodySectionWithMarginBottom.css'
import BodySection from './BodySection';
import PropTypes from 'prop-types';

export default function BodySectionWithMarginBottom(props) {
    return (
        <div className="bodySectionWithMargin">
            <BodySection {...props}>

            </BodySection>
        </div>
    )
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}
