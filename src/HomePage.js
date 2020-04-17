
import React from "react";
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <h1>Learn to Program</h1>
            <p>The core courses you need to take to learn to program.</p>
            <Link to="/courses">Courses</Link>
            <br />
            <Link to="/images">Images</Link>
        </div>  
    )
}