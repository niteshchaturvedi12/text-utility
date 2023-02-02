import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] =  useState('');
    const [words, setWords] = useState(0)
    
    const convertUppercase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted To Uppercase', 'success')
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
        let wordCount = text.length > 0 ? text.split(' ').length : 0;
        setWords(wordCount)
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
            <textarea  id="myText" className="form-control my-3" style={{backgroundColor: props.mode === 'light' ? 'white' : '#436cba',
                color : props.mode === 'light' ? 'black' : 'white'}} value={text}
                onChange={handleTextChange} rows="8"></textarea>
            <button className="btn btn-primary" onClick={convertUppercase}>Convert To Uppercase</button>
            <button className="btn btn-primary ml-2" onClick={convertLowercase}>Convert To Lowercase</button>
            <button className="btn btn-primary ml-2" onClick={copyToClipBoard}>Copy To ClipBoard</button>
            <button className="btn btn-primary ml-2" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary ml-2" onClick={cleanExtraSpaces}>Clean extra spaces</button>
        </div>
        <div className="container" style={{backgroundColor: props.mode === 'light' ? 'white' : '#436cba',
         color : props.mode === 'light' ? 'black' : 'white'}}>
            <h1>Your Text Summary</h1>
            <p>your text contains {words} words and {text.length} characters!</p>
            <p>{0.008*words} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter some text in the textbox above to preview here!'}</p>
        </div>
    </>
  )
}