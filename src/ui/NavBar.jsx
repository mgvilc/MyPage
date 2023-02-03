import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)
  return (
    <nav className={'navbar navbar-expand-lg fixed-top navbar-dark px-3 '+ (navbar ? "colorprim":"")}>

      <button
        className='navbar-toggler'
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="navbarSupportedContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className='navbar-toggler-icon text-light'></span>

      </button>

      <div className='collapse navbar-collapse justify-content-end' id="menu">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink
              className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>

          </li>

          <li className='nav-item'>
            <NavLink
              className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
