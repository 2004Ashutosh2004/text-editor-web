import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick =() => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const handleLoClick =() => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick =() => {
        console.log("Lowercase was clicked" + text);
        let newText = '';
        setText(newText)
    }
    
    const handleOnChange =(event) => {
        console.log("OnChange");
        setText(event.target.value);
    }
    const handleCopy =() => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('');
return (
    <>
    <div className='container'>
    <h1 className= 'mb-2'>{props.heading}</h1>
            <div className="mb-3">
            <label for="myBox" className="form-label">Enter the text you want to change from Lowercase to Uppercase and vice versa. It also serves as a character counter and word counter.</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
        </div>
    </div>
    <div className="container pb-5 mb-5">
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  )
}
