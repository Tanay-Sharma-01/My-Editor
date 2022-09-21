import React, { useContext, useState } from "react";
import "./css/RightPanel.css";
import { context } from "./Data";
import {PulseLoader } from "react-spinners";
import { BiReset } from "react-icons/bi";
import ReactTooltip from "react-tooltip"

function RightPanel() {
  // const secretKey1 = "b27af1dbccmshfd2a44f218b824ap1adcf5jsn6125851982dc";
  const secretKey = "2cce6b1061msh37922d93103d96ap1da568jsn218ec6ceed7d";

  const data = useContext(context);
  const [code, setCode] = data.code;
  const [input, setInput] = data.input;
  const [currentLang] = data.currentLang;
  const [languages] = data.lang;
  const [output, setOutput] = useState("Your output comes here");
  const [showLoader, setShowLoader] = useState(false);

  const runCode = () => {
    setShowLoader(!showLoader);

    const str4 = "fun(input)\n";
    const str =
      "const input = " +
      (input == "" ? "undefined" : input) +
      "\n" +
      code +
      "\n\n" +
      str4;

    const _64EncodedCode = btoa(str);
    const _64EncodedInput = btoa("");

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": secretKey,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      body:
      '{"language_id":'+languages[currentLang]+',"source_code":"'+_64EncodedCode+'","stdin":"'+_64EncodedInput+'"}'
    };

    fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const options1 = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": secretKey,
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        }

        fetch(
          "https://judge0-ce.p.rapidapi.com/submissions/" + response.token,
          options1
        )
          .then((response) => response.json())
          .then((response) => {
            if (response.status.id == 3) {
              if(response.stdout == "" || response.stdout == null){
                setOutput("");
              }else{
                setOutput(response.stdout);
              }
            } else {
              setOutput(response.stderr);
            }
            setShowLoader((showLoader) => !showLoader);
          })
          .catch((response) => {
            if (response?.status?.id == 3) {
              setOutput(response?.stdout);
            } else {
              setOutput(response?.stderr);
            }
            setShowLoader((showLoader) => !showLoader);
          });
      })
      .catch((err) => {
        setOutput(err);
        setShowLoader((showLoader) => !showLoader);
      });
  };

  const submitCode = () => {
      alert("hello")
  }

  const resetInput = () => {
    setInput("");
  };

  return (
    <div className="RightPanel">
      <div className="RightReset">
        <BiReset className="Reset" data-for="reset-input" data-tip="Reset the input"  onClick={resetInput} />
        <ReactTooltip
          id="reset-input"
          delayShow={500}
          delayHide={0}
          textColor="black"
          backgroundColor="white"
          effect="solid"
        />
      </div>
      <div className="Space"></div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="Input"
      />
      <div className="buttons">
        <button onClick={runCode}>Run</button>
        <button onClick={submitCode}>Submit</button>
      </div>
      {showLoader ? (
        <PulseLoader className="Output Loader" size={20} color="white" />
      ) : (
        <textarea className="Output" value={output} readOnly={true} />
      )}
    </div>
  );
}

export default RightPanel;
