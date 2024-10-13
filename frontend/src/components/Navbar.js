import React from 'react'
import homeicon from "../assets/Home.png";
import backInactive from "../assets/back-inactive.png";

import logo from '../assets/Karakafamily-logo---02.png';
import { Link } from 'react-router-dom';
import "../App.css"


function Navbar({ btnCallback }, props) {
    return (
        <nav className='d-flex flex-row justify-content-center align-items-center  position-relative text-dark font-bold dropShadow bgNav w-100' style={{ height: "10vh" }}>
            <div className='d-flex flex-row  justify-content-start align-items-center ps-5 w-50' style={{ height: "100%" }}>
                <img src={logo} style={{ height: '45px' }} alt="Logo" />

            </div>
            <h5 className='textPrimary '>{props.backMotion}</h5>
            <div className="d-flex flex-row  justify-content-center align-items-center position-absolute top-0 end-0 bgBlock topbart-nav " style={{ height: "100%" }}>

                <di className="d-flex flex-row  justify-content-center align-items-center gap-4" style={{ height: "100%", width: "60%" }}>
                    <img src={backInactive} style={{ height: '30px' }} alt="Back Inactive" />
                    <Link to="/" className='nav-link'><img src={homeicon} style={{ height: '25px' }} alt="GroupLogo" /></Link>
                </di>
                <div className='wifiBlock' >

                </div>

            </div>

        </nav >
    )
}

export default Navbar