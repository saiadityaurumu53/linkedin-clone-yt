import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className='header'>

      <div className='header__left'>

            <img src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            <div className='header__search'>
                <SearchIcon/>
                <input type='text' />

            </div>

      </div>

      <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f039a2ca-c6a4-42ce-99b0-bb1ef8f68171/d6qhoyt-75afb918-5aae-491d-ac9c-53d72db5efe8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwMzlhMmNhLWM2YTQtNDJjZS05OWIwLWJiMWVmOGY2ODE3MVwvZDZxaG95dC03NWFmYjkxOC01YWFlLTQ5MWQtYWM5Yy01M2Q3MmRiNWVmZTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h4Ys2azsVa82wodttf_uOiIx5935aEEO9b0r4Z1byq8" title='me' />
        

      </div>





    </div>
  )
}

export default Header
