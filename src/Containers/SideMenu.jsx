import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/_sidemenu.scss'

const SideMenu = (props) => {
    const {toggleSideMenu, headerLinks} = props;
  return (
    <div class="sidemenu">
    <svg class="sidemenu-exit" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" 
    stroke-linejoin="round" stroke-width="1.5" 
    d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5" onClick={toggleSideMenu}/></svg>
    <div class="sidemenu-links">
    {headerLinks.map((link, index) => (
      <Link to={link.to} key={index} className={link.classes}>
        {link.text}
      </Link>))
      }
    </div>

    </div>
  )
}

export default SideMenu