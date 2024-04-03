import React from 'react'
import "./Sidenav.css"
import image from './images.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Avatar } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Sidenav() {

  // const history = useNavigate()
  const profile = () => {
    // history("/profile")

  }

  return (
    <div className='sidenav'>
      <img className="sidenav__logo" src={image} alt="" />
      <div className="sidenav__buttons">
      <NavLink className="NavLink" to="/">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        </NavLink>

        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>

        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>

        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>

        <NavLink className="NavLink" to="/profile">
          <button onClick={profile} className="sidenav__button">
            <Avatar>S</Avatar>
            <span>Swapnil</span>
          </button>
        </NavLink>

      </div>

      <div className="sidenav__more">
        <button className='sidenav__button'>
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default Sidenav
