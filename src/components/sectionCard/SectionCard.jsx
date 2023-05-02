import React from "react";
import "./section-card.css";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ArrayDataContext } from "../context/ArrayDataContext";

function SectionCard() {
  let { data } = useContext(DataContext);
  let { arrayData, setArrayData } = useContext(ArrayDataContext);

  function handleMarket(e) {
    if (!arrayData.includes(e)) {
      setArrayData([...arrayData, e]);
    }
  }


  return (
    <div className="cards">
      <div className="container">
        <section className="card_section">
          {
          data.map((element) => {
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
                  <p className="card_cost">{element.cost_str} UZS</p>
                  <div className="flex-row">
                    <button
                      className="card_btn"
                      onClick={() => handleMarket(element)}
                    >
                      Savatchaga Qoshish
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default SectionCard;
