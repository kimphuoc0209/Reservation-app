import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/120941786.jpg?k=20e8175989bd0e83e8f91ce56f65a48bb324d41525de6075183dd19d0586521f&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/123589344.jpg?k=7fb96dfefb0019684fcde5ad0044e1621af28b04048b5a8d7cc95b0ad61a9df3&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/123589348.jpg?k=a84da47d3f3b9eb200248f62673177bfaac896e8078922019dea8d9011d35b4f&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/120941791.jpg?k=2acf56a2c8d1b5792c0e474a5c309ab9f1ce515278f7a935dd758516d9acfed0&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/120941801.jpg?k=a029a992431d900b94443f6d015c682a9bc125c0d2cb1a7d49a0832a6f52f5de&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/123589354.jpg?k=4ab29ff218334100f637d64427a070f9eb356c4f4ab85c9e935aa8146382fdf4&o=&hp=1"
    }
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">A&EM Art Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>31-33-35 Le Anh Xuan Street, Ben Thanh Ward, District 1, Ho Chi Minh City</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}

          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Ho Chi Minh City</h1>
              <p className="hotelDesc">
                All modern units are complete in elegant cream shade with a hint of light brown from the wooden furnishings and feature air conditioning. Private bathroom are decorated with a honed stone finish and fitted with either a stand-alone bathtub or walk-in shower.
                Guests can indulge in relaxing massages at Violet Spa. Staff at the 24-hour front desk can assist you with an array of services, including luggage storage, airport transfer and shuttle service.
                Daily buffet breakfast is served at the hotel's restaurant.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                A&EM Art Hotel offers a range of rooms and suites in District 1 in Ho Chi Minh City
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      i
    </div>
  )
}

export default Hotel