import React from 'react'
import '../cards/Card.css'

function Upcomingtripcard(props) {
  
  
  return (
    <div className='trip-details'>
    <div className="para">
    <p>{props.title}</p>
    </div>
      <div className="status" >
        <p>{props.status}</p>
      </div>
    </div>
  )
}

export default Upcomingtripcard
