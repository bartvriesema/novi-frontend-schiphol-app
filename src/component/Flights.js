import axios from "axios";
import React, { useEffect, useState } from "react";
import toDateTimeString from "../helpers/toDateTimeString";
import "./Flights.css";
import FlightsChart from "./FlightsChart";

function Flights(props) {
  const [flightData, setFlightData] = useState([]);
  let departures = [];
  let arrivals = [];
  let currentDateTime = new Date();

  async function getFlightData(flightDataUrl) {
    const response = await getData(flightDataUrl);
    const flights = response.flights;
    const nextPageUrl = getNextPageUrl(getLinks(response.link));

    if (nextPageUrl) {
      return flights.concat(await getFlightData(nextPageUrl));
    } else {
      return flights;
    }
  }

  async function getData(url) {
    try {
      const result = await axios.get(url);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  }

  function getLinks(linkInformation) {
    const pagination = [];
    const links = linkInformation.split(",");

    links.forEach((pageLink) => {
      const linkElement = pageLink.split(";");
      const url = linkElement[0]
        .replace(/[\s<>]/g, "")
        .replace(
          "https://api.schiphol.nl:443/public-flights/",
          "http://localhost:5000/"
        );
      const pageType = linkElement[1].slice(
        linkElement[1].indexOf('"') + 1,
        linkElement[1].lastIndexOf('"')
      );
      pagination.push({ type: pageType, url: url });
    });

    return pagination;
  }

  function getNextPageUrl(allLinks) {
    const nextPageUrl = allLinks.find((key) => key.type === "next");

    if (nextPageUrl) {
      return nextPageUrl.url;
    } else {
      const lastPageUrl = allLinks.find((key) => key.type === "last");
      if (lastPageUrl) {
        return lastPageUrl.url;
      } else {
        return null;
      }
    }
  }

  function setArrivalsDepartures() {
    departures = flightData.filter((flight) => {
      return flight.flightDirection === "D";
    });
    arrivals = flightData.filter((flight) => {
      return flight.flightDirection === "A";
    });
  }

  useEffect(() => {
    const startDateTime = toDateTimeString(currentDateTime, 0);
    const endDateTime = toDateTimeString(currentDateTime, 1);
    getFlightData(
      `http://localhost:5000/flights?includedelays=false&page=0&sort=%2BscheduleTime&fromDateTime=${startDateTime}&toDateTime=${endDateTime}&searchDateTimeField=scheduleDateTime`
    )
      .then((response) => setFlightData(response))
      .catch((e) => console.error(e))
      .finally(setArrivalsDepartures);
  }, []);

  return (
    <>
      {arrivals && (
        <div>
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
