import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CourseListRow extends Component{
    render(){
        let {
			isHeader,
			textFirstCell,
			textSecondCell,
		} = this.props;
        if (isHeader === true) {
            if (textSecondCell === null ){
                return(
                    <tr>
                        <th colSpan={2}>
                            {textFirstCell}
                        </th>
                    </tr>
            );
            }
            else {
                return (
                    <tr>
                        <th>
                            {textFirstCell}
                        </th>
                        <th>
                            {textSecondCell}
                        </th>
                    </tr>
                );
            }
        }
        else if (isHeader === false ){
            return (
                <tr>
                    <td>
                        {textFirstCell}
                    </td>
                    <td>
                        {textSecondCell}
                    </td>
                </tr>
            );
        }
    }
    
}
CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.string.isRequired,
};
CourseListRow.defaultProps = {
    isHeader: false,
	textSecondCell: null,
}
export default CourseListRow