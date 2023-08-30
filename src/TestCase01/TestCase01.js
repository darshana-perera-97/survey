import React from "react";
import QuestionSet from "../Components/QuestionSet";
import TopBar from "../Components/TopBar";

// const [userData,setUseData] = React.use;
const questionSet = [
  {
    que: "Quation 01 will be here",
    ans: ["Select A", "Select B", "Select C", "Select D"],
  },
  {
    que: "Quation 02 will be here",
    ans: ["Select A", "Select B", "Select C", "Select D"],
  },
  {
    que: "Quation 03 will be here",
    ans: ["Select A", "Select B", "Select C", "Select D"],
  },
];

export default function TestCase01() {
  const [ans, setAns] = React.useState([]);
  return (
    <div>
      <TopBar />
      <QuestionSet queSet={questionSet} ans={ans} setAns={setAns} />
    </div>
  );
}
