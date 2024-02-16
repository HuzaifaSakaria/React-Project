import React, {useState} from 'react'

export default function Home() { 

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
  setText(newText)
}
const handleLoClick = () =>{
  let newText = text.toLowerCase();
setText(newText)
}
const handleOnChange = (event) =>{
  setText(event.target.value)
}
const [text, setText]= useState("");

  return (
    <>
    <div className="container my-4">
    <div >
      <h1>Enter Your Text</h1>
<div className="my-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>
  Convert to UpperCase
</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>
  Convert to UpperCase
</button>
 </div>
 <div>
  <h1>Your Text Summary</h1>
  <p >{text.split(" ").length} words and {text.length} characters</p>
  <p>Can be read in {0.008 * text.split(" ").length} Minutes</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:("Enter something in the Textbox above to preview")}</p>
 </div>
 </div>
 </>
  )
}
