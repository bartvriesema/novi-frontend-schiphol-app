import React, { useEffect, useState } from "react";
import "./FlightsFilter.css";
import FlightsChart from "./FlightsChart";

function FlightsFilter(props) {
  const [passengerLine, setPassengerLine] = useState();
  const [passengerCharter, setPassengerCharter] = useState();
  const [freightLine, setFreightLine] = useState();
  const [freightCharter, setFreightCharter] = useState();
  const [routeSchengen, setRouteSchengen] = useState;
  const [routeEurope, setRouteEurope ] = useState();
  const [routeNonEurope, setRouteNonEurope] = useState();

  useEffect(() => {
    setPassengerLine(props.flightData.filter((key) => key.serviceType === "J"));
    setPassengerCharter(
      props.flightData.filter((key) => key.serviceType === "C")
    );
    setFreightLine(props.flightData.filter((key) => key.serviceType === "F"));
    setFreightCharter(
      props.flightData.filter((key) => key.serviceType === "H")
    );

  }, []);

  return (
    <>
      {(passengerLine || passengerCharter || freightLine || freightCharter) && (
        <>
          <FlightsChart flightData={passengerLine} />
          <div className="flightsfilter-container">
            <h1>Flights filter</h1>
            <h2>Service type</h2>J = Passenger Line, C =Passenger Charter, F =
            Freight Line and H = Freight Charter Route: eu (string, optional): S
            (Schengen), E (Europe) or N (non-Europe) , scheduleDateTime (string,
            optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ , scheduleDate (string,
            optional): yyyy-MM-dd , scheduleTime (string, optional): hh:mm:ss ,
          </div>
        </>
      )}
    </>
  );
}

export default FlightsFilter;
