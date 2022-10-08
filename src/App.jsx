
import React from 'react'
import Home from './Home';
import Page from './Page';
import {Routes,Route} from "react-router-dom"
import MusicPlay from './MusicPlay';


function App() {
  return (
    <>
    
    
    
    
  
    
    
  
  <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/page" element ={<Page/>}/>
    <Route path="/musicplay/:id" element ={<MusicPlay/>}/>

    
  </Routes>
    
    
    
      
    </>
  )
}

export default App;
