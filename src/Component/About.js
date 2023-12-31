import React from 'react'

export default function About() {
    // const [myStyle, setMyStyle]= useState({
    //     color : 'white',
    //     backgroundColor: 'black'
    // })
    // // const [btnText,setBtnText] =useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color==='white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundcColor:'white',
    //             border: '1px solid white'
    //         })
    //         // setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         // setBtnText("Enable Dark Mode");
    //     }
    //     }
    
    
  return (
    <div className='container'>
                <h2 className='container my-2'><b><h1>About us</h1></b></h2>
                    <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    TextEditor gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Text Editor is a free character counter tool that provides instant character count & word count statistics for a given text. Text Editor reports the number of words and characters.Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safar, Opera. It suits to count characters in facebook, blog, books, excel document, pdf documetn,essays etc.
                    </div>
                    </div>
                </div>
                </div>
                {/* <div className="container my-3">
                    <button onClick= {toggleStyle} type="button" class="btn btn-primary">Enable dark mode</button>
                </div> */}
                    </div>
  )
  }
