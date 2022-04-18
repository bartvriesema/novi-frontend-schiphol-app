import axios from "axios";
import React, { useEffect, useState } from "react";
import toDateTimeString from "../helpers/toDateTimeString";
import "./Flights.css";
import FlightsChart from "./FlightsChart";
import Loading from "./Loading";
import getFlightData from "../helpers/flightData";

function Flights(props) {
  const [isLoading, toggleLoading] = useState(true);
  const [flightData, setFlightData] = useState([]);
  let currentDateTime = new Date();

  useEffect(() => {
    const startDateTime = toDateTimeString(currentDateTime, 0);
    const endDateTime = toDateTimeString(currentDateTime, 2);
    getFlightData(
      `http://localhost:5001/schiphol/flights?includedelays=false&page=0&sort=%2BscheduleTime&fromDateTime=${startDateTime}&toDateTime=${endDateTime}&searchDateTimeField=scheduleDateTime`
    )
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
          <FlightsChart
            arrivals={
              flightData.filter((key) => key.flightDirection === "D").length
            }
            departures={
              flightData.filter((key) => key.flightDirection === "A").length
            }
          />
        </div>
      )}
    </>
  );
}

export default Flights;
