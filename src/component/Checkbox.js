import React, { useState } from "react";
import "./Checkbox.css";

function Checkbox({ description, filter, value, handleChange }) {
  const [checked, toggleChecked] = useState(value);
  const filterKey = filter;

  function toggleCheckbox() {
    toggleChecked(!checked);
    handleChange(filterKey);
  }


  return (
    <li key={description} className="checkbox-entry">
      <input className="checkbox-item" type="checkbox" name={filter} defaultChecked={checked}
             onChange={() => toggleCheckbox()} />
      <label htmlFor="checkbox">{description}</label>
    </li>
  );
}

export default Checkbox;
