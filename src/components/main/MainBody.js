import React from 'react'
import Body from '../Body/Body'
import SideNav from '../SideNav/SideNav'
import './MainBody.scss'
const MainBody = () => {
  return (
    <div className='main-body-wrapper'>
        <SideNav />
        <Body />
    </div>
  )
}

export default MainBody