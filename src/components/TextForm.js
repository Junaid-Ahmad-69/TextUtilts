import React,{useState} from 'react'

export default function TextForm(props) {
    // React Js hOOKS
    // TEXT to get value from input form
    // Settext to change value onclick function
    const[text, setetxt]=useState("");
    
    // arrow function uppercase
    const handleUpconvert = () =>{
        let new1 = text.toLocaleUpperCase();
        setetxt(new1);
        props.showAlert("success", "Converted to Uppercase!");
    }
    // arrow function lowercase
    const handleLoconvert = () =>{
        let new2 = text.toLocaleLowerCase();
        setetxt(new2);
        props.showAlert( "success", "Converted to Lowercase!");
    }

    // Arrow function to remove value from input text field
    const handleClconvert = () =>{
        let empty ="";
        setetxt(empty);
        props.showAlert("success", "Text Clear!");
    }
    //Reverse the Input Text Area
    const handleRvconvert = () =>{
        let new4 = text.split(" ").reverse().join();
        setetxt(new4);
        props.showAlert("success","Text Reversed!");
    }
    // Function to Dynamic change Input TextValue
    const handleOnchange = (event) =>{
        setetxt(event.target.value);
    }
    // Function to Copy TextValue
    const handleCopy = () =>{
        var text2 = document.getElementById('exampleFormControlTextarea1');
        text2.select();
        navigator.clipboard.writeText(text2.value);
        props.showAlert("success", "Copied to Clipboard!");
    }
    // ReMOVE EXTRA SPACE
    const handleSpace = () =>{
        let text3 = text.split(/[ ]+/);
        setetxt(text3.join(" "))
        props.showAlert( "success", "Removed Extra Space!");
    }

  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'? 'black': 'white'}}>
        <h1> {props.heading}</h1>
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'? 'white': 'grey', color:props.mode==='light'? 'black': 'white' }} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <div className='d-flex justify-content-between'>
            <button className="btn btn-primary my-3" >Covert To UpperCase</button>
            <button className="btn btn-primary my-3" onClick={handleClconvert}>Clear the Textform</button>
            <button className="btn btn-primary my-3" onClick={handleLoconvert}>Covert To LowerCase</button>
            <button className="btn btn-primary my-3" onClick={handleRvconvert}>Reverse</button>
            <button className="btn btn-primary my-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-3" onClick={handleSpace}>Remove Extra Space</button>
        </div>
    </div>
    <div className="container" style={{color:props.mode==='light'? 'black': 'white'}}>
        <h2>{props.head2}</h2>
        <p> {text.split(" ").length} <b>Words</b> and {text.length} <b>Character</b> </p>
        <p><b>Total Time to Read The Input Text:</b> {0.008 * text.split(" ").length}Minutes </p>
        <h2>Preview Text</h2>
        <p>{text.length>0?text:"Enter Something in the text box above to preview here"}</p>
    </div>
    </>
  );
}
