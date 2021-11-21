import React from "react"
import { Link, useMatch, Route, Routes, Outlet, useParams } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = () => { 
  const { slug } = useParams();
  console.log('slug =', slug)
  
  return (
    <div>
      <ul>
        <li>
          <Link to={`about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`about-author`}>About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`:slug`} element={<SinglePage />} />
        
      </Routes>
      <Outlet />
    </div>
  )

 
}
export default About
