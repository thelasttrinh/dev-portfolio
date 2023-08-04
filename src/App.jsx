import React from 'react'
import "./Styling/App.scss";
import Header from "./Containers/Header"
const App = () => {
  return (
    <div>
      <Header/>
      <div className="text-3xl font-bold underline testing">We did it</div>
    </div>
  )
}

export default App