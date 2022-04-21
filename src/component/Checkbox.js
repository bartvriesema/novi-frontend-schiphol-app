import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div>
      <input type="checkbox" id={props.key} defaultChecked={props.value} />
      <label htmlFor="checkbox">{props.description}</label>
    </div>
  );
}

export default Checkbox;
