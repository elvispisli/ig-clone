import React from 'react'
import './Home.css'
import Nav from './Nav/Nav'
import Feed from './Feed/Feed'
import Suggestion from './Suggestion/Suggestion'

function Home() {
  return (
    <div className='home'>
      
      <div className='nav'> <Nav /></div> 

      <div className='feed'> <Feed /></div> 

      <div className='suggestion'><Suggestion /></div>

    </div>
  )
}

export default Home