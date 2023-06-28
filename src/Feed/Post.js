import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

function Post() {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='header__left'>
          <Avatar />
          <h6>test</h6>
          <span>• 1h</span>
        </div>
          <button><MoreHorizIcon /></button>
      </div>


      <div className='post__img'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
      </div>


      <div className='post__footer'>
        <div className='footer__left'>
        <button><FavoriteBorderIcon /></button>
        <button><ChatBubbleOutlineIcon /></button>
        </div>
        <button className='save'><TurnedInNotIcon /></button>

      </div>
      <span>Liked by 100</span>
    </div>
  )
}

export default Post