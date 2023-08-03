import React from 'react'
import '../Styling/App.scss'
const Header = () => {
  return (
    <div class="flex items-center">
        <div class="text-xl font-semibold">Home</div>
        <div class="text-xl font-semibold ml-auto">
    <div>About Me</div>
    <div>Projects</div>
    <div>Contact</div>
    <div>Night Mode</div>
      </div>
    </div>
  )
}

export default Header