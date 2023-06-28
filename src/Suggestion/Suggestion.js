import { Avatar } from '@mui/material'
import React from 'react'
import './Suggestion.css'

function Suggestion() {
  return (
    <div className='sugge'>
      <h3>Suggested for you</h3>
      
      <div className='recommended'>
      <div className='person'>
        <Avatar /> 

        <div className='username'>
          <span>test</span> 
          <span className='recommended__from'>Instagram recommended</span>
        </div>

      </div>
      <button className='follow'>Follow</button>
      </div>

      <div className='recommended'>
      <div className='person'>
        <Avatar /> 

        <div className='username'>
          <span>test</span> 
          <span className='recommended__from'>Instagram recommended</span>
        </div>

      </div>
      <button className='follow'>Follow</button>
      </div>

      <div className='recommended'>
      <div className='person'>
        <Avatar /> 

        <div className='username'>
          <span>test</span> 
          <span className='recommended__from'>Instagram recommended</span>
        </div>

      </div>
      <button className='follow'>Follow</button>
      </div>

    </div>
  )
}

export default Suggestion