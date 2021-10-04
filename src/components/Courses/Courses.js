import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {

    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./fake2.Json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className="c-container">
            {
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Courses;