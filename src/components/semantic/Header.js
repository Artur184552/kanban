import React, { useState } from "react";
import Avatar from '../../profile/Avatar'

function Header() {

  const [isProfileActive, setIsProfileActive] = useState(false)

    return(
      <header>
        <div className='header-title'>Awesome Kanban Board</div>
        <div className='profile'>
          <div onClick={() => setIsProfileActive(!isProfileActive)} className='avatar'><Avatar /></div>
          
          <div className='active-profile-manager'>

            <svg onClick={() => setIsProfileActive(true)} className={isProfileActive ? 'disabled' : 'vector'}
            width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z" fill="white"/>
            </svg>

            <svg onClick={() => setIsProfileActive(false)} className={isProfileActive ? 'vector' : 'disabled'} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.415 7.79001L6 3.20501L10.585 7.79001L12 6.37501L6 0.375008L0 6.37501L1.415 7.79001Z" fill="white"/>
            </svg>

          </div>

        </div>




        <div className={isProfileActive ? 'hiden-select' : 'disabled'}>

          <div className="select-triangle" />

          <div className="active-profile-select-list">
            <div className="select-profile">Profile</div>
            <div className="select-log-out">Log Out</div>
          </div>
        </div>

      </header>
    )
}

export default Header;