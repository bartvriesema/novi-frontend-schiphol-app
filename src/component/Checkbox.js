import React from "react";
import "./Checkbox.css";

function Checkbox({description, key, value}) {
    return (
        <div>
            <input type="checkbox" id={key} defaultChecked={value}/>
            <label htmlFor="checkbox">{description}</label>
        </div>
    );
}

export default Checkbox;
