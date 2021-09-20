import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite'

const style = StyleSheet.create({
    rowStyle : {
        backgroundColor: "#f5f5f5ab"
    },
    headerRowStyle : {
        backgroundColor: "#deb5b545"
    },
    rowChecked: {
        backgroundColor: "#e6e4e4"
    }

})

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    const [checked, setChecked] = useState(false)
    const handleChecked = (e) => {
        setChecked(e.target.checked);
    }
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr className={css(style.headerRowStyle)}>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            )
        } else {
            return (
                <tr className={css(style.headerRowStyle)}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return (
            <tr className={checked ? css( style.rowStyle, style.rowChecked) : css(style.tableRow)}>
               
                <td >
                <input type="checkbox" checked={checked} value="view" onChange={(e) => {handleChecked(e)}}/>
                    {textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}
