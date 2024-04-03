import React from 'react'
import './Profile.css'
import Sidenav from '../navigation/Sidenav'
import Bio from './Bio'


function Profile() {
  return (

    <div className='profile'>
      <div className="profile__nav">
        <Sidenav></Sidenav>
      </div>
      <div className="profile__bio">
        <Bio />
      </div>

      {/* <div className="ID">

        <div className="profile__info">
          <div className="profile__pic">
            <Avatar className='av'>S</Avatar>
          </div>
          <div className="profile__bio">
            <div className="profile__header">
              <span className='username'>Swapnil</span>
              <div className="profile__header__button">

                  <button className="profile__header__buttons">Edit Profile</button>


                  <button className="profile__header__buttons">View Archive</button>

              </div>
            </div>
          </div>
        </div>
        <div className="profile__posts">

        </div>
      </div> */}

    </div>

  )
}

export default Profile
