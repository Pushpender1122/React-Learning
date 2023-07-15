import React, { useState } from "react";

export default function TextArea(probs) {
    const StringToUpperCase = () => {
        // console.log(text.toUpperCase());
        setText(text.toUpperCase());

    }
    const handleOnChange = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    }
    const clearHandler = () => {
        setText('');
    }

    const [text, setText] = useState('');
    return (
        <>
            <div>
                <h2>
                    {probs.heading}
                </h2>
                <textarea name="textarea" value={text} onChange={handleOnChange} cols="70" rows="10"></textarea>
                <div>
                    <button onClick={StringToUpperCase} >Convert to upper case</button>
                    <button onClick={clearHandler} >Clear</button>

                </div>

            </div>
            <div className="container">
                <h2>Word summery</h2>
                <p>{text.length} character  and {text.split(' ').length} word </p>
            </div>
        </>
    );
}
