import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CourseName = styled.h2`
    color: navy;
    text-align: left;
`;
 
const Para = styled.p`
    font-size: 20px;
    color: black;
`;
 
export default function Course ({course}) {
    const {name, full_name, description} = course;
    return (
        <div>
            <CourseName>
                <Link to={`/courses/${name}`}>{name}</Link>
            </CourseName>
            <Para>Full name: {full_name}</Para>
            <Para>About this course: {description}</Para>
        </div>    
    )
}
