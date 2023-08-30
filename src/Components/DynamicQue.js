import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

export default function DynamicQue(prop) {
  const [selection, setSelection] = React.useState(5);
  return (
    <div>
      <div className="SingleQueForm">
        <h2 className="quastion">{prop.que}</h2>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => {
              setSelection(e.target.value);
            }}
            value={selection}
          >
            <FormControlLabel
              value="0"
              control={<Radio />}
              label={prop.ans[0]}
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={prop.ans[1]}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={prop.ans[2]}
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label={prop.ans[3]}
            />
          </RadioGroup>
        </FormControl>
        <div className="d-center">
          {selection !== 5 ? (
            <button
              className="button_2"
              onClick={() => {
                // console.log(prop.ans[selection]);
                prop.setAns(selection);
              }}
            >
              Continue
            </button>
          ) : (
            <button className="button_3" disabled title="Select to Continue">
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
