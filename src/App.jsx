import React from 'react';
import "./Styling/App.scss";
import Header from "./Containers/Header";
import Intro from './Containers/Intro';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div class="background">
        <Routes>
          <Route path="/dev-portfolio" element={<Header/>}/>
        </Routes>
        <Intro id="about-me"/>
      </div>
    </Router>
  )
}
export default App