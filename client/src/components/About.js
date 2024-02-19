import React from 'react';

function About() {
  return (
    <div className='w-full h-screen flex flex-col items-center bg-white'>
      <div className='text-center text-black'>
        <h2 className='text-coffeeColor text-3xl font-bold underline my-4'>About Blackwood Coffee Shop</h2>
        <p className='text-lg mb-4'>
          Welcome to Blackwood Coffee, where passion for coffee meets a commitment to creating an inviting space for coffee lovers.
        </p>
        <p className='text-lg mb-4'>
          Our journey began with a simple goal: to serve the finest coffee in a cozy and friendly environment.
        </p>
        <p className='text-lg mb-4'>
          At Blackwood, we believe in the power of a good cup of coffee to bring people together, inspire creativity, and create moments of joy.
        </p>
        <p className='text-lg mb-4'>
          Whether you're here to work, relax, or catch up with friends, our diverse menu of handcrafted coffee drinks has something for everyone.
        </p>
        <p className='text-lg mb-4'>
          Join us on this caffeinated journey, and let Blackwood Coffee be your go-to destination for exceptional coffee and delightful moments.
        </p>
      </div>
      <div>
          <button className='bg-coffeeColor text-white px-4 py-2 rounded-md hover:bg-gray-700'>Discover More</button>
        </div>
    </div>
  );
}

export default About;
