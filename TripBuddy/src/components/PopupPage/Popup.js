import React, { useRef } from 'react'
import '../PopupPage/Popup.css'
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Popup({onClose}) {
    const popupRef=useRef();
    const closePopup=(e)=>{
        if(popupRef.current===e.target){
            onClose();
        }
    }
  return (
    <div className='popup' ref={popupRef} onClick={closePopup}>
    

        <button className='close-btn' onClick={onClose}> <CloseIcon/></button>
    

    <div className="popup-content">
        <div className="heading">
        <p>Create New Trip</p>
        </div>
    
    <div className="newtrip-details">
    <form action="">
        <div className="date" >
            <label htmlFor="">Select Date</label><br />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
        </div>
        <div className="other-details">
        <label htmlFor="">Trip Name</label><br />
        <input type="text" /><br />
        
        <label htmlFor="">Description</label><br />
        <input type="text" />
        <div className="members-details">
            <p>Add Members</p>
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />

        <button className='add-btn'>Add</button>
        </div>
        <button type='submit' value="Submit">Save Trip</button>
        </div>
        
    </form>
        
    </div>
    </div>
    </div>
  )
}

export default Popup
