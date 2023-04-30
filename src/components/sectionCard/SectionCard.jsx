import React from 'react'
import "./section-card.css"
import { DataContext } from "../context/DataContext";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';


function SectionCard() {

    let { data } = useContext(DataContext);


  return (
    <div className='cards'>
        <div className="container">
        <section className="card_section">
          {data.map((element) => {
            return (
              <div key={element.title} className="card-container">
                <NavLink to="/xorijga-sayohat" className="hero-image-container">
                  <img
                    className="hero-image"
                    src={element.img}
                    alt="Spinning glass cube"
                  />
                </NavLink>
                <div className="main-content">
                  <p style={{ color: "white", fontSize: "16px" }}>
                    Xorijga sayohat
                  </p>
                  <p className="card__title">{element.title}ga sayohat</p>
                  <p className="card_cost">{element.cost_str}</p>
                  <div className="flex-row">
                    <button className="card_btn">Savatchaga Qoshish</button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        </div>
    </div>
  )
}

export default SectionCard