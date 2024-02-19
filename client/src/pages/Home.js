import React from 'react';
import backgroundImage from '../images/coffee.jpg';
import { useNavigate } from 'react-router-dom';
// import Review from '../components/Review';



function Home() {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/purchase')
  }
  return (
    <div className='relative w-full h-screen flex flex-col items-center justify-center'>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={backgroundImage} alt='background' className="object-cover w-full h-full" />
      </div>
      <div className='relative z-10 text-center text-white'>
        <h2 className='text-3xl font-bold underline decoration-stone-500 my-4'>Welcome to Blackwood Coffee Shop</h2>
        <h1 className='text-5xl font-extrabold mb-8'>Time to Take that Sip</h1>
        <div className='text-pretty text-lg mb-4 ml-4'>
          <p className='text-lg mb-4 '>
            <span>Blackwood Coffee is a coffee shop that specializes in creating delicious coffee drinks.</span>
            <span>Our menu offers a wide range of coffee drinks, from espresso to cappuccino.</span>
            <span>Whether you're a coffee lover or just looking for a quick and easy way to enjoy a cup of coffee, we've got you covered.</span>
          </p>
        </div>
        {/* <Review/> */}
        <div className='mt-4'>
          <button onClick={handleNavigate} className='bg-coffeeColor text-white px-4 py-2 rounded-md hover:bg-gray-700'>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
