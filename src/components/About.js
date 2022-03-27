import React, {useState} from 'react'

export default function About(props){
    
    // const [mystyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setBtntext] = useState('Enable Dark Mode')

    // const toggleBtn = () =>{
    //     if(mystyle.color === 'black'){
    //         setMystyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             border: '1px solid white' 
    //         })
    //         setBtntext("Enable Light Mode")
    //     }
    //     else{
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor:'white' 
    //         })
    //         setBtntext("Enable Dark Mode")
    //     }
    // }
    //to start above funtion put style={mystyle} in line number main div container 31, accordioan  button 36 accordioan body 41 accordioan button 47 accordiona body 52 accordioan body 59 and acordian body 64
    return (
    <div className='container my-3' style={{backgroundColor:props.mode==='light'? 'white':'black',
    color:props.mode==='dark'? 'white':'black'}}>
        <h1 className='my-3'>About Website</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={{backgroundColor:props.mode==='light'? 'white':'black', color:props.mode==='dark'? 'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode==='light'? 'white':'black', color:props.mode==='dark'? 'white':'black'}}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'? 'white':'black', color:props.mode==='dark'? 'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode==='light'? 'white':'black', color:props.mode==='dark'? 'white':'black'}}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'? 'white':'black', color:props.mode==='dark'? 'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.mode==='light'? 'white':'black', color:props.mode==='dark'? 'white':'black'}} >
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleBtn} className="btn btn-primary">{btntext}</button>
        </div> */}
    </div>
  );
}
