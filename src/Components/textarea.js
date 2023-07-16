import React, { useState } from "react";
import './texarea.css';

export default function TextArea(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    };

    const handleRemoveExtra = () => {
        const removeText = text.replace(/\s+/g, ' ').trim();
        setText(removeText);
    };

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Text copied to clipboard');
                })
                .catch((error) => {
                    console.error('Failed to copy text: ', error);
                });
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            console.log('Text copied to clipboard');
        }
    };

    const handleCapitalize = () => {

        const modifiedText = text.replace(/(^|\.)(\s*)([a-z])/g, (match, group1, group2, group3) => {
            return group1 + group2 + group3.toUpperCase();
        });
        setText(modifiedText);
    };
    const handleClear = () => {


        setText('');
    };

    const wordCount = text.split(' ').filter(word => word.length > 0).length;

    return (
        <div className="textarea-container">
            <div className="textArea">
                <h2>{props.heading}</h2>
                <textarea name="textarea" value={text} onChange={handleOnChange} cols="70" rows="10"></textarea>
                <div className="button-container">
                    <button onClick={handleUpperCase}>Upper case</button>
                    <button onClick={handleLowerCase}>Lower case</button>
                    <button onClick={handleRemoveExtra}>Remove Extra space</button>
                    <button onClick={handleClear}>Clear</button>
                    <button onClick={handleCopy}>Copy</button>
                    <button onClick={handleCapitalize}>Capitalize First Word After Period</button>
                </div>
            </div>
            <div className="container">
                <h2>Word summary</h2>
                <p>{text.length} character(s) and {wordCount} word(s)</p>
                <div className="word-reading">
                    <h2>Word reading</h2>
                    <p>{Math.floor(wordCount * 3 / 5)} second</p>
                </div>
                <div className="preview">
                    <h2>Preview Your text</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}
