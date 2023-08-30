import React from "react";
import { useState, useEffect } from "react";
import QuestionSet2 from "../Components/QuestionSet2";
import TopBar from "../Components/TopBar";
import DynamicQue from "../Components/DynamicQue";

// const [userData,setUseData] = React.use;
const questionSet = {
  que: "Select Language | භාෂාව තෝරන්න. |  மொழியைத் தேர்ந்தெடுக்கவும் | 言語を選んでください。",
  ans: ["English", "Sinhala", "Tamil", "Japan"],
};

const questionSet1 = [
  [
    {
      que: "English 01 will be here -2",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
    {
      que: "English 02 will be here -2",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
    {
      que: "English 03 will be here -2",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
  ],
  [
    {
      que: "Sinhala Q1 is here",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
    {
      que: "Sinhala Q2 is here",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
    {
      que: "Sinhala Q3 is here",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
  ],
  [
    {
      que: "Tamil 01 will be here -3",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
    {
      que: "Tamil 02 will be here -3",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
    {
      que: "Tamil 03 will be here -3",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
  ],
  [
    {
      que: "Japan 01 will be here -4",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
    {
      que: "Japan 02 will be here -4",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
    {
      que: "Japan 03 will be here -4",
      ans: ["Select A", "Select B", "Select C", "Select D"],
    },
  ],
];
export default function TestCase02() {
  const [selection, setSelection] = React.useState(5);
  const [ans, setAns] = React.useState(5);
  const [ans2, setAns2] = React.useState([]);
  useEffect(() => {
    if (ans !== 5) {
      setAns2([questionSet.ans[ans]]);
    }
  }, [ans]);
  return (
    <div>
      <TopBar />
      {/* <QuestionSet queSet={questionSet} ans={ans} setAns={setAns} /> */}
      {ans === 5 && (
        <DynamicQue
          que={questionSet.que}
          ans={questionSet.ans}
          setAns={setAns}
        />
      )}
      {ans !== 5 && (
        <QuestionSet2 queSet={questionSet1[ans]} ans={ans2} setAns={setAns2} />
      )}
      {/* <p>{ans}</p> */}
    </div>
  );
}
