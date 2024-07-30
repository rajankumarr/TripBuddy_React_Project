import React, { useState } from 'react'
import '../Hero/Hero.css'
import tripbanner from '../../assets/tripbanner.png'
import bannerimg from '../../assets/bannerimg.jpg'
import AddIcon from '@mui/icons-material/Add';
import Popup from '../PopupPage/Popup';

function Hero() {
  const [showPopup, setShowPopup]=useState(false);
  return (
    <div className='add-trip'>
    <div className="banner">
        <img src={tripbanner} alt="banner" className='banner-img' />
    </div>

    <div className="add-button">
      <p>Discover Your Next Adventure</p>
      <div className="button" onClick={()=>setShowPopup(true)}><AddIcon/>Add New Trip</div>
    </div>

   {showPopup && <div className="popup-page">
    <Popup onClose={()=>setShowPopup(false)}/>
    </div>}
      
    </div>
  )
}

export default Hero
