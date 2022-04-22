import React, {useEffect, useState} from "react";
import "./FlightsFilter.css";
import FlightsChart from "./FlightsChart";
import Checkbox from "./Checkbox";

function FlightsFilter({activeFilter, flightData}) {
    const filterType = new Set(activeFilter.map((item) => item.type));
    const filterSet = [...filterType];
    const [currentFilter, setCurrentFilter] = useState(activeFilter);
    const [useFilter, toggleUseFilter] = useState(false);

    function handleFilterChange(filterKey) {
        activeFilter.forEach((filterOption) => {
            if (filterOption.filter === filterKey) {
                filterOption.value = !filterOption.value;
            }
        })
        setCurrentFilter(activeFilter);
    }

    function filterData(flightData) {
        const filteredData = [];
        flightData.forEach((flight) => {
            activeFilter.forEach((filterOption) => {
                if (filterOption.value) {
                    if (filterOption.filter === flight.serviceType) {
                        if (!filteredData.includes(flight)) {
                            filteredData.push(flight);
                        }
                    }
                    if (filterOption.filter === flight.route.eu) {
                        if (!filteredData.includes(flight)) {
                            filteredData.push(flight);
                        }
                    }
                }
            })


        })
        // return new Set(filteredData.map((flight) => flight));
        return filteredData;
    }

    useEffect(() => {
        console.log("Default useEffect")

    },);


    // useEffect(() => {
    //     console.log("Updated current filter")
    // }, [currentFilter])


    return (<>
        <FlightsChart flightData={filterData(flightData)}/>
        <div className="flightsfilter-container">
            <h2>Flights filter</h2>

            {filterSet.map((type) => {
                return (<>
                    <h3>{type}</h3>
                    {activeFilter.map((item) => {
                        if (type === item.type) {
                            return (<Checkbox key={item.description} filter={item.filter} value={item.value}
                                              description={item.description} handleChange={handleFilterChange}/>);
                        }
                        return <></>
                    })}
                </>)
            })}


        </div>
    </>);
}


export default FlightsFilter;

