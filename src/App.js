import React from "react";
import { Route } from "react-router-dom";
import CoursesPage from "./CoursesPage";
import HomePage from "./HomePage";
import CoursePage from "./CoursePage";
import ImagesPage from "./ImagesPage";

function App() {
    return (
        <div>
            <Route path="/" exact component={HomePage}/>
            <Route path="/images" component={ImagesPage} />
            <Route path="/courses" exact component={CoursesPage} />
            <Route path="/courses/:repo" component={CoursePage} />
        </div>
    );
}
export default App;
