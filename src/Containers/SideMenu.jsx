import React from 'react'
import '../Styling/_sidemenu.scss'

const SideMenu = (props) => {
    const {toggleSideMenu} = props;
  return (
    <div class="sidemenu">SideMenu
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" 
    stroke-linejoin="round" stroke-width="1.5" 
    d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5" onClick={toggleSideMenu}/></svg>
    </div>
  )
}

export default SideMenu