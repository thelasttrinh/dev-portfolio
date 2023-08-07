import React from 'react'
import '../Styling/App.scss'
const Header = () => {
  return (
    <div class="header-links">
        <div class="header-links-hover">Home</div>
        <div class="header-links-right">
          <div class="header-links-hover">About Me</div>
          <div class="header-links-hover">Projects</div>
          <div class="header-links-hover">Contact</div>
          <div class="header-links-hover">Night Mode</div>
      </div>
    </div>
  )
}

export default Header