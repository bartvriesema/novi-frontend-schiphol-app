import React, {useEffect, useState} from 'react';
import axios from "axios";
import './SchipholHome.css';

function SchipholHome(props) {
    const [flightData, setFlightData] = useState();

    async function getData() {
        try {
            //Proxy server nodig, bijv. Express
            const result = await axios.get('http://localhost:5000/flights?includedelays=false&page=0&sort=%2BscheduleTime', {
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "app_id": `${process.env.REACT_APP_API_ID}`,
                    "app_key": `${process.env.REACT_APP_API_KEY}`,
                    "ResourceVersion": "v4",
                }
            })
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData();
    })


    return (<div>
        SchipholHome component
    </div>);
}

export default SchipholHome;