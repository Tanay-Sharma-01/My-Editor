import React, { useContext, useEffect, useState } from "react";
import "./css/LeftPanel.css";
import Editor from "@monaco-editor/react";
import { context } from "./Data";
import { BiReset } from "react-icons/bi";
import { DefaultCode } from "./Data";
import ReactTooltip from "react-tooltip";

function LeftPanel() {
  const data = useContext(context);
  const [code, setCode] = data.code;
  const [languages] = data.lang;
  const [langArray, setLangArray] = data.langArray;
  const [currentLang, setCurrentLang] = data.currentLang;

  const resetCode = () => {
    setCode(DefaultCode);
  };

  useEffect(() => {
    const arr = Object.keys(languages);
    setLangArray(arr);
    setCurrentLang("javascript");
  }, []);

  return (
    <div className="LeftPanel">
      <div className="Selector">
        <select
          className="Box"
          onChange={(e) => setCurrentLang(e.target.value)}
        >
          {langArray.map((ele, index) => {
            return (
              <option key={index} value={ele}>
                {ele}
              </option>
            );
          })}
        </select>
        <BiReset
          data-for="reset-code"
          data-tip="Reset the code"
          className="Reset"
          onClick={resetCode}
        />
        <ReactTooltip
          id="reset-code"
          delayShow={500}
          delayHide={0}
          textColor="black"
          backgroundColor="white"
          effect="solid"
        />
      </div>
      <div className="Space"></div>
      <Editor
        theme="vs-dark"
        value={code}
        onChange={(e) => setCode(e)}
        language={currentLang}
        className="Editor"
      />
    </div>
  );
}

export default LeftPanel;
