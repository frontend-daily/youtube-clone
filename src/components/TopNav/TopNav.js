import React from 'react'
import youtube from "../../assets/youtube.svg"
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMicrophone,BiVideoPlus} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import "./TopNav.scss"



const TopNav = () => {
  return (
      <nav className='top-nav'>
      <ul>
        <li><img className='logo' src={youtube} alt="youtube icon"/></li>
        <li><AiOutlineSearch/></li>
        <li><BiMicrophone/></li>
        <li><BiVideoPlus/></li>
        <li><IoMdNotificationsOutline/></li>
        <li><FaUserCircle/></li>
      </ul>
      </nav>
   
  )
}

export default TopNav