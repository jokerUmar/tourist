import React from 'react'
import "./services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap ,  faHotTub , faPassport , faCar,faPeopleArrows,faHamburger,faHotel,faFile } from '@fortawesome/free-solid-svg-icons'

function Services() {
  return (
  <>
    <div className='services'>
      <div className="container">
        <h1 className='service__title'>Xizmatlar</h1>

        <div className="service-box">
          
          <div className="service_article first-child">
            <FontAwesomeIcon className='service_icon' icon={faMap} />
            <p>Sayohatni tashkil etish</p>
          </div>    
          <div className="service_article">
            <FontAwesomeIcon className='service_icon' icon={faHotTub} />
            <p>Mehmonni kutib olish va kuzatish</p>
          </div>    
          <div className="service_article">
            <FontAwesomeIcon className='service_icon' icon={faPassport} />
            <p>Viza olishga ko‘mak</p>
          </div>    
          <div className="service_article">
            <FontAwesomeIcon className='service_icon' icon={faCar} />
            <p>Rent car (avtomobil ijarasi)</p>
          </div>    
          <div className="service_article">
            <FontAwesomeIcon className='service_icon' icon={faPeopleArrows} />
            <p>Gid yo‘riqchi bilan ta’minlash</p>
          </div>    
          <div className="service_article">
            <FontAwesomeIcon className='service_icon' icon={faHamburger} />
            <p>Ovqatlanishni tashkil etish</p>
          </div>    
          <div className="service_article">
            <FontAwesomeIcon className='service_icon' icon={faHotel} />
            <p>Mehmonxonaga joylashtirish va band qilish</p>
          </div>    
          <div className="service_article">
            <FontAwesomeIcon className='service_icon' icon={faFile} />
            <p>Transport bilan ta’minlash va boshqa xizmatlar</p>
          </div>    

        </div>

      </div>
    </div>
  </>
  )
}

export default Services