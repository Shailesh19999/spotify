import React, { useState } from 'react'
import data from './Data'
import { NavLink } from 'react-router-dom'
const Song = () => {
  const[music,setMusic] = useState(data)
  return (
    <div className=' bg-neutral-800 w-screen'>
    {
      music.map((value)=>{
        return(
          <>
          <div className=' flex  justify-between'>
   <div className='text-white text-2xl font-bold mt-20  mx-8'>{value.topic}</div>
   <div className='text-white  mt-20 mr-20'>{value.all}</div>
   
    
    </div>
    <div className='flex ml-8'>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-4 w-52">

  <NavLink to ={`/musicplay/${value.id}`}>
  <img class="w-48 h-32" src={value.image} alt="Sunset in the mountains"/></NavLink>
  <div class="px-6 py-4">
    <div class="font-bold  mb-2 text-white">{value.music}</div>
    <p class="text-white text-base">
      {value.author}
    </p>
  </div>
  
</div>
{/* 2nd */}
<div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-4 w-52">
  <img class="w-48 h-32" src={value.image1} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold  mb-2 text-white">{value.music1}</div>
    <p class="text-white text-base">
      {value.author}
    </p>
  </div>
  
</div>
{/* 3rd */}
<div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-4 w-52">
  <img class="w-48 h-32" src={value.image2} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold  mb-2 text-white">{value.music2}</div>
    <p class="text-white text-base">
      {value.author}
    </p>
  </div>
  
</div>
{/* 4th */}
<div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-4 w-52">
  <img class="w-48 h-32" src={value.image3} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold  mb-2 text-white">{value.music3}</div>
    <p class="text-white text-base">
      {value.author}
    </p>
  </div>
  
</div>
{/* 5th */}
<div class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-4 w-52">
  <img class="w-48 h-32" src={value.image4} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold  mb-2 text-white">{value.music4}</div>
    <p class="text-white text-base">
      {value.author}
    </p>
  </div>
  
</div>
</div>

          </>
        )
      })
    }
     

   


 
    </div>

    
   
  )
}

export default Song
