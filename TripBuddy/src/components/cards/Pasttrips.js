import '../cards/Card.css'

import React from 'react'

function Pasttrips(props) {
  return (
    <div className='trip'>
    <img src={props.src} alt="trip" className='past-trip-img' />
    <p>{props.name}</p>
      
    </div>
  )
}

export default Pasttrips
