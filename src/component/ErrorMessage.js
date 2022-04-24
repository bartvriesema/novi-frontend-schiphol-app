import React from "react";
import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="errormessage"><h2>An error occurred while loading data</h2>
      <p>Please try to refresh this page or try again at a later time.</p>
      {message && <p>Error message: {message}</p>}
    </div>
  );
}

export default ErrorMessage;