import React, { useContext, memo } from "react";
import "./travel.css";
import { Link, NavLink, useParams } from "react-router-dom";
import SectionCard from "../sectionCard/SectionCard";

function Travel() {
  return (
    <div className="travel">
      <div className="container">
        <h1 className="travel_title">sayohat</h1>
        <SectionCard />
      </div>
    </div>
  );
}

export default memo(Travel);
