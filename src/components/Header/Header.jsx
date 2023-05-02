import React, { useContext, useState } from "react";
import "./header.css";
import logotip from "../../assets/images/logotip-img.png";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faBars,
  faHouse,
  faPlane,
  faTaxi,
  faXmark,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import { BarsContext } from "../context/barsContext";
import { DataContext } from "../context/DataContext";
import { MouseMOveContext } from "../context/MouseMoveContext";

function Header() {
  let { bars, setBars } = useContext(BarsContext);
  let { moveMouse, setMoveMouse } = useContext(MouseMOveContext);

  function handleMove() {
    setMoveMouse(true);
  }
  function handleLeave() {
    setMoveMouse(false);
  }

  return (
    <header className="header">
      <div className="container header">
        <img src={logotip} width={140} alt="" />

        <ul
          className="header-list"
          style={
            bars
              ? {
                  display: "flex",
                  transform: "translate(0px)",
                  transition: "0.3s",
                }
              : { transform: "translate(-200px)", transition: "0.3s" }
          }
        >
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
                transition: "0.1s",
              };
            }}
            className={`header_item header_item2 is_active `}
          >
            <FontAwesomeIcon icon={faHouse} />
            <p>Bosh sahifa</p>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
                transition: "0.1s",
              };
            }}
            to="/about"
            className={`header_item header_item2}`}
          >
            <FontAwesomeIcon icon={faAddressCard} />
            <p>Biz haqimizda</p>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
                transition: "0.1s",
              };
            }}
            to="/services"
            className={`header_item header_item3}`}
          >
            <FontAwesomeIcon icon={faTaxi} />
            <p>Xizmatlar</p>
          </NavLink>

          <NavLink
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            to="/travel"
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
                transition: "0.1s",
              };
            }}
            className={`header_item header_item4 }`}
          >
            <FontAwesomeIcon icon={faPlane} />
            <p>Sayohatlar</p>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
              };
            }}
            to="/contact"
            className={`header_item header_item5}`}
          >
            <FontAwesomeIcon icon={faAddressBook} />
            <p>Bog'lanish</p>
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                transform: isActive ? "scale(1.1)" : "",
                backgroundColor: isActive ? "#FF4E00" : "",
                borderRadius: isActive ? "5px" : "",
              };  
            }}
            to="/market"
            className={`header_item header_item6}`}
          >
            <FontAwesomeIcon style={{width:"80px"}} icon={faCartShopping} />
            <p>Savat</p>
          </NavLink>


          <div className="header_item box">
            <select>
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
              <option value="en">English</option>
            </select>
          </div>
        </ul>

        <span className="bars-box" onClick={() => setBars(!bars)}>
          {!bars ? (
            <FontAwesomeIcon style={{ fontSize: "28px" }} icon={faBars} />
          ) : (
            <FontAwesomeIcon style={{ fontSize: "28px" }} icon={faXmark} />
          )}
        </span>
      </div>
    </header>
  );
}

export default Header;
