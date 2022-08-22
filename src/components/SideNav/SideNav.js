import React from 'react'
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai'
import youtube from '../../assets/youtube.svg'
import {MdSlowMotionVideo, MdOutlineSubscriptions, MdOutlineExplore, MdOutlineVideoLibrary} from 'react-icons/md'
import {VscHistory} from 'react-icons/vsc'
import {GiFilmStrip} from 'react-icons/gi'
import {GrHomeRounded} from 'react-icons/gr'
import {SiYoutubegaming} from 'react-icons/si'
import {RiVideoLine} from 'react-icons/ri'
import './SideNav.scss'
import user from "../../assets/user.png"



const SideNav = ({open, setOpenNav}) => {
  return (
    <nav className={`mob-side-menu ${open ? 'open-nav':''} ` } id={`$`} >
      <div className='mob-menu-header'>
      <div onClick={()=>setOpenNav(false)}><AiOutlineMenu /></div>
      <div><img src={youtube} alt="youtube"/></div>
      </div>
        <div  className="sidebar-contianer">
          <ul>
            <li>
              <a href='#'>
               <span className='icon'><AiOutlineHome /></span>
               <span className='text'>Home</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'><MdOutlineExplore/></span>
               <span className='text'>Explore</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'><MdSlowMotionVideo /></span>
               <span className='text'>Shorts</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'><MdOutlineSubscriptions /></span>
               <span className='text'>Suscriptions</span>
              </a>
            </li>
          </ul>

        </div>
        <div  className="sidebar-contianer">
          <ul>
            <li>
              <a href='#'>
                <span className='icon'><MdOutlineVideoLibrary/></span>
                <span>Library</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='icon'><VscHistory /></span>
                <span className='text'>History</span> 
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='icon'><RiVideoLine /></span>
                <span className='text'>Your Videos</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-contianer">
          <span className='sidebar-title'>SUBSCRIPTIONS</span>
          <ul>  
            <li>
              <a href='#'>
               <span className='text-icon'>
                 <img src={user} alt='user' />
                </span>
               <span className='text'>JavaScript Mastery</span>
              </a>
            </li>
            <li>
              <a href='#'>
              <span className='text-icon'>
                 <img src={user} alt='user' />
                </span>
               <span className='text'>Dev Ed</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='text-icon'>
                 <img src={user} alt='user' />
                </span>
               <span className='text'>CS50</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div  className="sidebar-contianer">
        <span className='sidebar-title'>Explore</span>
          <ul>
            <li>
              <a href='#'>
               <span className='icon'><GiFilmStrip/></span>
               <span className='text'>Movies</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'>
                <SiYoutubegaming/>
               </span>
               <span className='text'>Gaming</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'></span>
               <span className='text'>Sports</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div  className="sidebar-contianer">
          <span className='sidebar-title'>MORE FROM YOUTUBE </span>
          <ul>
            <li>
              <a href='#'>
               <span className='icon'></span>
               <span className='text'>Creator Studio</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'></span>
               <span className='text'>Youtube Music</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'></span>
               <span className='text'>Youtube Kids</span>
              </a>
            </li>
    
          </ul>
        </div>

        <div  className="sidebar-contianer">
          <ul>
            <li>
              <a href='#'>
               <span className='icon'></span>
               <span className='text'>Settings</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'></span>
               <span className='text'>Report History</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'></span>
               <span className='text'>Help</span>
              </a>
            </li>
            <li>
              <a href='#'>
               <span className='icon'></span>
               <span className='text'>Send Feedback</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='links-container'>
          <div className='link-row'>
            <a href='#'>
                About
            </a>
            <a href='#'>
                Press
            </a>
            <a href='#'>
                Copyright
            </a>
          </div>
          <div className='link-row'>
            <a href='#'>
                Contact us
            </a>
            <a href='#'>
                Creators
            </a>
          </div>
          <div className='link-row'>
            <a href='#'>
                Advertise
            </a>
            <a href='#'>
                Developers
            </a>
          </div>
        </div>

        <div className='links-container'>
          <div className='link-row'>
            <a href='#'>
                About
            </a>
            <a href='#'>
                Press
            </a>
            <a href='#'>
                Copyright
            </a>
          </div>
          <div className='link-row'>
            <a href='#'>
                Contact us
            </a>
            <a href='#'>
                Creators
            </a>
          </div>
          <div className='link-row'>
            <a href='#'>
                Advertise
            </a>
            <a href='#'>
                Developers
            </a>
          </div>
        </div>

        <div className='links-container'>
          <span className='copyright'>© 2022 Google LLC</span>
        </div>

        
    </nav>
  )
}

export default SideNav