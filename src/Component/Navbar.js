import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const toggle = (cls)=>{
    let darkmode = document.getElementsByClassName("darkmode-toggle")[1];
    darkmode.classList.toggle("active")
    // let darkmodebtn = document.getElementById("darkmode-toggle-button");
    // console.log(darkmodebtn,darkmode)
    // darkmodebtn.classList.toggle("active")
  }
  return (
    <nav className='navbar navbar-expand-lg navbar darkmode-toggle' id='darkmode-toggle'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.AboutText}</Link>
              </li>
              <li>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
              <div className="d-flex">
                <div className="bg-primary rounded mx-2" style={{height: '30px' ,width: '30px'}}></div>
              </div>
              <div className="form-check form-switch text">
            <input className="form-check-input" onClick={()=>{
              toggle()
              }} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div>
          </div>
        </div>
      </nav>
  ) 
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    AboutText:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'Set title here',
    AboutText:'About text here'
};