import React, { useEffect, useState } from "react";
import toDateTimeString from "../helpers/toDateTimeString";
import "./Flights.css";
import FlightsChart from "./FlightsChart";
import Loading from "./Loading";
import getFlightData from "../helpers/getFlightData";
import FlightsFilter from "./FlightsFilter";
import { useLocation } from "react-router-dom";
import filterCategory from "../helpers/filterCategories";

function Flights() {
  const [isLoading, toggleLoading] = useState(true);
  const [flightData, setFlightData] = useState([]);
  const [activeFilter, setActiveFilter] = useState(filterCategory);
  const currentPath = useLocation();
  let currentDateTime = new Date();

  useEffect(() => {
    const urlParams = new URLSearchParams({
      includedelays: "false",
      page: 0,
      sort: "scheduleTime",
      fromDateTime: toDateTimeString(currentDateTime, 0),
      toDateTime: toDateTimeString(currentDateTime, 2),
      searchDateTimeField: "scheduleDateTime"
    });

    const url = `${process.env.REACT_APP_PROXY_BASE_URL}?${urlParams}`;

    getFlightData(url)
      .then((response) => {
        setFlightData(response);
        toggleLoading(!isLoading);
      })
      .catch((e) => console.error(e));
    // setFilterOption("C", true);
  }, []);

  return (
    <>
      {isLoading && <Loading />}

      {!isLoading && (
        <div className="flights-container">
          <div className="flights-text">
            <h1>Current flights</h1>
            <p>
              Welcome to the Schiphol flights app. We show you the current
              Schiphol flights that arrive and depart within the current
              timeframe of 2 hours.
            </p>
            <h2>Time frame</h2>
            <p>
              Currently showing the flights that occur between
              {toDateTimeString(currentDateTime, 0).split("T")[1]} and
              {toDateTimeString(currentDateTime, 2).split("T")[1]}
            </p>
          </div>
          <div className="flights-chart">
            {currentPath.pathname === "/" && (
              <FlightsChart flightData={flightData} />
            )}
            {currentPath.pathname === "/flights" && (
              <FlightsFilter
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                flightData={flightData}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Flights;
