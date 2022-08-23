import React, { useState } from 'react'
import youtube from "../../assets/youtube.svg"
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMicrophone,BiVideoPlus} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import "./TopNav.scss"
import Search from '../search/Search'
import { AiOutlineMenu } from 'react-icons/ai'
import SideNav from '../SideNav/SideNav'

const TopNav = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const handleOpenSearch = () => {
    setShowSearch(true)
  }

  const handleCloseSearch = () => {
    setShowSearch(false)
  }

  return (
      showSearch ? 
      <Search show={showSearch} handleClose={handleCloseSearch} /> :
     <div>
      {/* {openNav ? <SideNav setOpenNav={setOpenNav}/> : null} */}
      <nav className='top-nav'>  
      <ul>
        <li><AiOutlineMenu onClick={()=> setOpenNav(true)} /></li>
        <li><img className='logo' src={youtube} alt="youtube icon"/></li>
        <li onClick={handleOpenSearch}><AiOutlineSearch/></li>
        <li><BiMicrophone/></li>
        <li><BiVideoPlus/></li>
        <li><IoMdNotificationsOutline/></li>
        <li><FaUserCircle/></li>
      </ul>
      </nav>
     </div>
   
   
  )
}

export default TopNav