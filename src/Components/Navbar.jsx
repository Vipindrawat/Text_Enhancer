import React from 'react'
import logo from './Text.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = (props) => {

    const switchclick = () => {
        props.togglefun();
    }

    const toogleclick = () => {
        if (props.toggle === false) {
            props.setToggle(true);
            const b = document.body.getElementsByClassName("conta")[0];
            b.style.paddingTop = "80px";

        }
        else {
            console.log("inside else");
            const b = document.body.getElementsByClassName("conta")[0];
            b.style.paddingTop = "0px";
        }
    }
    const location = useLocation();

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-md navbar-${props.mode ? 'dark' : 'light'} bg-${props.mode ? "dark" : "primary height-"} `}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <img src={logo} className="me-1" style={{ height: "5vh", borderRadius: "1.5vh", backgroundColor: "red" }}></img>TextEnhancer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={toogleclick}> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "" : "active"}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className={`nav-link ${location.pathname === "/about" ? "" : "active"}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className={`form-check-input bg-${props.mode ? "dark" : ""} border-4 border-light`} onClick={switchclick} type="checkbox" role="switch" id="flexSwitch" />
                            <label className={`buuun text-${props.mode ? "light" : "dark"} me-4 ms-2`} htmlFor="flexSwitch">{props.motext}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;


