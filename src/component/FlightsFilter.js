import React, { useEffect, useState } from "react";
import "./FlightsFilter.css";
import FlightsChart from "./FlightsChart";
import Checkbox from "./Checkbox";

function FlightsFilter({ activeFilter, flightData }) {
  const filterType = new Set(activeFilter.map((item) => item.type));
  const filterSet = [...filterType];
  const [currentFilter, setCurrentFilter] = useState(activeFilter);
  const [filteredData, setFilteredData] = useState(flightData);
  const [useFilter, toggleUseFilter] = useState(false);

  function handleFilterChange(filterKey) {
    activeFilter.forEach((filterOption) => {
      if (filterOption.filter === filterKey) {
        filterOption.value = !filterOption.value;
      }
    });
    setCurrentFilter([...activeFilter]);
    setUseFilter();
  }

  function filterData(data) {
    if (useFilter) {
      const tempData = [];
      data.forEach((flight) => {
        activeFilter.forEach((filterOption) => {
          if (filterOption.value) {
            if (filterOption.filter === flight.serviceType || filterOption.filter === flight.route.eu) {
              if (!tempData.includes(flight)) {
                tempData.push(flight);
              }
            }
          }
        });
      });
      return tempData;
    }
    return data;
  }

  function setUseFilter() {
    for (const item of currentFilter) {
      if (item.value) {
        toggleUseFilter(true);
        break;
      }
      toggleUseFilter(false);
    }
  }

  useEffect(() => {
    setUseFilter();
  }, []);

  useEffect(() => {
    setUseFilter();
    setFilteredData(filterData(flightData));
  }, [JSON.stringify(currentFilter)]);

  return (
    <>
      <div className="flightsfilter-container">
        <h2>Flights filter</h2>

        {filterSet.map((type) => {
          return (
            <div className="flightsfilter-type-list">
              <h3>{type}</h3>
              <ul>
                {activeFilter.map((item) => {
                  if (type === item.type) {
                    return (
                      <Checkbox
                        key={item.id}
                        filter={item.filter}
                        value={item.value}
                        description={item.description}
                        handleChange={handleFilterChange}
                      />
                    );
                  }
                  return <></>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <FlightsChart className="flightsfilter-chart" flightData={filteredData} />
    </>
  );
}

export default FlightsFilter;
