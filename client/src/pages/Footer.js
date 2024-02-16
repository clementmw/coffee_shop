import React from 'react'
import Contact from '../components/Contact'

function Footer() {
  return (
    <div>
     <Contact/>
     <div>
      <p>
        &copy; {new Date().getFullYear()} - All Rights Reserved
      </p>
      <p>
        <a>Developed by Clement Macharia </a>
      </p>
     </div>
    </div>
  )
}

export default Footer