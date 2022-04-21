import React, { useEffect, useState } from "react";
import "./FlightsFilter.css";
import FlightsChart from "./FlightsChart";
import Checkbox from "./Checkbox";

function FlightsFilter(props) {
  const filterType = new Set(props.activeFilter.map((item) => item.type));

  useEffect(() => {
    console.log("Use effect started");
    console.log(filterType);
  }, []);

  return (
    <>
      <FlightsChart flightData={props.flightData} />
      <div className="flightsfilter-container">
        <h1>Flights filter</h1>

        {/* {filterType.forEach((key) => {
          props.activeFilter.map((filterOption) => {
            if (filterOption.type === key) {
              console.log("isTrue" + key + filterOption.type);
              return (
                <div>
                  {key}
                <div/>
              );
            }
          });
        })} */}
      </div>
    </>
  );
}

export default FlightsFilter;
