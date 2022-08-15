import React from 'react'
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai'
import youtube from '../../assets/youtube.svg'
import {MdSlowMotionVideo, MdOutlineSubscriptions, MdOutlineExplore, MdOutlineVideoLibrary} from 'react-icons/md'
import {VscHistory} from 'react-icons/vsc'
import {RiVideoLine} from 'react-icons/ri'
import './SideNav.scss'
const SideNav = ({open, setOpenNav}) => {
  return (
    <nav className='mob-side-menu' >
      <div className='mob-menu-header'>
      <div onClick={()=>setOpenNav(false)}><AiOutlineMenu /></div>
      <div><img src={youtube} alt="youtube"/></div>
      </div>
        <ul>
        <li><AiFillHome />Home</li>
        <li><MdOutlineExplore/>Explore</li>
        <li><MdSlowMotionVideo/>Shorts</li>
        <li><MdOutlineSubscriptions />Suscriptions</li>
        </ul>
        <ul>
        <li><MdOutlineVideoLibrary/>Library</li>
        <li><VscHistory />History</li>
        <li><RiVideoLine />Your Videos</li>
        </ul>
        <ul>
          <li>SUBSCRIPTIONS</li>
        <li>JavaScript Mastery</li>
        <li>Dev Ed</li>
        <li>CS50</li>
        </ul>
        <ul>
        <li>Explore</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Sports</li>
        </ul>
        <ul>
        <li>MORE FROM YOUTUBE  </li>
        <li>Creator Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
        
        </ul>

        <ul>
        <li>Settings </li>
        <li>report History</li>
        <li>Help</li>
        <li>Send Feedback</li>
        
        </ul>
        <p></p>
    </nav>
  )
}

export default SideNav