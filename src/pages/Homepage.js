import React from 'react';
import './Homepage.css';
import SchipholHome from "../component/SchipholHome";

function Homepage(props) {
    return (<div className="homepage-container">
        <h1>Dit is de Homepage</h1>
        <SchipholHome/>
    </div>);
}

export default Homepage;