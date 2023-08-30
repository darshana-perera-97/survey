import React from "react";
import { dataStore } from "../Data/DataHandle";

export default function LastPage(prop) {
  return (
    <div className="lastPage">
      <p>Thank you</p>
      <div className="center">
        <button
          onClick={() => {
            dataStore(prop.ans);
            console.log(prop.ans);
            window.alert("Data Submited");
          }}
        >
          Submit Answers
        </button>
      </div>
      <h6>
        Safe back to Dashboard <a href="/">Navigate</a>
      </h6>
    </div>
  );
}
