import React from 'react'
import './Bio.css'
import { Avatar } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

function Bio() {
    return (
        <div className='bio'>

            <div className="bio__info">
                <div className="bio__info__left">
                    <Avatar className='bio__avatar'>S</Avatar>
                </div>
                <div className="bio__info__right">
                    <div className="bio__info__right__header">
                        <div className="header__buttons">

                        <span className='bio__username'>Swapnil</span>
                            <button className='header__button'>
                                Edit Profile
                            </button>
                            <button className='header__button'>
                                View Archive
                            </button>
                            <button className='header__button'>
                                <SettingsIcon />
                            </button>
                        </div>
                        <div className="header__following">
                            <span>64 posts</span>
                            <button className='followers'>439 followers</button>
                            <button className='following'>681 following</button>
                        </div>
                        <div className="bio__header__right__info">
                            <span>Swapnil</span>
                            <span className='bio__about'>Properly yeehawing since 1998. <br/> 
                                I might look like I’m doing nothing, but in my head, I’m quite busy.<br/> 
                                Anime addict. <br/>
                                Tatakae.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bio__posts">
                <div className="bio__post__header">
                    <button className='post__header__button'>POSTS</button>
                    <button className='post__header__button'>SAVED</button>
                    <button className='post__header__button'>TAGGED</button>
                </div>
                <div className="bio__post__content">
                    
                    <img src='https://www.superherotoystore.com/cdn/shop/articles/e33c2fa94c03efa06678116f80d62d0d_600x.jpg?v=1590599656' alt=''/> 
                    <img src='https://www.superherotoystore.com/cdn/shop/articles/e33c2fa94c03efa06678116f80d62d0d_600x.jpg?v=1590599656' alt=''/>
                    <img src='https://www.superherotoystore.com/cdn/shop/articles/e33c2fa94c03efa06678116f80d62d0d_600x.jpg?v=1590599656' alt=''/>
                    <img src='https://www.superherotoystore.com/cdn/shop/articles/e33c2fa94c03efa06678116f80d62d0d_600x.jpg?v=1590599656' alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Bio
