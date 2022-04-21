import React, { useEffect, useState } from "react";
import toDateTimeString from "../helpers/toDateTimeString";
import "./Flights.css";
import FlightsChart from "./FlightsChart";
import Loading from "./Loading";
import getFlightData from "../helpers/getFlightData";
import FlightsFilter from "./FlightsFilter";
import { useLocation } from "react-router-dom";
import filterCategory from "../helpers/filterCategories";

function Flights(props) {
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
      searchDateTimeField: "scheduleDateTime",
    });

    const url = `${process.env.REACT_APP_PROXY_BASE_URL}?${urlParams}`;
    console.log(activeFilter);
    getFlightData(url)
      .then((response) => {
        setFlightData(response);
        toggleLoading(!isLoading);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      {isLoading && <Loading />}

      {!isLoading && (
        <div className="flights-container">
          SchipholHome component
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
      )}
    </>
  );
}

export default Flights;
