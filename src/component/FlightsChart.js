import React from "react";
import "./FlightsChart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function FlightsChart(props) {
  return (
    <div class="chart">
      <p>Arrivals total: {props.arrivals}</p>
      <p>Departures total: {props.departures}</p>
      <Pie
        data={{
          labels: ["Arrivals", "Departures"],
          datasets: [
            {
              label: "# of Flights",
              data: [props.arrivals, props.departures],
              backgroundColor: [
                "rgba(25, 149, 173, 0.2)",
                "rgba(161,214,226, 0.2)",
              ],
              borderColor: ["rgba(25, 149, 173, 1)", "rgba(161,214,226,1)"],
              borderWidth: 1,
            },
          ],
        }}
      />
      ;
    </div>
  );
}

export default FlightsChart;
