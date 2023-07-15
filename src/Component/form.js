import React, {useEffect, useState} from 'react'

export default function Form() {
    const data={name:" ",email:" ",password:" "};
    const [inputData,setInputData]= useState(data)
    const [flag,setFlag] = useState(false)
    useEffect(()=>{
        console.log("Registererd")
    },[flag])
    function handleData(e){
        setInputData({inputData,
            [e.target.name]:e.target.value})
            console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are manadatory")
        }
        else{
            setFlag(true)
        }
    }
  return (
    <>
    <pre>{(flag)?<h2 className= "ui-define">Hello {inputData.name},You have Registered Successfully</h2>:""}</pre>

<div className='container d-flex justify-content-center align-items-center form-main-div' onSubmit={handleSubmit}>
    <form >
    <div className='header'>
        <h1><b>REGISTRATION FORM</b></h1>
    </div>
    <div>
        <input type="text" placeholder='Enter your name' name='name' value={inputData.name} onChange={handleData}/>
    </div>
    <div>
        <input type="email" placeholder='Enter your email' name='email' value={inputData.email} onChange={handleData}/>
    </div>
    <div>
        <input type="password" placeholder='Enter your password' name='password' value={inputData.password} onChange={handleData}/>
    </div>
    <div>
        <button type='Submit'>
            Submit
        </button>
    </div>
    </form>
    </div>
  </>
  )
}
