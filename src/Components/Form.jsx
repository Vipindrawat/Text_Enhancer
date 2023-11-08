import React from 'react'
import { useState } from 'react'
import Summary from './Summary';

const Form = (props) => {
    const [text, setText] = useState("");

    const onchange = (event) => {
        setText(event.target.value);
    }

    const uppercaseclick = () => {
        const upper = text.toUpperCase();
        setText(upper);
        props.callalert("success", "Converted to upper case");
    }

    const lowercaseclick = () => {
        const lower = text.toLowerCase();
        setText(lower);
        props.callalert("success", "Converted to Lower case");

    }

    const removeextraspace = () => {
        const remove = text.split(/[ ]/);
        const extra = remove.filter((value) => {
            return value !== "";
        }).join(' ');
        setText(extra);
        props.callalert("success", "Extra space removed");
    }

    const firstletter = () => {
        const first = text.split(/\s/).map((value) => {
            if (value !== "") {
                const lower = value.toLowerCase();
                return (lower.charAt(0).toUpperCase() + lower.slice(1));
            }
            return value;
        }).join(" ");
        setText(first);
        props.callalert("success", "First letter of each world is converted to Upper case");
    }

    const copyclick = () => {
        navigator.clipboard.writeText(text);
        props.callalert("success", "text copied");
    }

    const clearclick = () => {
        setText('');
        props.callalert("success", "Text cleared");

    }
    const mobileMediaQuery = window.matchMedia('(min-width: 768px)');


    return (

        <div className="conta">
            <div className="container con" style={props.alert ? { paddingTop: mobileMediaQuery.matches ? '10px' : '135px', } : { paddingTop: "135px" }}>
                <div className="row">
                    <div className="col m-auto">
                        <h1>Enter your text below to Analyze :</h1>
                        <textarea className={`form-control border border-${props.mode ? 2 : 1} border-${props.mode ? "light" : "dark"} mt-4`} style={props.mode ? { backgroundColor: "lab(29 2.44 1.67)", color: "white" } : { backgroundColor: "white", color: "black" }} value={text} id="Textarea1" placeholder="Enter your text here" rows="11" onChange={onchange}></textarea>

                        <div className={`card border border-${props.mode ? 2 : 1} border-${props.mode ? "light" : "dark"} mt-2 mb-2`}>
                            <div className="card-body " style={props.mode ? { backgroundColor: "lab(29 2.44 1.67)", color: "white" } : { backgroundColor: "white", color: "black" }}>
                                <h3> {text.length} Characters {text.split(/\s/).filter((value) => {
                                    return value !== "";
                                }).length} Words </h3>
                            </div>
                        </div>

                        <button disabled={text == ""} className={`btn btn-${props.mode ? "dark" : "primary"} my-2 mx-2 border-${props.mode ? 3 : 5} border-${props.mode ? "light" : "primary"} rounded-2`} onClick={uppercaseclick} >Convert To UpperCase</button>
                        <button disabled={text == ""} className={`btn btn-${props.mode ? "dark" : "primary"} my-2 mx-2 border-${props.mode ? 3 : 5} border-${props.mode ? "light" : "primary"} rounded-3`} onClick={lowercaseclick}>Convert To LowerCase</button>
                        <button disabled={text == ""} className={`btn btn-${props.mode ? "dark" : "primary"} my-2 mx-2 border-${props.mode ? 3 : 5} border-${props.mode ? "light" : "primary"} rounded-3`} onClick={removeextraspace}>Remove Extra Space</button>
                        <button disabled={text == ""} className={`btn btn-${props.mode ? "dark" : "primary"} my-2 mx-2 border-${props.mode ? 3 : 5} border-${props.mode ? "light" : "primary"} rounded-3`} onClick={firstletter}>First Letter Captialize</button>
                        <button disabled={text == ""} className={`btn btn-${props.mode ? "dark" : "primary"} my-2 mx-2 border-${props.mode ? 3 : 5} border-${props.mode ? "light" : "primary"} rounded-3`} onClick={copyclick}>Copy</button>
                        <button disabled={text == ""} className={`btn btn-${props.mode ? "dark" : "primary"} my-2 mx-2 border-${props.mode ? 3 : 5} border-${props.mode ? "light" : "primary"} rounded-3`} onClick={clearclick}>Clear</button>
                    </div>
                </div>
            </div>
            <Summary text={text} mode={props.mode} />
        </div>

    )
}

export default Form;
