import React from "react";
import Flights from "../component/Flights";
import FlightsFilter from "../component/FlightsFilter";
import Weather from "../component/Weather";
import "./FlightsPage.css";

function FlightsPage(props) {
  return (
    <div className="flightspage-container">
      <Weather />
      <div>
        <h1>Flights page</h1>
        <Flights className="flight-container" />
      </div>
      <FlightsFilter className="flight-filter-container" />
    </div>
  );
}

export default FlightsPage;
