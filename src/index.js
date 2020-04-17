import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter  as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  //Get this line from index.html (in public folder. there's a <div> in the body tag in the html page, which is where we'll mount the application)
  document.getElementById('root')
)
