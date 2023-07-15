import React from 'react'

export default function form2() {
  return (
    <div>
      <form className='container-fluid'>
        <div className='Header'><h1>
        <b>BIO OF SCHOLARS</b>
        </h1></div>
        <div className="Summary">
            <p>Scholars Plz Update your Bio. It will be short around 50 to 60 words</p>
        </div>
        <div>
            <h2>Name</h2>
        </div>
        <div>
            <input type="text" placeholder="Enter your Name" name="name" />
        </div>
        <div>
            <h2>Batch</h2>
        </div>
        <div>
            <input type="Text" placeholder="Batch" name="Batch Name" />
        </div>
        <div>
            <h2>Date of Birth</h2>
        </div>
        <div>
            <input type="Text" placeholder="Enter your DOB" name="DOB" />
        </div>
        <div>
            <h2>Write your Bio</h2>
        </div>
        <div>
            <input type="Text" placeholder="Enter your Bio" name="Bio" />
        </div>
        <div className="butt">
            <button type="button" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}
