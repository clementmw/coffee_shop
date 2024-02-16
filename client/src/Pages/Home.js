import React from 'react'

function Home({id}) {
  return (
    <>
    
    <div id = {id }className="bg-yellow-950 min-h-screen  p-8">
     <div className="bg-grey-200 h-screen flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-4">Coffee Makes Mood</h1>
      <p className="text-lg mb-8">"Indulge in every sip: Experience the Richness of Coffee"</p>
    </div>
    </div>
    
    </>
  )
}

export default Home