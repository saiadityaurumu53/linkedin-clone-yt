import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem' >
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>

        </div>
    )


  return (
    <div className='sidebar'>
        
        <div className='sidebar__top'>
            <img src='https://wallpapers.com/images/hd/technology-linkedin-background-dce01jsbpnn0z2ej.jpg' alt='' />
            <Avatar className='sidebar__avatar' />
            <h2>Sai Aditya Urumu</h2>
            <h4>surumu@asu.edu</h4>
        </div>

        <div className='sidebar__stats'>

            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">143</p>
            </div>

            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>881</p>
            </div>

        </div>



        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}

        </div>


    </div>
  )
}

export default Sidebar;
