import React from "react";
import "./FlightsFilter.css";

function FlightsFilter(props) {
  return (
    <div className="flightsfilter-container">
      <h1>Flights filter</h1>


      Filteren op volgende punten
      serviceType (string, optional): The service type category of the commercial flight. For example: J = Passenger Line, C=Passenger Charter, F = Freight Line and H = Freight Charter etc. ,
      Route: eu (string, optional): S (Schengen), E (Europe) or N (non-Europe) ,
      scheduleDateTime (string, optional): yyyy-MM-dd'T'HH:mm:ss.SSSZ ,
      scheduleDate (string, optional): yyyy-MM-dd ,
      scheduleTime (string, optional): hh:mm:ss ,
    </div>
  );
}

export default FlightsFilter;
