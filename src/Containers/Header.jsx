import React from 'react'
import '../Styling/App.scss'
import { Link } from 'react-router-dom'
import PDF from "../assets/Aaron_Trinh_Resume_5.1.pdf";
const Header = () => {
  return (
    <div class="header-links">
      
      <Link to="/dev-portfolio" class="header-links-hover">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
        <path fill="currentColor" d="m16 8.5l1.53 1.53l-1.06 1.06L10 
        4.62l-6.47 6.47l-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 
        5.99V18H4v-5.97zM12 17v-5H8v5h4z"></path></svg>
        </Link>
        <div class="header-links-right">
          <a href={PDF} without rel="noopener noreferrer" target="_blank" class="relative inline-block px-4 py-2 font-medium group">
          <span class="absolute inset-0 w-full h-full bg-primary rounded"></span>
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform group-hover:-translate-x-1 group-hover:-translate-y-1 bg-navy border-2 border-primary group-hover:bg-navy rounded"></span>
          <span class="flex items-center gap-2 relative text-lightest_slate group-hover:text-lightest_slate rounded transition duration-200 ease-out transform group-hover:-translate-x-1 group-hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.713T12 4q.425 0 .713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062ZM6 20q-.825 0-1.413-.588T4 18v-2q0-.425.288-.713T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.713T19 15q.425 0 .713.288T20 16v2q0 .825-.588 1.413T18 20H6Z"></path></svg>
            Resume</span>
          </a>
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