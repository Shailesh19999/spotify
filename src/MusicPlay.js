import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import data from './Data'
const MusicPlay = () => {
const navigate = useNavigate()
const[player,setPlayer]= useState([])
    const {id} = useParams();
    const compare =()=>{
        let comparedata = data.filter((e)=>{
            return e.id==id
        })
        setPlayer(comparedata)
    }
    useEffect(()=>{
        compare()
    },[id])
   const back =()=>{
    navigate(-1)

   }
    return (
        <div>
            <div class="w-full">
          
          
                <div class="h-2 bg-red-light"></div>
                {
                player.map((e)=>{
                    return(
                        <>
                        <div class="flex items-center justify-center h-screen bg-red-lightest">
                    <div class="bg-white shadow-lg rounded-lg" style={{width: "45rem !important"}}>
                        <div class="flex">
                            <div>
                           
                                <img class="w-full rounded hidden md:block" src={e.image} alt="Album Pic"/>
                            </div>
                            <div class="w-full p-8">
                                <div class="flex justify-between">
                                    <div>
                                        <h3 class="text-2xl text-grey-darkest font-medium">{e.author}</h3>
                                        <p class="text-sm text-grey mt-1">{e.music}</p>
                                    </div>
                                    <div class="text-red-lighter text-2xl" onClick={back}>
                                       
                                        <i class="fa-solid fa-circle-xmark hover:text-red-700"></i>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center mt-8">
                                  
                                   {/* music tag */}
                                    
                                    <audio src={e.song} controls></audio>
                                    
                                   
            
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                        </>
                    )
                })
            }
               
        </div>
    </div>
    )
}

export default MusicPlay
