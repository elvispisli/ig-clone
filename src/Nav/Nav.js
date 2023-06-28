import React from 'react'
import './Nav.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QueueIcon from '@mui/icons-material/Queue';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';



function Nav() {
  return (
    <div className='sidenav'>
       <div className='nav__buttons'>

       <div className='nav__logo'>
         <h1>Instagram</h1>
        </div>
        <button className='nav__button'>
            <HomeIcon />
            <span>Home</span>
        </button>

        <button className='nav__button'>
            <SearchIcon />
            <span>Search</span>
        </button>

        <button className='nav__button'>
            <ExploreIcon />
            <span>Explore</span>
        </button>

        <button className='nav__button'>
            <SlideshowIcon />
            <span>Reels</span>
        </button>

        <button className='nav__button'>
            <ChatIcon />
            <span>Messages</span>
        </button>

        <button className='nav__button'>
            <FavoriteBorderIcon />
            <span>Notification</span>
        </button>

        <button className='nav__button'>
            <QueueIcon />
            <span>Create</span>
        </button>
       </div>
        <div className='nav__more'>
       <button className='nav__button'>
            <MenuIcon />
            <span>More</span>
        </button> 
        </div>
            
    </div>
  )
}

export default Nav