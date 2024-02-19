import React from 'react'
import Contact from '../components/Contact'

function Footer() {
  return (
    <div>
     <Contact/>
     <div className='mt-8 py-4 bg-gray-900 text-white'>
      <p>
        &copy; {new Date().getFullYear()}  Blackwood Coffee. All Rights Reserved
      </p>
      <div className='container mx-auto text-center.'>
      <p>
        <a href='/'>Developed by Clement Macharia </a>
      </p>
      <div class="flex justify-center space-x-4 mt-4">
          {/* <!-- Add social media icons/links here --> */}
        </div>

      </div>
      
     </div>
    </div>
  )
}

export default Footer