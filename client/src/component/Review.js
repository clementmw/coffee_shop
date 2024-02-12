import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Review() {
    const [review, getReview] = useState([])
    useEffect(()=>{
        axios.get('/reviews')
        .then(response=>{
            getReview(response.data)
            console.log(response.data)
        })
        
    },[])
  return (
    <div>
        {/* {review} */}
    </div>
  )
}

export default Review