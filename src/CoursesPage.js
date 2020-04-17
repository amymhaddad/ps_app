import React, { useState, useEffect } from "react";
import axios from "axios";
import Course from "./Course.js";
import IntroToCourses from "./IntroToCourses.js";
import Header from "./Header.js"

export default function HomePage() {

    let [courses, setCourses] = useState([])
    const coursesUrl = "https://api.github.com/users/amymhaddad/repos"

    useEffect(() => {
        axios.get(coursesUrl)
            .then(function (response) {
                const allCourses = response.data;
                setCourses(allCourses)
            }).catch(function (error) {
                console.log(error.response)
            })
    }, []);

    return (
        <>
            <Header />
            <IntroToCourses />
                <div>
                    {courses.map(course => (
                        <Course key={course.id} course={course}/>
                    ))}  
                </div>
        </>
    );
}
