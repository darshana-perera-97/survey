import React from "react";
import { dataStore } from "../Data/DataHandle2";

export default function LastPage2(prop) {
  console.log(prop)
  return (
    <div className="lastPage">
      <p>Thank you -2</p>
      <div className="center">
        <button
          onClick={() => {
            console.log(prop.ans)
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
