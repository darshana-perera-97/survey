import React from "react";
import { dataStore } from "../Data/DataHandle2";

export default function LastPage3(prop) {
  var t = { ans: prop.ans };
  return (
    <div className="lastPage">
      <p>Thank you -3</p>
      <div className="center">
        <button
          onClick={() => {
            console.log(t)
            dataStore(t);
            console.log(t);
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
