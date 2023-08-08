import React from 'react'
import '../Styling/App.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div class="header-links">
      <Link to="/" class="header-links-hover">Home</Link>
        <div class="header-links-right">
          <div class="header-links-hover">View Resume</div>
          <div class="header-links-hover">About Me</div>
          <div class="header-links-hover">Projects</div>
          <div class="header-links-hover">Contact</div>
      </div>
    </div>
  )
}
//import icons

export default Header