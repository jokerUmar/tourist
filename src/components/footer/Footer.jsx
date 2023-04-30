import React from 'react'
import "./footer.css"
import payme from "../../assets/images/payme.png"
import click from "../../assets/images/click.png"
import uzum from "../../assets/images/uzum.png"
import logotip from "../../assets/images/logotip-img.png"
import { Link } from 'react-router-dom'

function Footer() {
return (
<div className='footer'>
    <div className="container">
        <div className="left-box">

            <div className="about">
                <h1>Biz haqimizda</h1>
                <p>Toshkent shahar, Yashnobod tumani, Fidoyilar MFY, 22-xarbiy shaharcha 26-15 honadon</p>
                <p>+99899 858-48-26</p>
                <p>utourist@yandex.com</p>
            </div>
            <div className="section">
                <h1>Bo’limlar</h1>
                <Link className='footer-link' to="/about">biz haqimizda</Link>
                <Link className='footer-link' to="/services">Xizmatlar</Link>
                <Link className='footer-link' to="/travel">Sayohatlar</Link>
                <Link className='footer-link' to="/faq">Hamkorlar</Link>
                <Link className='footer-link' to="/contact">Bog’lanish</Link>
            </div>

        </div>
        <div className="right-box">

            <div className="pay-type">
                <h1>To’lov turlari</h1>
                <img width="80px" src={payme} />
                <img width="80px" src={click} />
                <img width="80px" src={uzum} />
            </div>

            <div className="logo-box">
                <img src={logotip} alt="" />
                <p className='logo-box_text'>birga dunyoni ko'ramiz</p>
            </div>
        </div>
    </div>
</div>
)
}

export default Footer