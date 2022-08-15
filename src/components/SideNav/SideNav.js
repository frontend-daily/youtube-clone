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
        <div>
          <ul>
            <li><a href='#'><AiFillHome />Home</a></li>
            <li><a href='#'><MdOutlineExplore/>Explore</a></li>
            <li><a href='#'><MdSlowMotionVideo/>Shorts</a></li>
            <li><a href='#'><MdOutlineSubscriptions />Suscriptions</a></li>
          </ul>

        </div>
        <div>
          <ul>
            <li><a href='#'><MdOutlineVideoLibrary/>Library</a></li>
            <li><a href='#'><VscHistory />History </a></li>
            <li><a href='#'><RiVideoLine />Your Videos</a></li>
          </ul>
        </div>

        <div>
          <span>SUBSCRIPTIONS</span>
          <ul>  
            <li><a href='#'>JavaScript Mastery</a></li>
            <li><a href='#'>Dev Ed</a></li>
            <li><a href='#'>CS50</a></li>
          </ul>
        </div>
        
        <div>
          <ul>
            <li><a href='#'>Explore</a></li>
            <li><a href='#'>Movies</a></li>
            <li><a href='#'>Gaming</a></li>
            <li><a href='#'> Sports</a></li>
          </ul>
        </div>
        
        <div>
          <span>MORE FROM YOUTUBE </span>
          <ul>
            <li><a href='#'>Creator Studio</a></li>
            <li><a href='#'>Youtube Music</a></li>
            <li><a href="#">Youtube Kids</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li><a href='#'>Settings</a></li>
            <li><a href='#'>Report History</a></li>
            <li><a href="#">Help</a></li>
            <li><a href='#'>Send Feedback</a></li>
          </ul>
        </div>
        <div>
          <div>
            <a href='#'>

            </a>
          </div>
        </div>
    </nav>
  )
}

export default SideNav