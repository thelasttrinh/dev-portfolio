import React from 'react'
import '../Styling/App.scss'
import { Link } from 'react-router-dom'
import PDF from "../assets/Aaron_Trinh_Resume_5.0.pdf";
const Header = () => {
  return (
    <div class="header-links">
      <Link to="/dev-portfolio" class="header-links-hover">Home</Link>
        <div class="header-links-right">
        <a href={PDF} without rel="noopener noreferrer" target="_blank">
          <button trailingIcon="picture_as_pdf" label="Resume">
            View Resume
          </button>
        </a>
          {/* <div class="header-links-hover">View Resume</div> */}
          <Link to="#about-me" class="header-links-hover">About Me</Link>
          <div class="header-links-hover">Projects</div>
          <div class="header-links-hover">Contact</div>
      </div>
    </div>
  )
}
//import icons
//scroll-behavior: smooth; for scrolling to intro

export default Header