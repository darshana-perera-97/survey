import React from "react";
import QuestionSet2 from "../Components/QuestionSet2";
import TopBar from "../Components/TopBar";
import DynamicQue from "../Components/DynamicQue";
import LastPage3 from "../Components/LastPage3";

// const [userData,setUseData] = React.use;
const mainque = {
  que: "Main que is here",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque1 = {
  que: "Sub que is here - 1",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque2 = {
  que: "Sub que is here - 2",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque3 = {
  que: "Sub que is here - 3",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque4 = {
  que: "Sub que is here - 4",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque11 = {
  que: "Sub que is here - 1.1",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque12 = {
  que: "Sub que is here - 1.2",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque13 = {
  que: "Sub que is here - 1.3",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque14 = {
  que: "Sub que is here - 1.4",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque21 = {
  que: "Sub que is here - 2.1",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque22 = {
  que: "Sub que is here - 2.2",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque23 = {
  que: "Sub que is here - 2.3",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque24 = {
  que: "Sub que is here - 2.4",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque31 = {
  que: "Sub que is here - 3.1",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque32 = {
  que: "Sub que is here - 3.2",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque33 = {
  que: "Sub que is here - 3.3",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque34 = {
  que: "Sub que is here - 3.4",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque41 = {
  que: "Sub que is here - 4.1",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque42 = {
  que: "Sub que is here - 4.2",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque43 = {
  que: "Sub que is here - 4.3",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};
const subque44 = {
  que: "Sub que is here - 4.4",
  ans: ["Select A", "Select B", "Select C", "Select D"],
};

export default function TestCase03() {
  const [selection, setSelection] = React.useState(5);
  const [ans, setAns] = React.useState(5);
  const [ans1, setAns1] = React.useState(5);
  const [ans11, setAns11] = React.useState(5);
  const [ans2, setAns2] = React.useState([]);
  React.useEffect(() => {
    setAns2([ans, ans1, ans11]);
  }, [ans11]);

  return (
    <div>
      <TopBar />
      {/* <QuestionSet queSet={questionSet} ans={ans} setAns={setAns} /> */}
      {ans1 === 5 && (
        <div>
          {ans === 5 && (
            <DynamicQue que={mainque.que} ans={mainque.ans} setAns={setAns} />
          )}
          {ans === "0" && (
            <DynamicQue que={subque1.que} ans={subque1.ans} setAns={setAns1} />
          )}
          {ans === "1" && (
            <DynamicQue que={subque2.que} ans={subque2.ans} setAns={setAns1} />
          )}
          {ans === "2" && (
            <DynamicQue que={subque3.que} ans={subque3.ans} setAns={setAns1} />
          )}
          {ans === "3" && (
            <DynamicQue que={subque4.que} ans={subque4.ans} setAns={setAns1} />
          )}
        </div>
      )}
      {ans11 === 5 && (
        <div>
          {ans === "0" && (
            <div>
              {ans1 === "0" && (
                <DynamicQue
                  que={subque11.que}
                  ans={subque11.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "1" && (
                <DynamicQue
                  que={subque12.que}
                  ans={subque12.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "2" && (
                <DynamicQue
                  que={subque13.que}
                  ans={subque13.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "3" && (
                <DynamicQue
                  que={subque14.que}
                  ans={subque14.ans}
                  setAns={setAns11}
                />
              )}
            </div>
          )}
          {ans === "1" && (
            <div>
              {ans1 === "0" && (
                <DynamicQue
                  que={subque21.que}
                  ans={subque21.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "1" && (
                <DynamicQue
                  que={subque22.que}
                  ans={subque22.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "2" && (
                <DynamicQue
                  que={subque23.que}
                  ans={subque23.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "3" && (
                <DynamicQue
                  que={subque24.que}
                  ans={subque24.ans}
                  setAns={setAns11}
                />
              )}
            </div>
          )}
          {ans === "2" && (
            <div>
              {ans1 === "0" && (
                <DynamicQue
                  que={subque31.que}
                  ans={subque31.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "1" && (
                <DynamicQue
                  que={subque32.que}
                  ans={subque32.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "2" && (
                <DynamicQue
                  que={subque33.que}
                  ans={subque33.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "3" && (
                <DynamicQue
                  que={subque34.que}
                  ans={subque34.ans}
                  setAns={setAns11}
                />
              )}
            </div>
          )}
          {ans === "3" && (
            <div>
              {ans1 === "0" && (
                <DynamicQue
                  que={subque41.que}
                  ans={subque41.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "1" && (
                <DynamicQue
                  que={subque42.que}
                  ans={subque42.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "2" && (
                <DynamicQue
                  que={subque43.que}
                  ans={subque43.ans}
                  setAns={setAns11}
                />
              )}
              {ans1 === "3" && (
                <DynamicQue
                  que={subque44.que}
                  ans={subque44.ans}
                  setAns={setAns11}
                />
              )}
            </div>
          )}
        </div>
      )}
      {/* <p>
        {ans} - {ans1} - {ans11}
      </p> */}
      {ans !== 5 && ans1 !== 5 && ans11 !== 5 && (
        <div>
          <LastPage3 ans={ans2} />
        </div>
      )}
    </div>
  );
}
