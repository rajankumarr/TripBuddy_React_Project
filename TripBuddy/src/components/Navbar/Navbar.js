import React from 'react'
import triplogo from '../../assets/triplogo.png'
import '../Navbar/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function Navbar() {
  return (
    <div className='navbar'>
    <img className='logo' src={triplogo} alt="tripbuddy" />
    <div className="trip-search">
      <SearchIcon className='search-icon' />
      <input type="text" placeholder='Input Place to Explore' className='search-input' />
      <MicIcon className='search-icon' />
    </div>
      <ul>
        <li>Explore</li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </div>
  )
}

export default Navbar
