import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ChromePicker } from 'react-color'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    // const handleBgColor = () => {
    //     console.log("Inside the hanglebgcolor")
    //     if (props.mode === 'dark') {
    //         console.log("mode is dark so change bg color");
    //         const bgbtn = document.getElementById("grbtn").value;
    //         console.log(bgbtn);
    //         document.body.style.backgroundColor = bgbtn;
    //     }
    // }
    // window.onload = () => {
    //     document.getElementById('colorpicker').style.visibility = 'hidden'
    // }
    const handleBgColor = () => {

        console.log("Inside the handlebg color function")
        if (props.mode === 'dark') {
            // document.getElementById('colorpicker').style.visibility='visible'
            setShowColorPicker(showColorPicker => !showColorPicker)
            // console.log(color)
            document.body.style.backgroundColor = color
            
            // props.toggleMode=
        }
    }
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/About">{props.aboutText}</a> */}
                            <a className="nav-link" href="#">{props.aboutText}</a>
                        </li>

                    </ul>
                    {/* Working code line for change background color to green
                    <button className="btn btn-success mx-1" onClick={handleBgColor} id="grbtn" value="green"> Green</button> */}



                    {/* <button className="btn btn-success mx-1" onClick={()=>handleBgColor}>{showColorPicker?'Close Color Picker':'Pick Color'}</button> */}

                    <button className="btn btn-success mx-1" onClick={handleBgColor} id="colorpicker">{showColorPicker ? 'Close Color Picker' : 'Pick Color'}</button>
                    {
                        showColorPicker && (<ChromePicker
                            color={color}
                            onChange={updatedColor => setColor(updatedColor.hex)}
                        />)

                    }

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}  >
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About Text Here"
}