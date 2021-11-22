import React, { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import "../App.css"


const Navbar = () => {
    const links = [
        {
          id: 1,
          path: "/",
          text: "Home",
        },
        {
          id: 2,
          path: "/about",
          text: "About",
        },
      ]
const [navbarOpen, setNavbarOpen] = useState(true)
const handleToggle = () => {
  setNavbarOpen(prev => !prev)
}
    
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul>
        {links.map(link => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>
                  {link.text}
                </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
    
  )
  
  
}
export default Navbar
