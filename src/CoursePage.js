import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import Header from "./Header.js"

export default function CoursePage(props) {
    const [eachRepo, seteachRepo] = useState({});

    useEffect(() => {
        const repo = props.match.params.repo        
        const coursesUrl = `https://api.github.com/repos/amymhaddad/${repo}`
    
        axios.get(coursesUrl)
            .then(function (response) {
                const each_repo = response.data;
                seteachRepo(each_repo)
            }).catch((error) => {console.log(error)})

    }, [eachRepo])

    return (
        <div>
            <Header />
            <Course course={eachRepo}/>
        </div>
    )
}
