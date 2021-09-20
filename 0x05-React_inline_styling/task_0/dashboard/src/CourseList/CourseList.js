import React from 'react';
import CourseListRow from './CourseListRow'
import './CourseList.css'
import PropTypes from 'prop-types'
import CourseShape from './CourseShape'

export default function CourseList(props) {
    const { listCourses } = props
    return (
        <div className="CourseListContainer">
        {listCourses.length === 0 ? (
            <p>No course available yet</p>
        ):(
            <table id="CourseList">
                <thead>
                    <CourseListRow isHeader={true} textFirstCell="Available courses" />
                    <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
                </thead>
                <tbody>
                    {listCourses.map((course) => <CourseListRow 
                        key={course.id} 
                        isHeader={false} 
                        textFirstCell={course.name} 
                        textSecondCell={course.credit} />)}
                </tbody>
            </table>
        )}
        </div>
    )
}

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
	listCourses: [],
};