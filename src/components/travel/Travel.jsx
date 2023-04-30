import React,{useContext} from "react";
import "./travel.css";
import { Link, NavLink, useParams } from "react-router-dom";
import SectionCard from "../sectionCard/SectionCard";
import { MouseMOveContext } from "../context/MouseMoveContext";

function Travel() {

  let {moveMouse,setMoveMouse} = useContext(MouseMOveContext)

  
  function handleMove() {
    setMoveMouse(true)
}
function handleLeave() {
    setMoveMouse(false)
}


  return (
    <div className="travel">
      <div className="container">

        <h1 className="travel_title">sayohat</h1>

        <div onMouseMove={handleMove} onMouseLeave={handleLeave} className="travel-box" style={moveMouse ? {display:'block'} : {display: "none  "} }>
          <NavLink to={"/travel/foreign"} className={"travel-foreign"}>
            <p>chet-elga sayohat</p>
          </NavLink>
          <NavLink to={"/travel/uzbekistan"} className={"travel-uzb"}>
            <p>o'zbekiston bo'ylab sayohat</p>
          </NavLink>
        </div>

      <SectionCard/>

      </div>
    </div>
  );
}

export default Travel;
