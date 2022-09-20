import React, { createContext, useState, useEffect } from "react";

const context = createContext();

const DefaultCode = () => {
  const str1 = "const fun = (data) => {\n";
  const str2 = "  // your code comes here\n";
  const str3 = "}";

  return str1 + str2 + str3;
};

const Data = ({ children }) => {

  const [code, setCode] = useState(DefaultCode());
  const [input, setInput] = useState("");
  const [languages, setLanguages] = useState({
    "javascript": 63,
    "c": 50,
    "clojure": 86,
    "elixir": 57,
    "go": 60,
    "java": 62,
    "kotlin": 78,
    "lua": 64,
    "pascal": 67,
    "perl": 85,
    "php": 68,
    "python": 71,
    "r": 80,
    "ruby": 72,
    "rust": 73,
    "sala": 81,
    "sql": 82,
    "swift": 83,
    "typescript": 74});
  const [currentLang, setCurrentLang] = useState();
  const [langArray, setLangArray] = useState(Object.keys(languages));

  return (
    <context.Provider
      value={{
        code: [code, setCode],
        input: [input, setInput],
        lang: [languages, setLanguages],
        currentLang: [currentLang, setCurrentLang],
        langArray: [langArray, setLangArray],
      }}
    >
      {children}
    </context.Provider>
  );
};

export { context, Data, DefaultCode };
