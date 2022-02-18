import React, { useState } from 'react'

export default function TextForm(props) {

   
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Textarea is cleared", "Success");
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is change in upper case", "Success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is change in lower case", "Success");
    }
    const handleCpClick = () => {
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        console.log("Content Copy");
        props.showAlert("Text copied", "Success");
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container mt-4" style={{ color: props.mode === 'dark' ? 'White' : 'black' }}>
                <h2>{props.heading}</h2>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'White', color: props.mode === 'dark' ? 'White' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCpClick}>Copy</button>
               
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ?  'white' : 'black'  }}>
                <h3>Text Summery</h3>
                <p>{text.split("").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split("").length} Minutes required to read </p>
                <h3> Preview</h3>
                <p>{text.length > 0 ? text : "Enter text in textarea to preview it here..!!"}</p>
            </div>
        </>
    )
}
