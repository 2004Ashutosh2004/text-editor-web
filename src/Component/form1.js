import React from 'react'

export default function form1() {
  return (
    <div className="container">
      <form>
        <div className="header">
            <h1>
                <b>IAS EXAMINATION REGISTRATION</b>
            </h1>
        </div>
        <div>
            <p>Please Fill the form carefully. Once you submitted then you can not fill it again with the same email and Aadhar Card</p>
        </div>
        <div>
            <input type='text' placeholder='Enter your name' name='name'/>
        </div>
        <div>
            <input type='email' placeholder='Enter your email' name='email'/>
        </div>
        <div>
            <input type='Text' placeholder='Enter your Aadhar card number' name='Aadhar card'/>
        </div>
        <div>
            <input type='password' placeholder='Enter your password' name='password'/>
        </div>
        <div>
        <button type="Submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      

    </div>
  )
}
