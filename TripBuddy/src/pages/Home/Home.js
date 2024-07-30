import React from 'react'
import '../Home/Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Upcomingtripcard from '../../components/cards/Upcomingtripcard'
import Pasttrips from '../../components/cards/Pasttrips'
import Goa from '../../assets/Goa.jpg'
import kerala from '../../assets/kerala.jpg'
import ooty from '../../assets/ooty.jpg'
import trekking from '../../assets/trekking.jpg'
import roadtrip from '../../assets/roadtrip.jpg'

import Footer from '../../components/Footer/Footer'
import trip_memories from '../../assets/image.js'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  
  return (
    <div className='home'>

      <div className="navbar">
        <Navbar/>

      </div>
      <div className="hero">
        <Hero/>

      </div>

      <div className="next-trip-details">
        <div className="upcoming-trip">
          <p>Upcoming Trip</p>
        </div>
        <div className="bookings">
        <Upcomingtripcard title={"Stay"} status={"Booked"} />
        <Upcomingtripcard title={"Travel"} status={"Booked"} />
        <Upcomingtripcard title={"Places to Visit"} status={" Not Booked"}/>
        <Upcomingtripcard title={"Activities"} status={"Not Booked"}/>
        </div>
      </div>

      <div className="trip-clicks">
        <div className="last-trip"><p>Last Trip Photos Link</p></div>
        <div className="drive-link">
        <button className='link-button'>
        <a id="link" href="https://drive.google.com/file/d/13wbBZuCZoZYjRINKvz-6WDIpaAID8BDS/view?usp=drive_link">Click Here to Access the Link !</a>
        </button>
        
        </div>
        <div className="message">
        <p>*Last trip all photoes uploaded in this drive link, Please upload photoes from your device if any.</p>
        </div>
      </div>

      <div className="past-trips-details">
        <div className="past-trips"><p>2023 Trips</p></div>
        <div className="trips">
          <Pasttrips name={"Goa"} src={Goa} />
          <Pasttrips name={"Ooty"} src={ooty} />
          <Pasttrips name={"Trekking"} src={trekking} />
          <Pasttrips name={"Kerala"} src={kerala} />
          <Pasttrips name={"Road Trips"} src={roadtrip} />


        </div>
      </div>

      <div className="memories">
        <div className="trip-memories">
          <p>Trip Memories</p>
        </div>
        {/* <div className="memories-wrap"> */}
            {/* <div className="backarrow">
           
            <ArrowBackIosIcon fontSize='large' /> 

            </div> */}

            <div className="memories-image">
            
            <Slider {...settings}>
                {trip_memories.map((img,index)=>{
                  return <div className="image-list" key={index}>
                    <img src={img.image} alt="image" />
                    <p>{img.name}</p>
                  </div>

                })} 
          
                </Slider>
            </div>

          {/* <div className="forarrow">
            <ArrowForwardIosIcon fontSize='large' />
            </div> */}
          {/* </div> */}
            
      </div>
      <div className="footer-content">
        <Footer/>

      </div>
    </div>
  )
}

export default Home
