import React from "react";
import SingleQuection from "./SingleQuection";
import LastPage from "./LastPage";

export default function QuestionSet(prop) {
  const arrLength = prop.queSet.length;
  const [n, setN] = React.useState(+0);
  // console.log(prop.ans);
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
        <LastPage ans={prop.ans} />
      )}
    </div>
  );
}
