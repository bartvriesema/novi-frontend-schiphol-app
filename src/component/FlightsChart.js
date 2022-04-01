import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import "./FlightsChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function FlightsChart(props) {
  return (
    <div className="chart">
      <p>
        <FontAwesomeIcon icon="fa-solid fa-plane-arrival" />
        Arrivals total: {props.arrivals}
      </p>
      <p>
        <FontAwesomeIcon icon="fa-solid fa-plane-departure" />
        Departures total: {props.departures}
      </p>
      <Pie
        data={{
          labels: ["Arrivals", "Departures"],
          datasets: [
            {
              label: "# of Flights",
              data: [props.arrivals, props.departures],
              backgroundColor: [
                "rgba(99, 210, 255, 0.8)",
                "rgba(32, 129, 195, 0.8)",
              ],
              borderColor: ["rgba(99, 210, 255, 1)", "rgba(32, 129, 195, 1)"],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}

export default FlightsChart;
