import React , {useContext} from 'react'
import "./css/LeftPanel.css"
import Editor from "@monaco-editor/react"
import {context} from "./Data";
import {BiReset} from "react-icons/bi"
import {DefaultCode} from "./Data";
import GetLanguage from './GetLanguage';

function LeftPanel() {

    const data = useContext(context);
    const [code , setCode] = data.code;

    const resetCode = () => {
      setCode(DefaultCode);
    }

    return (
    <div className='LeftPanel'>
        <div className='Selector'>
          <select className='Box'>
            <option>Language</option>
            <option>Javascript</option>
          </select>
          <BiReset className='Reset' onClick={resetCode} />
        </div>
        <div className='Space'><GetLanguage /></div>
        <Editor
          theme='vs-dark'
          value={code}
          onChange={(e) => setCode(e)}
          language="javascript" 
          className='Editor'
        />
    </div>
  )
}

export default LeftPanel