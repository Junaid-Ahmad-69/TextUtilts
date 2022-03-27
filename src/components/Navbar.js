import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.lin1}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.lin2}</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch mx-3 text-${props.mode === 'dark'? 'light': 'dark'} `}>
            <input className="form-check-input" onClick={()=>{props.toggle(null)}} type="checkbox" id="flexSwitchCheckChecked" />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{`Enable ${props.mode} mode`}</label>
        </div>
        {/* red theme  */}
        <div className="d-flex">
          <div className="bg-danger rounded mx-2"   onClick={()=> {props.toggle('danger')}}   style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
          <div className="bg-secondary rounded mx-2" onClick={()=> {props.toggle('secondary')}} style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2"   onClick={()=> {props.toggle('warning')}}   style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2"   onClick={()=> {props.toggle('success')}}   style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
        </div>
      </div>
    </div>
  </nav>
  );
}
Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    lin1: PropTypes.string.isRequired
}
Navbar.defaultProps ={
    title: 'Set the here',
    lin1 : 'About text here',
    lin2 : 'Home text here'
}