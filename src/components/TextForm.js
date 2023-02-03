import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] =  useState('');
    
    const convertUppercase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted To Uppercase', 'success')
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const convertLowercase = () => {
        setText(text.toLowerCase())
        props.showAlert('Converted To Lowercase', 'success')
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('Copied To ClipBoard', 'success')
    }
    const clearText = () => {
        props.showAlert('Text is cleared', 'success')
        setText('')
    }

    const cleanExtraSpaces = () => {
        props.showAlert('Extra spaces removed', 'success')
        setText(text.split(/[ ]+/).join(' '));
    }
    
  return (
    <>
        <div className="container" style={{backgroundColor: props.mode === 'light' ? 'white' : '#436cba',
         color : props.mode === 'light' ? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <textarea  id="myText" className="form-control my-3" style={{backgroundColor: props.mode === 'light' ? 'white' : '#19418d',
                color : props.mode === 'light' ? 'black' : 'white'}} value={text}
                onChange={handleTextChange} rows="8"></textarea>
            <button className="btn btn-primary mx-1 my-1" onClick={convertUppercase}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={convertLowercase}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={copyToClipBoard}>Copy To ClipBoard</button>
            <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={cleanExtraSpaces}>Clean extra spaces</button>
        </div>
        <div className="container" style={{backgroundColor: props.mode === 'light' ? 'white' : '#436cba',
         color : props.mode === 'light' ? 'black' : 'white'}}>
            <h1>Your Text Summary</h1>
            <p>your text contains {text.length > 0 ? text.split(' ').filter((element) => element.length > 0).length : 0} words and {text.length} characters!</p>
            <p>{0.008*(text.length > 0 ? text.split(' ').filter((element) => element.length > 0).length : 0)} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
        </div>
    </>
  )
}