import React, {useState} from 'react'

export default function Textfrom(props) {
  const handleUpClcik = () => {
    let newText= text.split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ");   
    setText (newText)
  }
  const handleDownClcik = () => {
    let newText= text.split(" ").map(item => item[0].toLowerCase() + item.slice(1)).join(" ");   
    setText (newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState ('Enter Text Here');
  return (
    <>
    <div className="container" style={{color : props.mode==='light'? '#042743':'white'}}>
    
    <h1>{props.heading}</h1>
  <div className="form-group">
    <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color : props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
    <button className="btn btn-primary my-3" onClick= {handleUpClcik}>Covert Upper Case</button> 
    <button className="btn btn-primary mx-3" onClick= {handleDownClcik}>Covert Lowerr Case</button>
  </div>
  </div>
  <div className="container" style={{color : props.mode === 'dark'? 'white':'#042743'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ?text : "Enter Your Text To Preview Here"}</p>
  </div>
    </>
  )
}
