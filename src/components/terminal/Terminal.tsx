import React, { useState } from "react";
import './terminal.scss'

function Terminal() {
  let [prompt, setPrompt] = useState("$ ")
  let [txt, setTxt] = useState(prompt)
  let [outputTxt, setOutputTxt] = useState("")
  
  function getOutput(txt: string) {
    txt = txt.substring(2)
    switch (txt){
      case "ls":
        return "list of directories"
      case "cd":
        return "change directory"
      default:
        return "Unknown Command!"
    }
  }
  return (
    <div className="terminal-container">
      <div className={"terminal-text"} >
        {outputTxt}
      </div>
      <input type={"text"} value = {txt} className={"terminal-input"}
             onChange={event => {setTxt(event.target.value)}}
             onKeyDown={event => {
               if(event.key === "Enter") {
                 setTxt(prompt)
                 setOutputTxt(`${outputTxt}${outputTxt.length === 0 ? "" : "\n"}${getOutput(txt)}`)
               }
               else if (event.key === "l" && event.ctrlKey) {
                 event.preventDefault()
                 setOutputTxt("")
                 setTxt(prompt)
               }
             }}/>
    </div>
  );
}

export default Terminal