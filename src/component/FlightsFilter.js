import React, {useState} from "react";
import "./FlightsFilter.css";
import FlightsChart from "./FlightsChart";
import Checkbox from "./Checkbox";

function FlightsFilter({activeFilter, flightData}) {
    const filterType = new Set(activeFilter.map((item) => item.type));
    const filterSet = [...filterType];
    const [useFilter, toggleUseFilter] = useState(false);

    return (<>
        <FlightsChart flightData={flightData}/>
        <div className="flightsfilter-container">
            <h1>Flights filter</h1>

            {filterSet.map((type) => {
                return (<>
                    <h2>{type}</h2>
                    {activeFilter.map((item) => {
                        if (type === item.type) {
                            return (<Checkbox key={item.key} value={item.value} description={item.description}/>);
                        }
                    })}
                </>)
            })}


        </div>
    </>);
}


export default FlightsFilter;

