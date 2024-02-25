import React from 'react';
import backgroundimage from '../images/about.jpg';



function About() {
  return (
    <div className='flex items-center justify-center mt-10'>
      <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={backgroundimage} alt='background' className='w-full object-cover' />
      </div>
      <div className='text-center text-black md:w-1/2 p-8'>
      <h2 className='text-coffeeColor text-3xl font-bold mb-6 border-b-2 border-coffeeColor'>
           BlACKWOOD COFFEE SHOP
      </h2>
        <p className="mb-5 text-lg ">
          Welcome to Blackwood Coffee, where passion for coffee meets a commitment to creating an inviting space for coffee lovers.
          Our journey began with a simple goal: to serve the finest coffee in a cozy and friendly environment.
          <br/>At Blackwood, we believe in the power of a good cup of coffee to bring people together, inspire creativity, and create moments of joy.
          Whether you're here to work, relax, or catch up with friends, our diverse menu of handcrafted coffee drinks has something for everyone.
          <br/>Join us on this caffeinated journey, and let Blackwood Coffee be your go-to destination for exceptional coffee and delightful moments.
        </p>
        <div>
          <button className='bg-coffeeColor text-white px-4 py-2 rounded-full'>Discover More</button>
        </div>
      </div>
     
        </div>
    </div>
  );
}

export default About;
