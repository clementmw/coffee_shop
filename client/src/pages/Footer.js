import React from 'react'
import Contact from '../components/Contact'

function Footer() {
  return (
    <div>
     <Contact/>
     <div className='py-2 text-white bg-customColor'>
      <p>
        &copy; {new Date().getFullYear()}  Blackwood Coffee. All Rights Reserved
      </p>
      <div className=''>
        <a href='/'>Developed by Clement Macharia </a>
      </div>
      
     </div>
    </div>
  )
}

export default Footer