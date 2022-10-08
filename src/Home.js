import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = ()=>{
  return (
    <div>
    <div className='bg-black w-full h-screen grid place-items-center'>
   <div className='text-center justify-center'>
   <h1 className='text-white text-4xl bold'><i class="fa-brands fa-spotify text-5xl text-green-600"></i> Spotify</h1>
   <i class="fa-brands fa-spotify text-4xl"></i>
   <NavLink to ="/page">
    <button className='text-white bg-green-700 p-3 rounded-2xl mt-8'>Get started</button>
    </NavLink>
   </div>
  
   </div>
    

    </div>

      
    
  )
}

export default Home
