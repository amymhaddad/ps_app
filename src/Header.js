import { NavLink } from "react-router-dom"
import React from "react";

export default function Header() {
    const activeStyle = {color: "navy"}

    return (
        <nav>
            <h1>How to be a Great Programmer</h1>
            <NavLink activeStyle={activeStyle} exact to="/">Home</NavLink> {" | "}
            <NavLink activeStyle={activeStyle} to="/courses">Courses</NavLink> {" | "}
            <NavLink activeStyle={activeStyle} to="/images">Images</NavLink> 
        </nav>
    )
}