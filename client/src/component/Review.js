import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Review({id}) {
    const [review, getReview] = useState([])
    useEffect(()=>{
        axios.get('/reviews')
        .then(response=>{
            getReview(response.data)
            console.log(response.data)
        })
        
    },[])
  return (
  <>
   <h1 className="text-2xl font-bold mb-4">Reviews</h1>
  <h1 className="text-1xl font-bold mb-4">What other people are saying!</h1>
<div id={id} className="flex flex-wrap justify-center bg-gray-800">
  {review.map((item) => (
    <div key={item.id} className="w-64 mb-4 mx-2"> {/* Added mx-2 for horizontal margin */}
      <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-md">
        <p className="text-gray-800 mb-2">{item.review}</p>
        <p className="text-gray-600">@{item.customer_name}</p>
      </div>
    </div>
  ))}
</div>
</>





      
   
  )
}

export default Review