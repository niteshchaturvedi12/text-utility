import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height : '20px', width : '20px'}}></div>
              <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style={{height : '20px', width : '20px'}}></div>
              <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height : '20px', width : '20px'}}></div>
              <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height : '20px', width : '20px'}}></div>
              <div className="bg-info rounded mx-2" onClick={() => {props.toggleMode('info')}} style={{height : '20px', width : '20px'}}></div>
              <div className="bg-dark rounded mx-2" onClick={() => {props.toggleMode('dark')}} style={{height : '20px', width : '20px'}}></div>
              <div className="bg-light rounded mx-2" onClick={() => {props.toggleMode('light')}} style={{height : '20px', width : '20px'}}></div>
            </div>
          {/* <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
            <label className={`custom-control-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="customSwitch1">Enable Dark mode</label>
          </div> */}
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string,
}

Navbar.defaultProps = {
  title : 'set title here',
  aboutText : 'set about text here'
}