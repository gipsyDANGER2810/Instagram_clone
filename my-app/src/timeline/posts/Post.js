import React, { useEffect, useState } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';



function Post(props) {

    const [postData, setPostData] = useState();

    const handleButtonClick = () => {
        // Assuming your API endpoint is "/api/posts" and you're making a GET request
        fetch('http://localhost:5000/instagram')
            .then(response => response.json())
            .then(data => setPostData(data))
            .catch(error => console.error('Error fetching data:', error));
    };
    return (
        <>

            <div className='post'>
                <div className="post__header">
                    <div className="post__header__author">
                        <Avatar>{props.user.charAt(0).toUpperCase()}</Avatar>
                       
                        <button onClick={handleButtonClick}>{props.user} • </button>
                        <span>{props.timestamp}</span>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="post__image">

                    <img src={props.postImage} alt="" />

                    <div className="post__footer__icons">
                        <div className="post__icons_main">
                            <FavoriteBorderIcon className='post__icon' />
                            <ChatBubbleOutlineRoundedIcon className='post__icon' />
                            <TelegramIcon className='post__icon' />
                        </div>
                        <div className="post__icons__save">
                            <BookmarkBorderIcon className='post__icon' />
                        </div>
                    </div>
                    Liked by 21 people
                </div>
            </div>
        </>

    )
}

export default Post
