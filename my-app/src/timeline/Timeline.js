import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'
import Story from './Story'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user:"Swapnil",
      postImage:"https://imgur.com/4jY7dC6.jpg",
      likes: 12,
      timestamp: "2d"
    },

    {
      user:"Aayushi",
      postImage:"https://preview.redd.it/shinobu-coloring-v0-un50pgzh07qb1.jpg?auto=webp&s=619502a7191b4cfa76397189b794a6eda1b19fd4",
      likes: 12,
      timestamp: "2d"
    },
    {
      user:"Larissa",
      postImage:"https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1dd3fd2f-b45d-447a-34b0-80419528db00/width=1200/1dd3fd2f-b45d-447a-34b0-80419528db00.jpeg",
      likes: 12,
      timestamp: "2d"
    },
  ])
  return (
    <>
    <Story/>
    <div className='timeline'>
   
      <div className="timeline__left">
        {posts.map(post =>(
          <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp = {post.timestamp} />
        ))}
      </div>
      <div className="timeline__right">
      <Suggestions/>
      </div>
    </div>
    </>
  )
}

export default Timeline
