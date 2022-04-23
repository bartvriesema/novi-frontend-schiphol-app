import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "./FlightsChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function FlightsChart({ flightData }) {
  const [arrivals, setArrivals] = useState([]);
  const [departures, setDepartures] = useState([]);

  useEffect(() => {
    setArrivals(
      flightData.filter((key) => key.flightDirection === "D")
    );
    setDepartures(
      flightData.filter((key) => key.flightDirection === "A")
    );
  }, [flightData]);

  return (
    <div className="chart">
      <p>
        <FontAwesomeIcon icon="fa-solid fa-plane-arrival" />
        Arrivals total: {arrivals.length}
      </p>
      <p>
        <FontAwesomeIcon icon="fa-solid fa-plane-departure" />
        Departures total: {departures.length}
      </p>
      <Pie
        data={{
          labels: ["Arrivals", "Departures"],
          datasets: [
            {
              label: "# of Flights",
              data: [arrivals.length, departures.length],
              backgroundColor: [
                "rgba(99, 210, 255, 0.8)",
                "rgba(32, 129, 195, 0.8)"
              ],
              borderColor: ["rgba(99, 210, 255, 1)", "rgba(32, 129, 195, 1)"],
              borderWidth: 1
            }
          ]
        }}
      />
    </div>
  );
}

export default FlightsChart;
