import React from 'react'
import {AiOutlineSearch, AiOutlineArrowLeft} from 'react-icons/ai'
import {BiMicrophone} from 'react-icons/bi'
import './Search.scss'

const Search = ({show, handleClose}) => {
  return (
    <div className='search'>
        <div className='flex-item' style={{fontSize: "24px"}}><AiOutlineArrowLeft onClick={handleClose} /></div>
        <form className='flex-item' >
        <div className='search-icon'><AiOutlineSearch  /></div>
        <input placeholder='Search' />
        <button style={{fontSize: "24px", }}><AiOutlineSearch /></button>
       </form>
       <div className='flex-item' style={{fontSize: "24px"}}><BiMicrophone  /></div>
    </div>
  )
}

export default Search