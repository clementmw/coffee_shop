import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div>
      <nav >
        <div>
          <Link to="/">
            <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" alt="logo" />
          </Link>
          <div >
            <ul>
              <li >
                <Link to="/">Home</Link>
              </li>
              <li >
                <Link  to="/about">About us</Link>
              </li>
              <li>
                <Link to="/review">Reviews</Link>
              </li>
              <li>
                <Link to="/purchase">Purchase</Link>
              </li>
              <li >
                <Link to="/contact">Contact us</Link>
              </li>
              <li >
                </li>
                </ul>
              </div>
              </div>
              </nav>
     
    </div>
  )
}

export default Navbar