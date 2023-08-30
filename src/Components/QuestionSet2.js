import React from "react";
import SingleQuection from "./SingleQuection";
import LastPage2 from "./LastPage2";

export default function QuestionSet2(prop) {
  const arrLength = prop.queSet.length;
  const [n, setN] = React.useState(+0);
  // console.log(prop);
  return (
    <div>
      {arrLength > n ? (
        <SingleQuection
          data={prop.queSet[n]}
          set={setN}
          q={n}
          ans={prop.ans}
          setAns={prop.setAns}
        />
      ) : (
        <LastPage2 ans={prop.ans} />
      )}
    </div>
  );
}
