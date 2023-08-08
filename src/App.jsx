import React from 'react';
import "./Styling/App.scss";
import Header from "./Containers/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
      
      <div className="text-3xl font-bold underline testing">We did it</div>
      </div>
    </Router>
  )
}
//Do routers?
export default App